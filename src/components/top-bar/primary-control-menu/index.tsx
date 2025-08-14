import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { PanelLeftClose, PenTool, Layers3 } from 'lucide-react';
import { IconButton } from '../icon-button';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

export const PrimaryControlMenu = ({
  variant = 'Variant 3',
}: {
  variant?: 'Variant 1' | 'Variant 2' | 'Variant 3';
}) => {
  const [value, setValue] = useState<string>(variant);

  return (
    <div className="flex items-center gap-2">
      <IconButton tooltip="Panels">
        <PanelLeftClose className="h-4 w-4" />
      </IconButton>

      <Separator orientation="vertical" className="!h-6 bg-base-200" />

      <IconButton tooltip="Layers">
        <Layers3 className="h-4 w-4" />
      </IconButton>
      <IconButton tooltip="Pen">
        <PenTool className="size-4 -rotate-90" />
      </IconButton>

      <Select
        value={value}
        onValueChange={(v) => {
          setValue(v);
        }}
      >
        <SelectTrigger className="h-8 w-[174px] justify-between rounded-md border-muted-foreground/20 bg-white text-sm">
          <SelectValue placeholder="Variant" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            className="text-base-900 font-monrope text-[13px] hover:bg-base-100"
            value="Variant 1"
          >
            Variant 1
          </SelectItem>
          <SelectItem
            className="text-base-900 font-monrope text-[13px] hover:bg-base-100"
            value="Variant 2"
          >
            Variant 2
          </SelectItem>
          <SelectItem
            className="text-base-900 font-monrope text-[13px] hover:bg-base-100"
            value="Variant 3"
          >
            Variant 3
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
