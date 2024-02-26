import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm ",
        className,
        props.isPlaying && "bg-red-200"
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5 pb-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLInputElement>
>(({ className, children }, ref) => (
  <div ref={ref} className={cn("flex items-center p-5 pt-0 pb-3", className)}>
    {children}
  </div>
));
CardFooter.displayName = "CardFooter";

export { Card, CardFooter, CardContent };
