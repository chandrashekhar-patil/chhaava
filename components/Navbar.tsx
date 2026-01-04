"use client";

import React, { useState, useEffect } from "react";
import { Camera, Home, Image, Briefcase, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Device Detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll Detection
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollValue = window.scrollY > 50;
      setIsScrolled(scrollValue);
      if (scrollValue) setIsMobileOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    onNavigate(id);
    setIsMobileOpen(false);
    setIsHovered(false);
  };

  const isExpanded = isHovered || isMobileOpen;

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "portfolio", label: "Work", icon: <Image className="w-4 h-4" /> },
    {
      id: "services",
      label: "Services",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { id: "contact", label: "Book", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center items-start pointer-events-none px-4">
      <motion.div
        layout
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={() => isMobile && setIsMobileOpen(!isMobileOpen)}
        initial={{ borderRadius: 50, width: 60, height: 45 }}
        animate={{
          width: isExpanded
            ? isMobile
              ? "95%"
              : 600 // Fixed max width (Not too wide)
            : isScrolled
            ? 50
            : 60, // Fixed small width
          height: isExpanded ? 55 : 45, // Less height change = Less movement
          borderRadius: 50,
        }}
        // --- STABILITY FIX 2: NO BOUNCE PHYSICS ---
        transition={{
          type: "spring",
          stiffness: 150, // Reduced stiffness (Softer)
          damping: 25, // Increased damping (Stops bouncing)
          mass: 0.5, // Lighter feel
        }}
        className={`
          bg-slate-900/95 backdrop-blur-2xl shadow-2xl border border-slate-700/50 
          overflow-hidden relative flex items-center pointer-events-auto
          cursor-pointer select-none
          ${isExpanded ? "justify-between px-2" : "justify-center"} 
        `}
      >
        <AnimatePresence mode="wait">
          {/* --- LEFT SIDE: LOGO ICON --- */}
          <motion.div
            layout="position"
            key="logo-container"
            className={`flex items-center z-10 shrink-0 ${
              !isExpanded ? "absolute inset-0 justify-center" : "relative ml-3"
            }`}
            onClick={(e) => {
              if (isExpanded) {
                e.stopPropagation();
                scrollToSection("home");
              }
            }}
          >
            <img
              src="/logo chhaava.png"
              alt="Chhaava Logo"
              className={`transition-all duration-300
      ${isScrolled && !isExpanded ? "w-12" : "w-12"}
      filter brightness-0 invert
    `}
            />
          </motion.div>

          {isExpanded && (
            <motion.div
              key="menu-items"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }} 
              className="flex items-center gap-1 md:gap-2 overflow-x-auto mx-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection(item.id);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all shrink-0 whitespace-nowrap"
                >
                  <span className="md:hidden">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </motion.div>
          )}

          {/* --- RIGHT: ACTION BUTTON --- */}
          {isExpanded && (
            <motion.div
              key="action-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 mr-1"
            >
              {isMobile ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileOpen(false);
                  }}
                  className="p-2 bg-slate-800 rounded-full text-white hover:bg-slate-700"
                >
                  <X size={18} />
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection("contact");
                  }}
                  className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                >
                  Book
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
