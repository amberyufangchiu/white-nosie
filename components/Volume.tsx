import * as React from "react";
import { cn } from "@/lib/utils";
import "./volume.css";

export const Volume = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    className="volume"
    type="range"
    min="0"
    max="100"
    step="1"
    {...props}
  />
));

Volume.displayName = "Volume";
