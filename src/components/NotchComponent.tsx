"use client";

import React from "react";
import { motion } from "framer-motion";

interface NotchHeaderProps {
  text: string;
  isActive: boolean;
}

export const Notch: React.FC<NotchHeaderProps> = ({ text, isActive }) => {
  return (
    <div className="relative flex items-center w-full lg:w-60 h-8 bg-muted/50 rounded-3xl overflow-hidden shadow-md">
      {/* Animated text */}
      <motion.div
        className="flex flex-row gap-1 text-black font-medium items-center"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        }}
      >
        <motion.div
          className={`w-2 h-2 rounded-full ${isActive ? "bg-green-500" : "bg-red-500"}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <p className="text-primary whitespace-nowrap">{text}</p>
      </motion.div>
    </div>
  );
};
