'use client';

import { cn } from '@/lib/utils';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

interface ChatMessageProps {
    message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
    const isUser = message.role === 'user';

    // Simple markdown-like formatting
    const formatContent = (content: string) => {
        return content
            .split('\n')
            .map((line, i) => {
                // Bold text
                line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                // Bullet points
                if (line.startsWith('• ') || line.startsWith('- ')) {
                    return `<li class="ml-3 sm:ml-4 text-xs sm:text-sm">${line.substring(2)}</li>`;
                }
                // Italic disclaimer
                if (line.startsWith('*') && line.endsWith('*')) {
                    return `<p class="text-[10px] sm:text-xs text-gray-500 italic mt-2">${line.slice(1, -1)}</p>`;
                }
                return `<p class="text-xs sm:text-sm">${line}</p>`;
            })
            .join('');
    };

    return (
        <div
            className={cn(
                'flex',
                isUser ? 'justify-end' : 'justify-start'
            )}
        >
            <div
                className={cn(
                    'max-w-[90%] sm:max-w-[85%] rounded-lg px-3 py-2 sm:px-4 sm:py-2',
                    isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                )}
            >
                <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: formatContent(message.content) }}
                />
            </div>
        </div>
    );
}
