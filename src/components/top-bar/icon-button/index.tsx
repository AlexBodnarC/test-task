import { Button } from '@/components/ui/button';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function IconButton({
  tooltip,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Button> & { tooltip?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 ${className ?? ''}`}
          {...props}
        >
          {children}
        </Button>
      </TooltipTrigger>
      {tooltip ? (
        <TooltipContent side="bottom" className="text-xs">
          {tooltip}
        </TooltipContent>
      ) : null}
    </Tooltip>
  );
}
