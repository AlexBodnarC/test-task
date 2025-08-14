import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ChatHeaderMenu } from './header-menu';
import { PromptBox } from './prompt-box';

import type { Message } from '@/types/chat';
import { ChatMessage } from './message';

export default function ChatPanel() {
  const [messages, setMessages] = React.useState<Message[]>([]);

  const handleSend = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    const userMsg: Message = {
      id: uuidv4(),
      role: 'user',
      text: clean,
    };
    setMessages((m) => [...m, userMsg]);

    // Auto‑reply in 2s with the same message
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: uuidv4(), role: 'assistant', text: clean },
      ]);
    }, 2000);
  };

  return (
    <div className="flex h-[calc(100vh-30px)] w-full flex-col rounded-xl border bg-white bg-chat-box-gradient">
      <div className="relative">
        <div className="absolute top-2 left-2">
          <ChatHeaderMenu />
        </div>
      </div>

      <div className="flex-1 mb-20 overflow-y-auto p-4 pt-14  bg-black-1  rounded-xl scrollbar-hide">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {messages.map((m) => (
            <ChatMessage key={m.id} id={m.id} role={m.role} text={m.text} />
          ))}
        </div>
      </div>

      <div className="rounded-xl relative">
        <div className="mx-auto w-full max-w-3xl rounded-2xl">
          <PromptBox onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}
