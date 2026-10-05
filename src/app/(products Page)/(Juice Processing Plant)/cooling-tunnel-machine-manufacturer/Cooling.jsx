"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";

export default function CoolingTunnelPage() {
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
      <div className="bg-[#dbe3eb] py-8 md:py-12 text-center px-4 min-h-[80px] md:min-h-[110px]">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl lg:text-4xl">❄️</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] tracking-wide uppercase">
            COOLING TUNNEL
          </h1>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B82F6] tracking-wide uppercase">
          MACHINE MANUFACTURER
        </h2>
      </div>

      {/* Main Container */}
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
            {/* Product Card Container */}
            <div className="bg-white p-3 rounded-md border border-gray-100 shadow-inner relative">
              {/* Machine Image */}
              <div className="relative w-full h-64 sm:h-72 my-2">
                <Image
                  src="/images/products/cooling.png"
                  alt="Cooling Tunnel Machine"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Stars */}
            <div className="flex text-amber-400 text-xl md:text-2xl">★★★★★</div>

            {/* Product Heading */}
            <h3 className="text-xl lg:text-2xl font-bold text-[#0B2545] flex items-center gap-2">
              <span>❄️</span> COOLING TUNNEL MACHINE
            </h3>

            {/* Product Short Description */}
            <p className="text-gray-600 text-[15px] sm:text-[16px] lg:text-[17px]">
              Efficiently cool your bottled products post-filling with the Vpack
              Automatic Bottle Cooling Tunnel. Engineered for precision and
              hygiene, it's the perfect solution for fast-paced beverage lines.
            </p>

            {/* Call Now Button */}
            <div className="pt-2">
              <a
                href="tel:+919135636541"
                className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow hover:bg-orange-50 transition-colors"
              >
                Call Now <span className="text-gray-600">→</span>
              </a>
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
            {/* Main Title & Rating */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0B2545] leading-tight">
                The Vpack Automatic Cooling Tunnel Machine
              </h1>
              <div className="flex text-orange-500 text-xl md:text-2xl">
                ★★★★★
              </div>
            </div>

            {/* Description Paragraph 1 */}
            <p className="text-gray-600">
              The{" "}
              <strong className="text-gray-800">
                Vpack Automatic Cooling Tunnel
              </strong>{" "}
              is designed to rapidly lower the temperature of freshly filled
              bottles, enhancing shelf life and product stability. Constructed
              with{" "}
              <strong className="text-gray-800">
                SS 304-grade stainless steel
              </strong>
              , As a leading{" "}
              <Link
                href="/contact"
                className="text-blue-600 italic font-semibold hover:underline"
              >
                Cooling Tunnel Machine manufacturer in Delhi
              </Link>
              , Vpack Machine offers a system that features an advanced water
              circulation setup, digital temperature regulation, and an
              automatic fresh water inlet. Ideal for high-speed production
              lines, the tunnel supports consistent cooling with minimal water
              waste. Fully automatic and mounted on adjustable legs, it ensures
              seamless integration into your bottling process.
            </p>

            {/* Description Paragraph 2 */}
            <p className="text-gray-600">
              Our cooling tunnel machines ensure controlled temperature
              reduction, smooth bottle conditioning, and high production
              efficiency — making them essential for any automated packaging
              line. Whether you are a startup building a new plant or an
              established brand upgrading operations, Vpack Machine, a trusted{" "}
              <Link
                href="/contact"
                className="text-blue-600 italic font-semibold hover:underline"
              >
                Cooling Tunnel Machine Manufacturer
              </Link>
              , offers cooling solutions that match your production requirements
              and industry standards.
            </p>

            {/* Technical Specifications Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>⚙️</span> Technical Specifications
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>
                  <strong className="text-gray-800">Driven Type:</strong>{" "}
                  Electric
                </li>
                <li>
                  <strong className="text-gray-800">
                    Machine Body Material:
                  </strong>{" "}
                  Stainless Steel (SS304)
                </li>
                <li>
                  <strong className="text-gray-800">Capacity:</strong> 60 – 240
                  Bottles Per Minute (BPM)
                </li>
                <li>
                  <strong className="text-gray-800">Brand:</strong> Vpack
                </li>
                <li>
                  <strong className="text-gray-800">Gross Weight:</strong> 1000
                  Kg
                </li>
                <li>
                  <strong className="text-gray-800">Power Load:</strong> 5-7 kW
                </li>
                <li>
                  <strong className="text-gray-800">Automation Grade:</strong>{" "}
                  Automatic
                </li>
                <li>
                  <strong className="text-gray-800">Material Grade:</strong> SS
                  304
                </li>
              </ul>
            </div>

            {/* Performance Highlights Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>⚙️</span> Performance Highlights:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>Efficient post-fill temperature control</li>
                <li>Digital water temperature display</li>
                <li>Frequency-based speed control</li>
                <li>Automatic fresh water input during overheating</li>
                <li>Adjustable water sprinkling system</li>
                <li>
                  Entirely stainless steel body for hygiene and durability
                </li>
              </ul>

              {/* Get a quote Button */}
              <div className="pt-4 flex justify-center sm:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-2.5 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow-md hover:bg-orange-50 transition-colors"
                >
                  Get a quote <span className="text-gray-600">→</span>
                </Link>
              </div>
            </div>

            {/* Cooling Tunnel Machine Ideal For Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>🏭</span> Cooling Tunnel Machine Ideal For
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>Beverage Bottling Units</li>
                <li>Juice and Dairy Plants</li>
                <li>Pharmaceutical Liquid Packaging</li>
                <li>
                  Any high-speed bottling line requiring temperature regulation
                </li>
              </ul>
            </div>

            {/* Why This Cooling Tunnel? Section */}
            <div className="space-y-3 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>✅</span> Why This Cooling Tunnel?
              </h2>
              <p className="text-gray-600">
                At <strong className="text-gray-800">Vpack Machine</strong>,
                every cooling tunnel is engineered with precision, durability,
                and user-friendly operation in mind. We understand industry
                challenges, such as bottle shrinking, label peeling, or uneven
                cooling, and our machines are designed to eliminate such issues.
              </p>
              <p className="text-gray-600">
                Take control of your bottling quality with a system designed to
                conserve water, maintain hygiene, and boost output consistency.
              </p>
            </div>

            {/* Call Now for a Customized Solution Section */}
            <div className="space-y-3 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>☎️</span> Call Now for a Customized Solution
              </h2>
              <p className="text-gray-600">
                Need cooling efficiency that matches your production speed?
              </p>
              <p className="text-gray-800 font-semibold flex items-center gap-2">
                <span>👉</span>{" "}
                <Link
                  href="/contact"
                  className="hover:underline text-[#0B2545]"
                >
                  Contact Vpack Machine
                </Link>{" "}
                — Your trusted Cooling Tunnel Machine Manufacturer.
              </p>

              <div className="pt-2 flex justify-center">
                <a
                  href="tel:+919135636541"
                  className="inline-flex items-center gap-2 px-8 py-2 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow hover:bg-orange-50 transition-colors"
                >
                  Call Now <span className="text-gray-600">→</span>
                </a>
              </div>
            </div>

            {/* Engineered for Excellence Section */}
            <div className="space-y-3 pt-4 pb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>🎯</span> Engineered for Excellence. Built for You.
              </h2>
              <p className="text-gray-600">
                From digital controls to stainless steel structure, this machine
                is built with precision and performance in mind — giving your
                production line the reliable cooling edge it needs.
              </p>

              <div className="pt-2 flex justify-center">
                <a
                  href="tel:+919135636541"
                  className="inline-flex items-center gap-2 px-8 py-2 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow hover:bg-orange-50 transition-colors"
                >
                  Call Now <span className="text-gray-600">→</span>
                </a>
              </div>
            </div>

            <hr className="border-dashed border-gray-300 my-8" />
            <FAQ />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
