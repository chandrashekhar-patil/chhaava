"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "Wedding",
    title: "Rohit & Neha",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
  {
    id: 2,
    category: "Fashion",
    title: "Urban Vogue",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  },
  {
    id: 3,
    category: "Pre-Wedding",
    title: "Goa Diaries",
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
  },
  {
    id: 4,
    category: "Wedding",
    title: "Royal Heritage",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: 5,
    category: "Events",
    title: "Concert Night",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  },
  {
    id: 6,
    category: "Fashion",
    title: "Studio Portrait",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  },
  {
    id: 7,
    category: "Pre-Wedding",
    title: "Sunset Love",
    src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
  },
  {
    id: 8,
    category: "Wedding",
    title: "South Indian Tale",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
  },
  {
    id: 9,
    category: "Events",
    title: "Corporate Meet",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
  },
];

const categories = ["All", "Wedding", "Pre-Wedding", "Fashion", "Events"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      // Find current index
      const currentIndex = categories.indexOf(activeCategory);
      // Calculate next index (Loop back to 0 if at end)
      const nextIndex = (currentIndex + 1) % categories.length;
      // Set new category
      setActiveCategory(categories[nextIndex]);
    }, 3000); // 3 Seconds Delay

    // Cleanup function: Jar user ne click kela tar jun timer band karaycha
    return () => clearTimeout(timer);
  }, [activeCategory]); // Dependency: Jevha category badlel, tevha timer parat chalu hoil

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-blue-500 font-medium tracking-widest uppercase text-sm">
            Our Masterpieces
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured <span className="text-blue-400">Stories</span>
          </h3>
        </motion.div>

        {/* Tabs Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Grid Animation */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 min-h-[500px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer mb-6 shadow-xl"
              >
                {/* Gradient Background instead of Image */}
                <div className="h-[320px] bg-linear-to-br from-blue-500/30 via-indigo-500/20 to-purple-500/30 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <span className="text-blue-400 text-xs uppercase tracking-widest">
                      {project.category}
                    </span>

                    {/* <h3 className="text-white text-xl font-semibold tracking-wide">
                      {project.title}
                    </h3> */}

                    <span className="inline-block px-4 py-1 text-[11px] rounded-full border border-white/30 text-[#000] backdrop-blur-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-blue-400 text-sm">
                          {project.category}
                        </p>
                        <p className="text-white font-semibold">
                          {project.title}
                        </p>
                      </div>

                      <div className="bg-white/20 p-3 rounded-full backdrop-blur-md">
                        <ArrowUpRight className="text-white w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 font-medium">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
