import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden"> {/* Ensure it fills its parent */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
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