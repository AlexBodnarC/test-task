import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

import type { Message } from '@/types/chat';

export function ChatMessage({ role, text }: Message) {
  const isAssistant = role === 'assistant';
  return (
    <div
      className={cn('flex gap-3', isAssistant ? 'items-start' : 'justify-end')}
    >
      {isAssistant && (
        <div className="mt-2 rounded-full  p-1">
          <Sparkles className="h-4 w-4 text-indigo-500" />
        </div>
      )}
      <div
        className={cn(
          'max-w-[min(85%,60ch)] whitespace-pre-wrap text-left break-words [overflow-wrap:anywhere] overflow-x-hidden rounded-2xl px-4 py-2 text-sm leading-relaxed',
          isAssistant
            ? 'bg-transparent text-base-900'
            : 'bg-white text-base-900'
        )}
      >
        {text}
      </div>
    </div>
  );
}
