"use client";

import React from "react";
import { Camera, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold">YourName Photography</span>
            </div>
            <p className="text-gray-600">
              Capturing moments, Creating memories
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-500 transition"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
          <p>© 2025 YourName Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
