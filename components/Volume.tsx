import * as React from "react";
import "./volume.css";

export const Volume = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLInputElement>
>(({ className, ...props }) => {
  return (
    <input
      className={`volume ${className}`}
      type="range"
      min="0"
      max="100"
      step="1"
      {...props}
    />
  );
});

Volume.displayName = "Volume";
