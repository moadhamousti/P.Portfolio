"use client";

import { oswald } from "@/data/constants/fonts";
import { socialMedia } from "@/data/index";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { DotBackground } from "./ui/dotbackground";
import { useState } from "react";
import { MessageModal } from "@/lib/modals/message-modal";
import { MessageTrigger } from "./ui/message-trigger";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DotBackground>
      <footer className="container">
        <div className="w-full pb-10" id="contact">
          <div className="flex flex-col items-center">
            <h1
              className={`${oswald.className} font-bold lg:max-w-[45vw] text-2xl text-center`}
            >
              Ready to take{" "}
              <span className="text-cyan-600 dark:text-teal-500">your</span>{" "}
              digital presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.
            </p>
            {/* <a
              href="mailto:moadhamousti@gmail.com"
              className="uppercase font-semibold text-xs bg-cool-black dark:bg-white dark:text-black text-white rounded-full px-8 py-4 flex items-center justify-center gap-2 hover:scale-105 active:scale-100 transition-all duration-300"
            >
              <span>Send Message</span>
              <FaLocationArrow />
            </a> */}
            <MessageTrigger />
          </div>

          <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">
              Copyright © {new Date().getFullYear()} Moad Hamousti
            </p>

            <div className="flex items-center md:gap-3 gap-6 mt-4 md:md-0">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.href}
                  target="_blank"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 bg-cyan-50 hover:bg-cyan-100 dark:hover:text-teal-500 transition-all duration-300 dark:bg-inherit"
                >
                  {info.img}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </DotBackground>
  );
}
