'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatWindow from './ChatWindow';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Chat Window - Responsive */}
            {isOpen && (
                <div className="fixed inset-x-3 bottom-16 sm:bottom-20 sm:right-4 sm:left-auto z-50 sm:w-96 h-[500px] max-h-[calc(100vh-80px)] shadow-2xl rounded-lg overflow-hidden">
                    <ChatWindow onClose={() => setIsOpen(false)} />
                </div>
            )}

            {/* Toggle Button - Responsive */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg"
                size="icon"
            >
                {isOpen ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
            </Button>
        </>
    );
}
