"use client";

import { SendMessageForm } from "@/components/ui/send-message-form";
import { motion, AnimatePresence } from "framer-motion";

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MessageModal({ isOpen, onClose }: MessageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#f8f8f8] dark:bg-cool-black rounded-lg p-6 w-full max-w-md mx-auto shadow-xl"
            initial={{ scale: 0.95, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <SendMessageForm  onClose={onClose} />
          </motion.div>
        </motion.div>
        // <div className="fixed inset-0 z-[999] bg-black/60 flex p-10  items-center justify-center">
        //   <div className="bg-[#f8f8f8] dark:bg-cool-black mx-4 shadow-xl">
        //     <SendMessageForm />
        //   </div>
        // </div>
      )}
    </AnimatePresence>
  );
}
