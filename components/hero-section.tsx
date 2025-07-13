"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ubuntu } from "@/data/constants/fonts";
import profileImg from "@/public/profile.jpg";
import { FlipWords } from "./ui/flip-words";
import { FaLocationArrow } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
  const baseStart = 90; 
  const baseEnd = 50;
  const delayStep = 7;  

  const selectors = [
    ".profile-img",
    ".greeting",
    ".headline",
    ".paragraph",
    ".cta-button",
  ];

  selectors.forEach((selector, i) => {
    gsap.fromTo(
      selector,
      { opacity: 3, y: 0 },
      {
        opacity: 0,
        y: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".paragraph",
          start: `top ${baseStart - delayStep * i}%`,
          end: `top ${baseEnd - delayStep * i}%`,
          scrub: true,
          scroller: document.body,
        },
      }
    );
  });
}, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-6 text-center py-32 z-50 relative min-h-screen"
    >
      <div className="rounded-full overflow-hidden w-32 h-32 profile-img">
        <Image
          src={profileImg}
          alt="Moad Hamousti Frontend Developer Profile Picture"
          priority
        />
      </div>

      <h2 className="font-semibold text-lg greeting">Hi, I&apos;m Moad 🤗</h2>

      <h1
        className={`${ubuntu.className} font-bold text-3xl md:text-5xl flex flex-col headline`}
      >
        <span>From Design to Development,</span>
        <span>
          <span className="text-teal-500">I Build Exceptional</span> <br />
          <FlipWords
            words={[
              "Innovative Designs",
              "Effortless Interactions",
              "Robust Architectures",
              "Engaging Interfaces",
              "Tailored Experiences",
            ]}
            className="dark:text-teal-700 text-cyan-600 text-center h-[72px] sm:h-auto"
          />
          <span className="hidden md:inline">.</span>
        </span>
      </h1>

      <p className="lg:text-md dark:text-slate-300 paragraph">
        Leveraging my expertise in both <b>front-end</b>{" "}
        <br className="hidden md:block" /> and <b>back-end</b> development, I
        bring ideas to life, <br className="hidden md:block" /> crafting
        seamless user experiences and robust functionality
      </p>

      <a
        href="mailto:moadhamousti@gmail.com"
        className="uppercase font-semibold text-xs bg-cool-black dark:bg-white dark:text-black text-white rounded-full px-8 py-4 flex items-center justify-center gap-2 hover:scale-105 active:scale-100 transition-all duration-300 cta-button"
      >
        <span>Let&apos;s get in touch</span>
        <FaLocationArrow />
      </a>
    </div>
  );
}
