import * as React from "react";
import "./volume.css";

type VolumeProps = {
  className?: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Volume = React.forwardRef<HTMLInputElement, VolumeProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`volume ${className}`}
        type="range"
        min="0"
        max="100"
        step="1"
        {...props}
      />
    );
  }
);

Volume.displayName = "Volume";
