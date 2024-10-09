import * as React from "react";
import { Label as RadixLabel, LabelProps as RadixLabelProps } from "@radix-ui/react-label";
import { cn } from "@/lib/utils"; 

export const Label = React.forwardRef<HTMLLabelElement, RadixLabelProps>(
  ({ className, ...props }, ref) => (
    <RadixLabel
      ref={ref}
      className={cn("text-sm font-medium text-gray-700", className)} 
      {...props}
    />
  )
);

Label.displayName = "Label";
