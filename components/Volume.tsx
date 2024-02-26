import * as React from "react";
import "./volume.css";

export const Volume = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    className={`volume ${props.isPlaying && "bg-red-200"}`}
    type="range"
    min="0"
    max="100"
    step="1"
    {...props}
  />
));

Volume.displayName = "Volume";
