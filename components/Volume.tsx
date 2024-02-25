import * as React from "react";
import { cn } from "@/lib/utils";
import "./volume.css";

export const Volume = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <input id="volume" type="range" min="0" max="100" step="1" />
));

Volume.displayName = "Volume";
