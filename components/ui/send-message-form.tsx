"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./stateful-button";
import { IoMailOpenOutline } from "react-icons/io5";

interface SendMessageFormProps {
  onClose?: () => void; // Optional close handler from modal
}

export function SendMessageForm({ onClose }: SendMessageFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "Developer",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
  try {
    const response = await fetch('/api/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }); 

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    setIsSubmitted(true);
  } catch (error) {
    console.error(error);
    alert('There was an error sending your message.');
  }
};


  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      role: "Developer",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-10"
    >
      {isSubmitted ? (
        <div className="flex flex-col items-center text-center space-y-6">
          <IoMailOpenOutline size={64} className="text-cyan-600 dark:text-teal-400" />
          <h2 className="text-xl font-semibold">Message Submitted Successfully</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Thank you! I will get back to you as soon as possible.
          </p>
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleReset}
              className="px-5 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Back to Form
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-md bg-cyan-600 text-white text-sm hover:bg-cyan-700 transition"
              >
                Close
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="bg-[#f8f8f8] dark:bg-cool-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-[#f8f8f8] dark:bg-cool-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Who are you?</Label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full h-10 px-3 rounded-md border border-input bg-[#f8f8f8] dark:bg-cool-black text-sm"
            >
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Client">Potential Client</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Write a message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="bg-[#f8f8f8] dark:bg-cool-black resize-none"
            />
          </div>

          <div className="pt-4">
            <Button onClick={handleSubmit}>Send Message</Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
