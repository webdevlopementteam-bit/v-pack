"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OurProducts() {
  const leftColumnProducts = [
    "low cost Mineral Water Bottling Plant",
    "30 BPM Mineral Water Bottling Plant",
    "Cold Drink Bottling Plant",
  ];

  const rightColumnProducts = [
    "Juice Processing & Packaging Plant",
    "Filling Machine",
    "Can Filling Machine",
  ];

  return (
    <section className="bg-gray-800 text-white py-10 px-6 lg:px-15 overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-6xl mx-auto text-center space-y-4 mb-16"
      >
        {/* Section Subtitle */}
        <p className="text-[#FF4500] font-semibold text-[16px] md:[text-18px] tracking-widest uppercase">
          OUR PRODUCTS
        </p>

        {/* Main Heading - Responsive mobile alignment & typography */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight max-w-4xl mx-auto leading-snug sm:leading-tight text-white px-2">
          Precision Meets Purpose{" "}
          <span className="text-[#FF4500] inline-block">—</span> Empowering
          Every Packaging Line
        </h2>
      </motion.div>

      {/* Products List Grid (2 Columns) */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="space-y-6"
        >
          {leftColumnProducts.map((product, index) => (
            <div key={index} className="group cursor-pointer flex items-end">
              <span className="text-gray-200 group-hover:text-[#FF4500] transition-colors duration-200 text-[16px] md:text-lg font-medium pr-3 whitespace-nowrap">
                {product}
              </span>

              {/* Dotted fill line that takes up the remaining space */}
              <div className="flex-grow border-b border-dotted border-gray-600 mb-1.5 group-hover:border-[#FF4500]/50 transition-colors duration-200"></div>
            </div>
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="space-y-6"
        >
          {rightColumnProducts.map((product, index) => (
            <div key={index} className="group cursor-pointer flex items-end">
              <span className="text-gray-200 group-hover:text-[#FF4500] transition-colors duration-200 text-[16px] md:text-lg font-medium pr-3 whitespace-nowrap">
                {product}
              </span>

              {/* Dotted fill line that takes up the remaining space */}
              <div className="flex-grow border-b border-dotted border-gray-600 mb-1.5 group-hover:border-[#FF4500]/50 transition-colors duration-200"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Center Brand Badge with Horizontal Lines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-5xl mx-auto relative flex items-center justify-center pt-4"
      >
        {/* Left Line */}
        <div className="flex-grow border-t border-gray-700"></div>

        {/* Logo / Badge Box */}
        <div className="mx-6 px-5 py-2 border border-[#FF4500] rounded-md bg-[#0a0e11] shadow-md shadow-orange-950/20">
          <span className="text-white font-bold tracking-wider text-lg flex items-center gap-1">
            <span className="text-[#FF4500] bg-[#FF4500]/10 px-1.5 py-0.5 rounded text-sm">
              V
            </span>
            Pack
            <span className="text-[10px] align-super text-[#FF4500] font-normal">
              R
            </span>
          </span>
        </div>

        {/* Right Line */}
        <div className="flex-grow border-t border-gray-700"></div>
      </motion.div>
    </section>
  );
}
