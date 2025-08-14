import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Plus, Mic, Globe2, ArrowUp } from 'lucide-react';

import { AddPhotoIcon } from '@/assets/icons/AddPhotoIcon';
import { SelectCampaignIcon } from '@/assets/icons/SelectCampaign';

export function PromptBox({ onSend }: { onSend: (text: string) => void }) {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const send = () => {
    onSend(value);
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <div className="absolute w-[calc(100%-16px)] left-1/2 -translate-x-1/2 bottom-2  flex items-center gap-2 rounded-2xl border bg-white p-2 shadow-sm">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg ">
            <Plus className="h-5 w-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="start"
          className="w-56 rounded-2lg p-2 "
        >
          <MenuItem icon={<AddPhotoIcon />} label="Add photos & files" />
          <MenuItem
            icon={<Globe2 className="size-5 text-base-500" />}
            label="Link"
          />
          <MenuItem icon={<SelectCampaignIcon />} label="Select campaign" />
        </PopoverContent>
      </Popover>

      <Input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Let’s keep going – what’s next?"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            send();
          }
        }}
        className="h-11 flex-1 border-0 bg-transparent text-[15px] focus-visible:ring-0"
      />

      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
        <Mic className="size-5" />
      </Button>

      <Button
        onClick={send}
        className="h-10 w-10 rounded-full bg-[#7C4DFF] p-0 hover:bg-[#6e3fff]"
        title="Send"
      >
        <ArrowUp className="size-5" />
      </Button>
    </div>
  );
}

function MenuItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-2  rounded-xl px-3 py-2 text-sm hover:bg-muted"
      onClick={(e) => e.preventDefault()}
    >
      <span className="grid h-6 w-6 place-items-center rounded-md bg-muted/70">
        {icon}
      </span>
      <span className="font-manrope text-base-900">{label}</span>
    </button>
  );
}
