import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground() {
  return (
    <div className="h-screen w-full dark:bg-black-100 bg-white flex items-center justify-center absolute top-0 left-0">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(64,64,64,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(64,64,64,0.15)_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
    </div>
  );
}
