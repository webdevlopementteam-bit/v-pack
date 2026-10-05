"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";

export default function AgitatorTankPage() {
  const handleCall = () => {
    window.location.href = "tel:+919135636541";
  };

  // Framer Motion Animation Variants
  const leftVariant = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-white text-gray-700 text-[16px] lg:text-[18px] leading-relaxed selection:bg-blue-100">
      {/* Top Hero Banner */}
      <div className="bg-[#dbe3eb] min-h-[100px] md:min-h-[140px] px-4 py-4 flex items-center justify-center gap-3">
        <span className="text-2xl sm:text-4xl md:text-4xl">⚙️</span>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] tracking-wide text-center uppercase">
          AGITATOR TANK <span className="text-blue-500">– VPACK</span>
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE (Moves from Left) */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4 lg:sticky lg:top-6 bg-[#f8fafc] border border-gray-200 rounded-lg p-5 shadow-sm space-y-4"
          >
            {/* Product Image Container */}
            <div className="bg-white p-3 rounded-md border border-gray-100 shadow-inner relative">
              {/* Product Image */}
              <div className="relative w-full h-64 sm:h-72 my-2">
                <Image
                  src="/images/products/agitator.png"
                  alt="Vpack Agitator Tank"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex text-amber-400 text-xl md:text-2xl">★★★★★</div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-[#0B2545]">
              Vpack Agitator Tank
            </h3>

            {/* Short Description */}
            <p className="text-gray-600 text-[16px] lg:text-[18px]">
              Engineered for precision and versatility, the Vpack Agitator Tank
              offers efficient mixing and emulsification of high-viscosity
              materials with customizable capacity and design.
            </p>

            {/* Call Now Button */}
            <div className="pt-2">
              <button
                onClick={handleCall}
                className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow hover:bg-orange-50 transition-colors cursor-pointer text-[16px] lg:text-[18px]"
              >
                Call Now <span className="text-gray-600">→</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE (Moves from Right) */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Title Section */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0B2545] leading-tight">
                Agitator Tank
              </h1>
              <div className="flex text-amber-400 text-xl md:text-2xl">
                ★★★★★
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-4 pt-2 border-t border-dashed border-gray-300 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                Description
              </h2>

              <p className="text-gray-600">
                The{" "}
                <strong className="text-gray-800">Vpack Agitator Tank</strong>{" "}
                is a powerful and adaptable mixing solution built for industries
                handling high-viscosity materials. Made from durable stainless
                steel, this tank is designed to{" "}
                <strong className="text-gray-800">
                  mix, emulsify, and deaerate
                </strong>{" "}
                materials like adhesives, silicon and epoxy resins, sealing
                compounds, ointments, solder pastes, and more. Its{" "}
                <strong className="text-gray-800">
                  planetary centrifugal mixing mechanism
                </strong>{" "}
                ensures simultaneous dispersion and air removal across a range
                of viscosities.
              </p>

              <p className="text-gray-600">
                Available in{" "}
                <strong className="text-gray-800">
                  non-vacuum and vacuum types
                </strong>
                , it provides options for both standard and advanced
                applications such as submicron-level air bubble elimination. A
                specialized model (SR-500) caters economically to solder paste
                mixing, while the{" "}
                <strong className="text-gray-800">THINKY NP-100</strong> variant
                enables nano pulverization at low temperatures — making this
                tank incredibly versatile.
              </p>
            </div>

            {/* Technical Specifications Section */}
            <div className="space-y-4 pt-4 border-t border-dashed border-gray-300 text-[16px] lg:text-[18px]">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">⚙️</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                  Technical Specifications
                </h2>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>
                  <strong className="text-gray-800">Design Type:</strong>{" "}
                  Customized
                </li>
                <li>
                  <strong className="text-gray-800">Capacity:</strong> 30–300L
                </li>
                <li>
                  <strong className="text-gray-800">Material:</strong> Stainless
                  Steel (SS)
                </li>
                <li>
                  <strong className="text-gray-800">Height:</strong> As per
                  order
                </li>
                <li>
                  <strong className="text-gray-800">Power Supply:</strong> 3
                  Phase
                </li>
                <li>
                  <strong className="text-gray-800">Voltage:</strong> 440V
                </li>
              </ul>
            </div>

            {/* Performance Highlights Section */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">⚙️</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                  Performance Highlights:
                </h2>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>Customizable capacity for various batch sizes</li>
                <li>Mixes, disperses, and deaerates simultaneously</li>
                <li>Vacuum option for ultra-fine air elimination</li>
                <li>Supports a wide viscosity range</li>
                <li>Compatible with nano-pulverizing applications</li>
                <li>
                  High-strength stainless steel for durability and hygiene
                </li>
              </ul>

              {/* Get a quote button */}
              <div className="pt-2 flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow hover:bg-orange-50 transition-colors"
                >
                  Get a quote <span className="text-gray-600">→</span>
                </Link>
              </div>
            </div>

            {/* Ideal For Section */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">🏭</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                  Ideal For
                </h2>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>Electronics (solder paste, nano powders)</li>
                <li>Pharmaceutical and medical formulations</li>
                <li>Food and cosmetics emulsions</li>
                <li>Adhesives, silicon, and resin processing</li>
                <li>R&D laboratories and pilot-scale production</li>
              </ul>
            </div>

            {/* Call Section 1 */}
            <div className="space-y-4 pt-6 text-[16px] lg:text-[18px]">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">📞</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                  Ready to Transform Your Line? Let's Talk!
                </h2>
              </div>

              <p className="text-gray-600">
                Call us today to discover how the{" "}
                <strong className="text-gray-800">Vpack Agitator Tank</strong>{" "}
                can upgrade your mixing process with unmatched versatility.
              </p>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleCall}
                  className="inline-flex items-center gap-2 px-8 py-2 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow hover:bg-orange-50 transition-colors cursor-pointer"
                >
                  Call Now <span className="text-gray-600">→</span>
                </button>
              </div>
            </div>

            {/* Boost Production Section */}
            <div className="space-y-4 pt-6 text-[16px] lg:text-[18px]">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">🚀</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                  Boost Your Production with Confidence
                </h2>
              </div>

              <p className="text-gray-600">
                With superior control and multi-material compatibility, the{" "}
                <strong className="text-gray-800">Vpack Agitator Tank</strong>{" "}
                helps you produce with consistency, precision, and peace of
                mind.
              </p>
            </div>

            {/* Engineered for Excellence Section */}
            <div className="space-y-4 pt-6 text-[16px] lg:text-[18px]">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">🎯</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                  Engineered for Excellence. Built for You.
                </h2>
              </div>

              <p className="text-gray-600">
                From customized capacity to high-tech planetary mixing — every
                feature reflects our commitment to reliable, high-performance
                solutions.
              </p>
            </div>
            {/* faq */}
            <FAQ />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
