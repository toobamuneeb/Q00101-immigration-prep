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

// Check if the question is relevant to immigration/USCIS topics
async function isRelevantQuestion(message: string): Promise<boolean> {
  // Allow basic greetings and pleasantries
  const greetings = /^(hi|hello|hey|good morning|good afternoon|good evening|how are you|thanks|thank you|ok|okay|yes|no)[\s\?\!]*$/i;
  if (greetings.test(message.trim())) {
    return true;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a classifier that determines if a question is related to U.S. immigration, USCIS forms, visa processes, or the ImmigrationPrep platform.

Respond with ONLY "YES" if the question is about:
- USCIS forms (I-130, I-485, I-589, N-400, etc.)
- Immigration processes, visas, green cards, citizenship
- Marriage-based immigration or sponsoring a spouse
- Refugee or asylum applications
- Immigration documents or requirements
- Immigration terminology
- The ImmigrationPrep platform or its features
- Questions like "how do I get married" in the context of immigration

Respond with ONLY "NO" if the question is about:
- General life advice unrelated to immigration
- Math, science, coding, or technology (unless specifically about the platform)
- Weather, news, sports, entertainment
- Any other topic clearly unrelated to U.S. immigration

Examples:
"What is Form I-130?" -> YES
"How do I apply for a green card?" -> YES
"How do I get married for immigration?" -> YES
"What is the refugee form?" -> YES
"What is Form I-589?" -> YES
"What is the weather today?" -> NO
"What is 2+2?" -> NO
"Tell me a joke" -> NO
"Write me a poem" -> NO`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0,
      max_tokens: 10,
    });

    const answer = response.choices[0].message.content?.trim().toUpperCase();
    console.log(`Relevance check for "${message}": ${answer}`);
    return answer === "YES";
  } catch (error) {
    console.error("Relevance check error:", error);
    // If check fails, allow the question (fail open)
    return true;
  }
}

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
    } catch (error) {
      console.error("Failed to create Supabase client:", error);
      supabase = null;
    }

    // Require authentication: if user is not logged in, return a friendly reply
    let userId: string | null = null;
    try {
      if (!supabase) {
        console.error("Supabase client is null");
        return NextResponse.json({
          reply:
            "Please sign in to use the AI Assistant. Log in to continue your conversation.",
          conversationId: conversationId || null,
        });
      }

      const { data: authData, error: authError } = await supabase.auth.getUser();
      
      if (authError) {
        console.error("Auth error:", authError);
        return NextResponse.json({
          reply:
            "Please sign in to use the AI Assistant. Log in to continue your conversation.",
          conversationId: conversationId || null,
        });
      }

      userId = authData?.user?.id || null;
      
      if (!userId) {
        console.log("No user ID found in auth data");
        return NextResponse.json({
          reply:
            "Please sign in to use the AI Assistant. Log in to continue your conversation.",
          conversationId: conversationId || null,
        });
      }

      console.log("User authenticated:", userId);
    } catch (error) {
      console.error("Authentication check failed:", error);
      return NextResponse.json({
        reply:
          "Please sign in to use the AI Assistant. Log in to continue your conversation.",
        conversationId: conversationId || null,
      });
    }

    // Check if question is relevant to immigration topics (only for authenticated users)
    const isRelevant = await isRelevantQuestion(message);
    if (!isRelevant) {
      return NextResponse.json({
        reply:
          "I'm specifically designed to help with U.S. immigration forms and USCIS processes. I can't assist with questions outside of immigration topics.\n\nIs there anything about immigration forms or the ImmigrationPrep platform I can help you with?",
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
