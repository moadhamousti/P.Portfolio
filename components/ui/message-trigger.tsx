"use client";

import { MessageModal } from "@/lib/modals/message-modal";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

export function MessageTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="uppercase font-semibold text-xs bg-cool-black dark:bg-white dark:text-black text-white rounded-full px-8 py-4 flex items-center justify-center gap-2 hover:scale-105 active:scale-100 transition-all duration-300"
      >
        <span>Send Message</span>
        <FaLocationArrow />
      </button>

      <MessageModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
