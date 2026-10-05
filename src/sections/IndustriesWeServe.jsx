"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IndustriesWeServe() {
  return (
    <section className="bg-white py-10  px-4 sm:px-6 lg:px-15 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text & Content */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="space-y-6"
        >
          {/* Section Subtitle */}
          <div className="flex items-center space-x-2">
            <span>🌐</span>
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              Industries We Serve
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Custom Solutions. <br className="hidden sm:inline" />
            Industry-Specific <br className="hidden sm:inline" />
            Excellence.
          </h2>

          {/* Description Paragraph */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At VPack, we don’t believe in one-size-fits-all. Every industry
            comes with its own set of packaging challenges — and we engineer
            solutions that rise to the occasion. Whether it’s hygiene-sensitive
            pharma or fast-moving beverage lines, we’ve got you covered.
          </p>

          {/* Feature List with Checkmarks */}
          <ul className="space-y-3 pt-2">
            {[
              {
                strong: "Water",
                text: "Precision filling systems for pure, safe hydration.",
              },
              {
                strong: "Beverage",
                text: "Fast, efficient packaging for carbonated and non-carbonated drinks.",
              },
              {
                strong: "Pharmaceutical",
                text: "Sterile, GMP-compliant machines for sensitive applications.",
              },
              {
                strong: "Cosmetics",
                text: "Delicate and aesthetic solutions for beauty product packaging.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: index * 0.12,
                }}
                className="flex items-start space-x-3 text-gray-700 text-sm sm:text-base"
              >
                <span className="text-orange-500 font-bold mt-1">✔</span>
                <span>
                  <strong className="text-gray-900">{item.strong} :</strong>{" "}
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.35 }}
            className="pt-4"
          >
            <Link href={"/products"}>
              {" "}
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3 rounded shadow-md transition-all duration-300 w-full sm:w-auto">
                Our Products
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Responsive Image Layout with Smooth Uniform Animations */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] flex items-center justify-center mt-6 lg:mt-0">
          {/* Top / First Image (t1.png) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute top-0 right-2 sm:right-6 w-[78%] sm:w-[65%] lg:w-[420px] h-[190px] sm:h-[230px] lg:h-[260px] rounded-xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 z-10"
          >
            <Image
              src="/images/home/Industries-We-Serve/t1.png"
              alt="Industrial Packaging Technology"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 420px"
            />
          </motion.div>

          {/* Bottom / Second Image (t2.png) - Offset overlapping */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 0.15 }}
            className="absolute bottom-0 left-2 sm:left-6 w-[82%] sm:w-[70%] lg:w-[450px] h-[200px] sm:h-[240px] lg:h-[280px] rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-blue-950 z-20"
          >
            <Image
              src="/images/home/Industries-We-Serve/t2.png"
              alt="Automated Bottling Line"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 85vw, 450px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
