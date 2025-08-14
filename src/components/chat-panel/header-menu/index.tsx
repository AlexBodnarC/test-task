import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ArrowLeft, ChevronDown, Settings } from 'lucide-react';

export const ChatHeaderMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex group items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm font-medium shadow-sm"
        >
          <span className="truncate font-manrope">
            cognism.page/get-started
          </span>
          <ChevronDown className="h-4 w-4 text-base-500 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        className="w-[211px] h-[90px] rounded-2lg p-2"
      >
        <DropdownMenuItem asChild>
          <button
            type="button"
            className="flex w-full font-manrope items-center gap-2.5 rounded-xl  pt-2 text-sm hover:bg-muted"
          >
            <ArrowLeft className="size-5 text-base-500" />
            <span className="whitespace-nowrap">Back to Dynamic Pages</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            type="button"
            className="flex w-full font-manrope items-center gap-2.5 rounded-xl px-2 pb-2 text-sm hover:bg-muted"
          >
            <Settings className="size-5 text-base-500" />
            <span>Page Settings</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
