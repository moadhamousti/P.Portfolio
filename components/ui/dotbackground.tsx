// components/ui/dot-background.tsx (or wherever you prefer to place it)

import { cn } from "@/lib/utils";
import React from "react";

export function DotBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden"> {/* Ensure it fills its parent */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          "z-0" // Ensure it's behind other content
        )}
      />
      {/* Radial gradient for the container to give a faded look on sides */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center
        bg-[#f8f8f8] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
        dark:bg-cool-black"
         
      ></div>

      {/* This is where your main page content will go */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}