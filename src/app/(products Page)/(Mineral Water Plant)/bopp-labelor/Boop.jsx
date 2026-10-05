"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import FAQ from "@/components/FAQ";
import TopHeader from "@/components/TopHeader";

export default function BOPPLabelorPage() {
  const router = useRouter();

  const handleCall = () => {
    window.location.href = "tel:+919135636541";
  };

  const handleQuote = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-orange-200">
      {/* Top Header */}

      <TopHeader i={"🏷️"} t={"BOPP Labelor"} />

      {/* Main Container with Two-Column Sticky Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Fixed / Sticky Product Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 relative overflow-hidden"
            >
              {/* Machine Image */}
              <div className="rounded-xl overflow-hidden mb-5 bg-gradient-to-b from-slate-50 to-slate-100 p-2 border border-slate-100">
                <img
                  src="/images/products/boop.png"
                  alt="BOPP Labelor Industrial Machine"
                  className="w-full h-64 object-contain md:object-cover rounded-lg shadow-inner hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-3 text-amber-400 text-lg">
                {"★".repeat(5)}
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-xl font-bold text-[#102a43] mb-3 flex items-center gap-2">
                <span>🎯</span> BOPP Labelor – Label It Like a Pro
              </h2>

              <p className="text-[16px] md:text-[18px] leading-relaxed mb-4 text-slate-600">
                When labeling precision meets performance, you get the{" "}
                <strong>BOPP Labelor</strong> — your next best addition to the
                packaging line. This machine brings together the perfect mix of
                speed, sensor accuracy, and flexible design to handle everything
                from short labels to wide-format branding in one intelligent
                system.
              </p>

              <p className="text-[16px] md:text-[18px] leading-relaxed mb-6 text-slate-600">
                Ideal for industries dealing with high-volume labeling on
                bottles, jars, pouches, and more — the BOPP Labelor doesn't just
                apply labels, it <strong>applies excellence</strong>.
              </p>

              {/* Call Now Button */}
              <button
                onClick={handleCall}
                className="w-full py-3 px-6 bg-white hover:bg-orange-50 text-slate-800 font-medium rounded-xl border border-orange-400 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Call Now</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Scrollable Content Container */}
          <div className="lg:col-span-7 space-y-8">
            {/* Description & Specs Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#102a43] tracking-tight mb-3">
                High-Speed Labeling with Precision & Power
              </h2>

              <div className="flex items-center gap-1 text-orange-500 text-xl mb-6">
                {"★".repeat(5)}
              </div>

              <hr className="border-dashed border-slate-200 mb-6" />

              <h3 className="text-lg font-bold text-[#102a43] mb-3">
                Description
              </h3>

              <p className="text-[16px] md:text-[18px] leading-relaxed mb-4 text-slate-600">
                The <strong>BOPP Labelor</strong> is a robust, high-precision
                labeling machine designed to streamline label application across
                a variety of packaging types. Engineered for flexibility and
                speed, it supports a wide range of label sizes and materials,
                making it ideal for modern production lines that demand both
                efficiency and adaptability.
              </p>

              <p className="text-[16px] md:text-[18px] leading-relaxed mb-6 text-slate-600">
                Equipped with <strong>Siemens S7 PLC controls</strong>, optional
                modem integration, and reliable sensor systems, this machine
                ensures accurate and consistent label placement — even on clear
                or reflective surfaces. Whether you're working with beverages,
                cosmetics, or FMCG products, the BOPP Labelor is the dependable
                workhorse your production floor needs.
              </p>

              <hr className="border-dashed border-slate-200 mb-6" />

              <h3 className="text-lg font-bold text-[#102a43] mb-4 flex items-center gap-2">
                <span>⚙️</span> Technical Specifications
              </h3>

              <ul className="space-y-3 text-[16px] md:text-[18px] text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Maximum Label Web Width:</strong> Available in 125
                    mm, 210 mm, or 260 mm formats to support multiple label
                    types.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Label Length Range:</strong> Adjustable from 10 mm
                    to 200 mm for diverse product labeling.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Label Reel Core Diameter:</strong> Supports both 75
                    mm and 38 mm core sizes for material flexibility.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Label Material Compatibility:</strong> Works with
                    most currently available label materials in the market.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Machine Linear Speed:</strong> Operates between 4 to
                    35 meters per minute, optimized for high-throughput
                    operations.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Machine Weight:</strong> Approximately 150 Kg —
                    sturdy and stable for industrial environments.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>PLC Control System:</strong> Siemens S7 ensures
                    intelligent and responsive control.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Optional Integrated Modem:</strong> Siemens modem
                    for remote diagnostics and updates (optional feature).
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Label Gap Sensor:</strong> Equipped with an optical
                    or micro switch sensor for accurate label spacing.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Product Detection Sensor:</strong> Clear object
                    diffuse sensor detects transparent items with ease.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Compressed Air Requirement:</strong> 60–80 psi (only
                    needed if over printer is attached).
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Electrical Requirements:</strong> Operates on a
                    single-phase 230 V power supply at 50–60 Hz frequency.
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#102a43] mt-8 mb-4 flex items-center gap-2">
                <span>⚙️</span> Performance Highlights:
              </h3>

              <ul className="space-y-3 text-[16px] md:text-[18px] text-slate-700 mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <span>🎯</span> <strong>Precision Label Placement</strong> –
                    Even on transparent or reflective containers.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <span>🚀</span> <strong>High-Speed Output</strong> – Up to
                    35 m/min linear speed for fast-paced operations.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <span>🧠</span> <strong>Smart PLC Control</strong> –
                    Seamless operation through Siemens S7 interface.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <span>🔄</span>{" "}
                    <strong>Flexible Label Compatibility</strong> – Works with a
                    broad spectrum of label sizes and materials.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <span>🔍</span> <strong>Reliable Sensors</strong> – Ensures
                    consistent labeling with minimal errors.
                  </div>
                </li>
              </ul>

              <div className="flex justify-center pt-2">
                <button
                  onClick={handleQuote}
                  className="py-3 px-8 bg-white hover:bg-orange-50 text-slate-800 font-medium rounded-xl border border-orange-400 shadow-sm transition-all duration-200 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Get a quote</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Ideal For Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-[#102a43] mb-2 flex items-center gap-2">
                <span>🏭</span> Ideal For
              </h3>

              <p className="text-[16px] md:text-[18px] text-slate-500 mb-4">
                Perfect for industries such as:
              </p>

              <ul className="space-y-2.5 text-[16px] md:text-[18px] text-slate-700">
                <li className="flex items-center gap-2.5">
                  <span>•</span> <span>🥤 Beverage bottling</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span> <span>💄 Cosmetics and personal care</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span> <span>🍫 Food and FMCG packaging</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span>{" "}
                  <span>🧴 Household and chemical containers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span> <span>🛍️ Retail product labeling</span>
                </li>
              </ul>
            </motion.div>

            {/* Why Choose Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-[#102a43] mb-4 flex items-center gap-2">
                <span>🔧</span> Why Choose BOPP Labelor?
              </h3>

              <ul className="space-y-3 text-[16px] md:text-[18px] text-slate-700">
                <li className="flex items-center gap-2.5">
                  <span>•</span>{" "}
                  <span className="text-purple-600 font-bold">✔</span> Seamless
                  performance for continuous operations
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span>{" "}
                  <span className="text-purple-600 font-bold">✔</span> Built
                  with top-grade Siemens automation
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span>{" "}
                  <span className="text-purple-600 font-bold">✔</span>{" "}
                  Compatible with clear and irregular packaging
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span>{" "}
                  <span className="text-purple-600 font-bold">✔</span> Easy to
                  maintain, operate, and scale
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span>{" "}
                  <span className="text-purple-600 font-bold">✔</span> Compact
                  design with industrial-grade strength
                </li>
              </ul>
            </motion.div>

            {/* Ready to Transform CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#102a43] mb-2 flex items-center justify-center gap-2">
                <span>📞</span> Ready to Transform Your Labeling Line? Let's
                Talk!
              </h3>

              <p className="text-[16px] md:text-[18px] text-slate-500 mb-6">
                Call us today to discover how the BOPP Labelor can elevate your
                packaging game.
              </p>

              <div className="inline-block">
                <button
                  onClick={handleCall}
                  className="py-3 px-8 bg-white hover:bg-orange-50 text-slate-800 font-medium rounded-xl border border-orange-400 shadow-sm transition-all duration-200 flex items-center gap-2 group mx-auto cursor-pointer"
                >
                  <span>Call Now</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Boost Your Production */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-[#102a43] mb-2 flex items-center gap-2">
                <span>🚀</span> Boost Your Production with Confidence
              </h3>

              <p className="text-[16px] md:text-[18px] text-slate-500 italic">
                With Siemens precision and flexible design, the BOPP Labelor
                delivers performance you can count on.
              </p>
            </motion.div>

            {/* Engineered for Excellence Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#102a43] mb-2 flex items-center justify-center gap-2">
                <span>🎯</span> Engineered for Excellence. Built for You.
              </h3>

              <p className="text-[16px] md:text-[18px] text-slate-500 mb-6">
                From speed to accuracy — every label tells a story of quality.
              </p>

              <div className="inline-block">
                <button
                  onClick={handleCall}
                  className="py-3 px-8 bg-white hover:bg-orange-50 text-slate-800 font-medium rounded-xl border border-orange-400 shadow-sm transition-all duration-200 flex items-center gap-2 group mx-auto cursor-pointer"
                >
                  <span>Call Now</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </motion.div>

            <hr className="border-dashed border-slate-300 my-8" />

            {/* FAQ Section */}

            <FAQ />
          </div>
        </div>
      </main>
    </div>
  );
}
