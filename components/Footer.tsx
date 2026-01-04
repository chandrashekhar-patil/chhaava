"use client";

import React from "react";
import { Camera, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-14 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <img
                src="/logo chhaava.png"
                alt="Chhaava Logo"
                className="w-18"
              />

              <span className="text-2xl font-semibold tracking-wide">
                Chhaava Photography
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Capturing moments, creating memories 📸
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://instagram.com/chhaava_photography"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow hover:bg-pink-500 hover:text-white transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow hover:bg-blue-500 hover:text-white transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow hover:bg-red-500 hover:text-white transition-all"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Chhaava Photography. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
