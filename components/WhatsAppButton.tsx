"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaCommentDots } from "react-icons/fa"; // Icons
import { motion, AnimatePresence } from "framer-motion";

// Reusable Button Component (Code repeat nako mhanun)
interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
  positionClass: string;
  delay: number;
}

const ActionButton = ({
  icon,
  label,
  href,
  color,
  positionClass,
  delay,
}: ActionButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"} // WhatsApp sathi new tab, SMS sathi same tab
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: delay }} // Delay dila mhanje ek-ek karun yetil
      // Dynamic Classes for Color and Position
      className={`fixed bottom-8 ${positionClass} z-50 flex items-center gap-2 text-white p-4 rounded-full shadow-lg transition-all cursor-pointer group`}
      style={{
        backgroundColor: color,
        boxShadow: `0 4px 14px 0 ${color}66`, // Dynamic Colored Shadow (Hex Transparency)
      }}
    >
      {/* Pulse Effect Rings */}
      <span
        className="absolute inset-0 rounded-full border opacity-75 animate-ping"
        style={{ borderColor: color }}
      ></span>
      <span
        className="absolute inset-0 rounded-full border opacity-75 animate-pulse delay-75"
        style={{ borderColor: color }}
      ></span>

      {/* Icon */}
      <div className="text-2xl z-10 relative">{icon}</div>

      {/* Text Reveal Animation */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="whitespace-nowrap overflow-hidden font-semibold text-sm z-10 pr-2"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default function FloatingActions() {
  return (
    <>
      {/* 1. LEFT BUTTON: SMS (Blue) */}
      <ActionButton
        icon={<FaCommentDots />}
        label="Send SMS"
        href="sms:+918263921676?body=Hi, I want to inquire about a shoot."
        color="#3B82F6" // Standard Blue
        positionClass="left-8" // Left Side
        delay={0.2}
      />

      {/* 2. RIGHT BUTTON: WhatsApp (Green) */}
      <ActionButton
        icon={<FaWhatsapp />}
        label="WhatsApp"
        href="https://wa.me/918263921676?text=Hi, I want to book a photography session."
        color="#25D366" // Brand Green
        positionClass="right-8" // Right Side
        delay={0}
      />
    </>
  );
}
