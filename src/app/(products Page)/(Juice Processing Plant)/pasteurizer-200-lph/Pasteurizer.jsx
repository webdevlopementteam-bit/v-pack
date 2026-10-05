"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FAQ from "@/components/FAQ";

export default function PasteurizerPage() {
  const [openFaq, setOpenFaq] = useState(1); // Second item open by default

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
      <div className="bg-[#dbe3eb] px-4 py-4 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2 flex-wrap text-center min-h-[80px] md:min-h-[110px] ">
          <span className="text-3xl lg:text-4xl">🧊</span>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] tracking-wide uppercase">
            PASTEURIZER <span className="text-blue-500">(200 LPH)</span>
          </h1>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE (Sticky & Moves from Left) */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4 lg:sticky lg:top-6 bg-[#f8fafc] border border-gray-200 rounded-lg p-5 shadow-sm space-y-4"
          >
            {/* Product Image Card Container */}
            <div className="bg-white p-3 rounded-md border border-gray-100 shadow-inner relative ">
              {/* Product Image */}
              <div className="relative w-full h-76 sm:h-72 my-2">
                <Image
                  src="/images/products/pesteurizer.png"
                  alt="Pasteurizer (200 LPH)"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover md:object-contain"
                  priority
                />
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex text-amber-400 text-xl md:text-2xl">★★★★★</div>

            {/* Product Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-[#0B2545]">
              the V PACK Pasteurizer (200 LPH)
            </h3>

            {/* Short Description */}
            <p className="text-gray-600 text-[15px] sm:text-[16px] lg:text-[17px]">
              Designed for efficient heating and pasteurization, the V PACK
              Pasteurizer (200 LPH) is ideal for food and fruit juice
              processing. With high-grade stainless steel construction and a
              temperature range up to 150°C, this unit ensures precise thermal
              treatment for maximum product quality.
            </p>

            {/* Call Now Button */}
            <div className="pt-2">
              <button
                onClick={handleCall}
                className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow hover:bg-orange-50 transition-colors cursor-pointer"
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
            {/* Title & Stars */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0B2545] leading-tight flex items-center gap-2 flex-wrap">
                <span>📝</span> Full-Scale Thermal Processing — Done Right
              </h1>
              <div className="flex text-amber-400 text-xl md:text-2xl">
                ★★★★★
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-4 pt-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                Description
              </h2>

              <p className="text-gray-600">
                The V PACK Pasteurizer (200 LPH) is crafted for precision
                pasteurization of tomato pulp, fruit juices, and other
                food-grade liquids. Its{" "}
                <strong className="text-gray-800">
                  multi-tube heat exchanger system
                </strong>
                , made of SS 316 steel, guarantees food safety and thermal
                stability while maximizing efficiency. Steam is introduced
                through a{" "}
                <strong className="text-gray-800">
                  pneumatically controlled valve
                </strong>{" "}
                and managed via a{" "}
                <strong className="text-gray-800">temperature indicator</strong>{" "}
                — giving operators full control from 50°C to 150°C.
              </p>

              <p className="text-gray-600">
                The design ensures the product is heated, held at sterilization
                temperature, and cooled down before filling — a complete thermal
                cycle for quality assurance. The unit is built with a{" "}
                <strong className="text-gray-800">
                  condensate discharge system
                </strong>
                , <strong className="text-gray-800">steam piping</strong>, and{" "}
                <strong className="text-gray-800">
                  AISI 316 contact materials
                </strong>
                , making it a durable and hygienic solution for fruit and food
                processing plants.
              </p>
            </div>

            {/* Performance Highlights Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>💡</span> Performance Highlights
              </h2>

              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>
                  Handles a wide range of liquids from juice to pulp with ease
                </li>
                <li>
                  Adjustable heating from 50°C to 150°C for precise thermal
                  control
                </li>
                <li>
                  Tube-in-tube spiral design ensures efficient steam-to-product
                  heat transfer
                </li>
                <li>
                  Designed for hygienic, continuous operation in industrial food
                  setups
                </li>
                <li>
                  Available with smooth or corrugated heat exchangers to suit
                  processing needs
                </li>
              </ul>
            </div>

            {/* Technical Specifications Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>⚙️</span> Technical Specifications
              </h2>

              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>
                  <strong className="text-gray-800">
                    Minimum Order Quantity:
                  </strong>{" "}
                  1 Unit
                </li>
                <li>
                  <strong className="text-gray-800">Brand:</strong> V PACK
                </li>
                <li>
                  <strong className="text-gray-800">Equipment Type:</strong>{" "}
                  Pasteurizer
                </li>
                <li>
                  <strong className="text-gray-800">Capacity:</strong> 1000 LPH
                </li>
                <li>
                  <strong className="text-gray-800">Brand/Make:</strong> V PACK
                </li>
                <li>
                  <strong className="text-gray-800">Material:</strong> SS 316,
                  SS 304
                </li>
                <li>
                  <strong className="text-gray-800">Model:</strong> VP
                </li>
                <li>
                  <strong className="text-gray-800">Grade:</strong> S.S 304
                </li>
                <li>
                  <strong className="text-gray-800">Power:</strong> 10 KW
                </li>
                <li>
                  <strong className="text-gray-800">Steam Consumption:</strong>{" "}
                  Depends upon Capacity
                </li>
                <li>
                  <strong className="text-gray-800">Steam Pressure:</strong> 22
                  KG
                </li>
                <li>
                  <strong className="text-gray-800">Usage/Application:</strong>{" "}
                  Fruit / Food Processing Plant
                </li>
                <li>
                  <strong className="text-gray-800">Applicable Fruits:</strong>{" "}
                  Juice / Pulp
                </li>
                <li>
                  <strong className="text-gray-800">Body Material:</strong>{" "}
                  Stainless Steel
                </li>
                <li>
                  <strong className="text-gray-800">Frequency:</strong> 50 Hz
                </li>
                <li>
                  <strong className="text-gray-800">Voltage:</strong> 415
                </li>
                <li>
                  <strong className="text-gray-800">Colour:</strong> Silver
                </li>
              </ul>

              {/* Get a quote Button */}
              <div className="pt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-2.5 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow-md hover:bg-orange-50 transition-colors"
                >
                  Get a quote <span className="text-gray-600">→</span>
                </Link>
              </div>
            </div>

            {/* Ideal For Section */}
            <div className="space-y-3 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>🏭</span> Ideal For
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>Fruit and vegetable juice manufacturers</li>
                <li>Tomato pulp and purée processing</li>
                <li>Food and beverage production units</li>
                <li>Small to mid-scale dairy pasteurization plants</li>
                <li>Startups and R&D units in food processing</li>
                <li>Aseptic filling or bottling line integrations</li>
              </ul>
            </div>

            {/* Contact VPACK Section */}
            <div className="space-y-3 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>📞</span> Contact VPACK today for a tailored quote and
                demo!
              </h2>
              <p className="text-gray-600">
                Call us today to discover how{" "}
                <strong className="text-gray-800">PASTEURIZER (200 LPH)</strong>{" "}
                can elevate your production game.
              </p>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleCall}
                  className="inline-flex items-center gap-2 px-8 py-2.5 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow hover:bg-orange-50 transition-colors cursor-pointer"
                >
                  Call Now <span className="text-gray-600">→</span>
                </button>
              </div>
            </div>

            {/* Boost Your Production Section */}
            <div className="space-y-3 pt-4 pb-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>🛡️</span> Boost Your Production with Confidence
              </h2>
              <p className="text-gray-600">
                With precision heating and rugged design,{" "}
                <strong className="text-gray-800">PASTEURIZER (200 LPH)</strong>{" "}
                delivers the reliability your process demands.
              </p>
            </div>
            {/* FAQ Items */}
            <FAQ />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
