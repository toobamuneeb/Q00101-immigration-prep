import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@/lib/supabase/server";
import { CHAT_SYSTEM_PROMPT } from "@/lib/constants/prompts";
import { Database } from "@/types/database";
import { SupabaseClient } from "@supabase/supabase-js";
export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, conversationId } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Rate limiting check (simple implementation)
    // In production, use Redis or similar

    let supabase: SupabaseClient<Database> | null = null;
    try {
      supabase = await createClient();
    } catch (_) {
      supabase = null;
    }

    // Require authentication: if user is not logged in, return a friendly reply
    try {
      const { data: authData } = supabase
        ? await supabase.auth.getUser()
        : { data: { user: null } } as any;
      const userId = authData?.user?.id || null;
      if (!userId) {
        return NextResponse.json({
          reply:
            "Please sign in to use the AI Assistant. Log in to continue your conversation.",
          conversationId: conversationId || null,
        });
      }
    } catch (_) {
      return NextResponse.json({
        reply:
          "Please sign in to use the AI Assistant. Log in to continue your conversation.",
        conversationId: conversationId || null,
      });
    }

    // Get or create conversation
    let convId = conversationId;
    // if (!convId) {
    //     let userId: string | null = null;
    //     try {
    //         if (supabase) {
    //             const { data: { user } } = await supabase.auth.getUser();
    //             userId = user?.id || null;
    //         }
    //     } catch (_) {}

    //     if (supabase) {
    //         try {
    //             const { data: conv } = await supabase
    //                 .from('chat_conversations')
    //                 .insert({
    //                     user_id: userId,
    //                     session_id: userId ? null : crypto.randomUUID(),
    //                     context_type: 'general',
    //                 } as any)
    //                 .select()
    //                 .single() as any;
    //             convId = conv?.id || crypto.randomUUID();
    //         } catch (_) {
    //             convId = crypto.randomUUID();
    //         }
    //     } else {
    //         convId = crypto.randomUUID();
    //     }
    // }

    // Get conversation history (last 10 messages for context)
    let history: any[] | null = null;
    // try {
    //     if (supabase) {
    //         const { data } = await supabase
    //             .from('chat_messages')
    //             .select('role, content')
    //             .eq('conversation_id', convId)
    //             .order('created_at', { ascending: true })
    //             .limit(10) as any;
    //         history = data || null;
    //     }
    // } catch (_) {}

    // Build messages array
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: CHAT_SYSTEM_PROMPT },
      ...(history || []).map((msg: any) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      { role: "user", content: message },
    ];

    // Call OpenAI
    let reply = "";
    let completionUsagePrompt: number | undefined;
    let completionUsageCompletion: number | undefined;
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages,
        temperature: 0.7,
        max_tokens: 800,
      });
      reply =
        completion.choices[0].message.content ||
        "I apologize, I was unable to generate a response.";
      completionUsagePrompt = completion.usage?.prompt_tokens;
      completionUsageCompletion = completion.usage?.completion_tokens;
    } catch (_) {
      reply =
        "Sorry, the assistant is unavailable right now. Please try again later.";
    }

    // Save messages to database
    try {
      // if (supabase) {
      //     await supabase.from('chat_messages').insert([
      //         {
      //             conversation_id: convId,
      //             role: 'user',
      //             content: message,
      //             tokens_used: completionUsagePrompt,
      //         },
      //         {
      //             conversation_id: convId,
      //             role: 'assistant',
      //             content: reply,
      //             tokens_used: completionUsageCompletion,
      //             model_used: 'gpt-4-turbo-preview',
      //         },
      //     ] as any);
      // }
    } catch (_) {}

    return NextResponse.json({
      reply,
      conversationId: convId,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
