"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-3"
            >
              Our Story
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Capturing Soul, <br />
              <span className="text-blue-400 text-[35px]">Not Just Smiles.</span>
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              मी एक passionate photographer आहे जो तुमच्या आयुष्यातील special
              moments capture करतो. माझ्याकडे 1+ वर्षांचा experience आहे
              wedding, pre-wedding, events आणि portrait photography मध्ये.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              प्रत्येक photo मध्ये एक story असते आणि मी ती story सुंदरपणे
              capture करण्याचा प्रयत्न करतो. तुमच्या special moments ला forever
              preserve करणे हा माझा passion आहे.
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8"
            >
              {[
                { number: "5+", label: "Happy Clients" },
                { number: "10+", label: "Events Covered" },
                { number: "1+", label: "Years Exp." },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Images (Masonry Style) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400"
              alt="Photography"
              className="rounded-2xl shadow-2xl translate-y-8"
            />
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400"
              alt="Photography"
              className="rounded-2xl shadow-2xl -translate-y-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
