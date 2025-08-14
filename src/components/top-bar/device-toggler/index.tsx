import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import { useState } from 'react';

export const DeviceToggler = () => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>(
    'desktop'
  );

  return (
    <div>
      <ToggleGroup
        type="single"
        value={device}
        onValueChange={(v) => v && setDevice(v as typeof device)}
        className="rounded-lg border h-8 gap-x-1 bg-base-100 p-0.5"
      >
        <ToggleGroupItem
          value="desktop"
          className="h-7 w-8 data-[state=on]:bg-white "
          aria-label="Desktop "
        >
          <Monitor className="size-[13px]" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="tablet"
          className="h-7 w-8 data-[state=on]:bg-white "
          aria-label="Tablet"
        >
          <Tablet className="size-[13px]" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="mobile"
          className="h-7 w-8 data-[state=on]:bg-white "
          aria-label="Mobile"
        >
          <Smartphone className="size-[13px]" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
