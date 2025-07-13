"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ubuntu } from "@/data/constants/fonts";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Citation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const baseStart = 90; // top 90%
      const baseEnd = 50;   // top 50%
      const delayStep = 1.4;

      // Animate left Quote: fade + move up & left
      gsap.fromTo(
        ".line1",
        { opacity: 3, y: 0, x: 0 },
        {
          opacity: 1,
          y: -10,
          x: -10, // move left
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current!,
            start: `top ${baseStart}%`,
            end: `top ${baseEnd}%`,
            scrub: true,
            scroller: document.body,
          },
        }
      );

      // Animate right Quote: fade + move up & right
      gsap.fromTo(
        ".line4",
        { opacity: 3, y: 0, x: 0 },
        {
          opacity: 1,
          y: -10,
          x: 10, // move right
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current!,
            start: `top ${baseStart - delayStep * 3}%`,
            end: `top ${baseEnd - delayStep * 3}%`,
            scrub: true,
            scroller: document.body,
          },
        }
      );

      // Animate text lines: fade + move up with staggered delay
      const selectors = [".line2", ".line3"];
      selectors.forEach((selector, i) => {
        gsap.fromTo(
          selector,
          { opacity: 3, y: 0 },
          {
            opacity: 0.8,
            y: -10,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current!,
              start: `top ${baseStart - delayStep * (i + 1)}%`,
              end: `top ${baseEnd - delayStep * (i + 1)}%`,
              scrub: true,
              scroller: document.body,
            },
          }
        );
      });

      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pb-32">
      <p
        className={`${ubuntu.className} font-bold text-2xl md:text-4xl flex flex-col text-center relative`}
      >
        <Quote className="absolute left-0 -top-5 rotate-180 line1" />
        <span className="line2 text-zinc-500 dark:text-zinc-500">
          I don&apos;t just think <br className="md:hidden" /> of a solution,
        </span>
        <span className="line3">
          I provide the solution <span className="text-cyan-600">.</span>
        </span>
        <Quote className="absolute right-0 -bottom-5 line4" />
      </p>
    </div>
  );
}
