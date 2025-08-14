import { Button } from '@/components/ui/button';

import { IconButton } from './icon-button';
import { Separator } from '@/components/ui/separator';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Undo2, Redo2 } from 'lucide-react';
import { DeviceToggler } from './device-toggler';
import { PrimaryControlMenu } from './primary-control-menu';

export function TopBar({
  onUndo,
  onRedo,
  onDiscard,
  onSave,
}: {
  variant?: 'Variant 1' | 'Variant 2' | 'Variant 3';
  onVariantChange?: (v: string) => void;
  onUndo?: () => void;
  onRedo?: () => void;
  onDiscard?: () => void;
  onSave?: () => void;
}) {
  return (
    <TooltipProvider>
      <header className="w-full">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between gap-3 ">
          <PrimaryControlMenu variant="Variant 1" />

          <DeviceToggler />

          <div className="flex items-center gap-2">
            <div className="flex border border-base-200 rounded-2lg items-center">
              <IconButton tooltip="Undo" onClick={onUndo}>
                <Undo2 className="h-4 w-4" />
              </IconButton>
              <Separator orientation="vertical" className="!h-5 bg-base-200" />
              <IconButton tooltip="Redo" onClick={onRedo}>
                <Redo2 className="h-4 w-4" />
              </IconButton>
            </div>
            <Button variant="outline" className="h-8 px-3" onClick={onDiscard}>
              Discard
            </Button>
            <Button
              className="h-8 px-3 bg-[#795DFC] text-white hover:bg-[#6e3fff]"
              onClick={onSave}
            >
              Save
            </Button>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}
