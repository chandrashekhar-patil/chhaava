"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Camera, Star } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // --- VIDEO PLAYLIST LOGIC (Seamless Buffer) ---
  const videoSources = ["/video-1.mp4", "/video-2.mp4", "/video-3.mp4"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [activePlayer, setActivePlayer] = useState<1 | 2>(1); // Player 1 or 2 is visible

  const player1Ref = useRef<HTMLVideoElement>(null);
  const player2Ref = useRef<HTMLVideoElement>(null);

  // Handle Video Switch when one ends
  const handleVideoEnd = () => {
    // Determine who is next
    const nextPlayer =
      activePlayer === 1 ? player2Ref.current : player1Ref.current;

    // Play the hidden player
    if (nextPlayer) {
      nextPlayer.play().then(() => {
        // Only switch visibility AFTER next video starts playing (Prevents flicker)
        setActivePlayer(activePlayer === 1 ? 2 : 1);

        // Setup indexes for the NEXT round
        const newCurrent = nextIndex;
        const newNext = (nextIndex + 1) % videoSources.length;

        setCurrentIndex(newCurrent);
        setNextIndex(newNext);

        // Prepare the player that just finished with the NEW upcoming video
        const finishedPlayer =
          activePlayer === 1 ? player1Ref.current : player2Ref.current;
        if (finishedPlayer) {
          finishedPlayer.src = videoSources[newNext];
          finishedPlayer.load(); // Load it in background
        }
      });
    }
  };

  // Initial Load
  useEffect(() => {
    // Set initial sources
    if (player1Ref.current) player1Ref.current.src = videoSources[0];
    if (player2Ref.current) player2Ref.current.src = videoSources[1];
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 1. SEAMLESS VIDEO BACKGROUND (Double Buffering) */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Player 1 */}
        <video
          ref={player1Ref}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            activePlayer === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          muted
          playsInline
          onEnded={handleVideoEnd} // Video sampla ki switch
          autoPlay // First video starts auto
        />

        {/* Player 2 */}
        <video
          ref={player2Ref}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            activePlayer === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          muted
          playsInline
          onEnded={handleVideoEnd}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-20"></div>
        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-20"></div>
        {/* Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.07] z-30 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        ></div>
      </div>

      {/* 2. Main Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-40 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-white/80 text-xs font-medium tracking-[0.2em] uppercase">
            Bookings Open 2026
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="block"
          >
            Capturing
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 pb-2"
          >
            Eternal Moments
          </motion.span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed"
        >
          Cinematic photography that tells your unique story.{" "}
          <br className="hidden md:block" />
          Specializing in{" "}
          <span className="text-white font-medium">Royal Weddings</span> &{" "}
          <span className="text-white font-medium">Conceptual Shoots</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-6"
        >
          {/* Primary Button */}
          <button
            onClick={() => onNavigate("portfolio")}
            className="
      group relative
      w-full sm:w-auto
      min-w-[180px]
      h-[46px] sm:h-[50px]
      px-8
      bg-white text-black
      rounded-full
      font-semibold text-sm sm:text-base
      overflow-hidden
      transition-all duration-300
      hover:scale-[1.04]
      active:scale-95
      shadow-lg
    "
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Work
            </span>

            <div className="absolute inset-0 bg-blue-100 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => onNavigate("contact")}
            className="
      w-full sm:w-auto
      min-w-[180px]
      h-[46px] sm:h-[50px]
      px-8
      rounded-full
      border border-white/40
      text-white
      font-medium text-sm sm:text-base
      backdrop-blur-md
      transition-all duration-300
      hover:bg-white/10 hover:border-white
      active:scale-95
    "
          >
            Book a Session
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
