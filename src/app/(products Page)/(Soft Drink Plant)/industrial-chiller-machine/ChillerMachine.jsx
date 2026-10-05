"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ChillerMachinePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100">
      {/* 1. Header Banner */}
      <section className="w-full bg-[#dbe3eb] min-h-[120px] md:min-h-[140px] px-4 py-4 flex items-center justify-center border-b border-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex items-center gap-3 flex-wrap justify-center"
          >
            {/* Snowflake Icon */}
            <span className="text-3xl md:text-5xl">❄️</span>
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight text-center uppercase">
              <span className="text-[#0B2545]">Industrial Chiller</span>{" "}
              <span className="text-blue-500">Machine</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left & Middle Columns: Product Details */}
        <div className="lg:col-span-2 space-y-10">
          {/* Title & Rating */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sky-400 text-3xl">❄️</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Chiller Machine by Vpack
              </h2>
            </div>
            <div className="flex items-center gap-1 text-orange-500 mt-2 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </motion.div>

          <hr className="border-dashed border-slate-300" />

          {/* Description Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-900">Description</h3>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Meet your production’s best friend — the{" "}
              <strong className="text-slate-900">Vpack Chiller Machine</strong>,
              a powerful solution designed to remove excess heat and maintain
              ideal temperatures for your industrial processes. Whether you’re
              chilling water for a carbonator, beverage line, or general
              industrial use — our chiller ensures{" "}
              <strong className="text-slate-900">
                unmatched cooling precision, reliability, and energy efficiency
              </strong>
              .
            </p>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Just like a supersized refrigerator for your factory floor, it
              cools water to the perfect degree and keeps your systems running
              smoothly —{" "}
              <strong className="text-slate-900">day in, day out</strong>.
            </p>
          </motion.section>

          {/* What a Chiller Does Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧊</span>
              <h3 className="text-2xl font-bold text-slate-900">
                What a Chiller Does:
              </h3>
            </div>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              It removes heat from a liquid — usually water — and then
              circulates the chilled water to equipment that needs cooling. This
              helps maintain productivity, improves machine lifespan, and
              ensures temperature-sensitive processes remain uninterrupted.
            </p>
          </motion.section>

          <hr className="border-dashed border-slate-300" />

          {/* Technical Specifications */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚙️</span>
              <h3 className="text-2xl font-bold text-slate-900">
                Technical Specifications
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-3 text-[16px] lg:text-[18px] text-slate-700">
              <li>
                <strong className="text-slate-900">• Type:</strong> Water Cooled
                / Air Cooled
              </li>
              <li>
                <strong className="text-slate-900">• Capacity Range:</strong> 2
                TR to 20 TR
              </li>
              <li>
                <strong className="text-slate-900">• Cooling Capacity:</strong>{" "}
                7 kW to 70 kW (based on tonnage)
              </li>
              <li>
                <strong className="text-slate-900">• Compressor Type:</strong>{" "}
                Scroll / Reciprocating / Screw (depends on TR)
              </li>
              <li>
                <strong className="text-slate-900">
                  • Refrigerant Options:
                </strong>{" "}
                R-22 / R-407C / R-134a / R-410A (Eco-friendly refrigerants)
              </li>
              <li>
                <strong className="text-slate-900">• Evaporator Type:</strong>{" "}
                Shell & Tube / Brazed Plate Heat Exchanger
              </li>
              <li>
                <strong className="text-slate-900">• Condenser Type:</strong>{" "}
                Air-cooled Finned Tubes / Shell & Tube
              </li>
              <li>
                <strong className="text-slate-900">• Temperature Range:</strong>{" "}
                5°C to 20°C
              </li>
              <li>
                <strong className="text-slate-900">• Flow Rate:</strong> 0.5 – 5
                m³/h (based on capacity)
              </li>
              <li>
                <strong className="text-slate-900">
                  • Chilled Water Inlet/Outlet:
                </strong>{" "}
                1” to 2.5” BSP (based on size)
              </li>
              <li>
                <strong className="text-slate-900">
                  • Material of Construction:
                </strong>{" "}
                SS 304 (Food Grade Stainless Steel for wetted parts)
              </li>
              <li>
                <strong className="text-slate-900">• Control System:</strong>{" "}
                Microprocessor / PLC-Based Digital Controller
              </li>
              <li>
                <strong className="text-slate-900">• Power Supply:</strong>{" "}
                3-Phase, 440V, 50Hz
              </li>
              <li>
                <strong className="text-slate-900">• Running Load:</strong> 3 –
                18 kW (varies by tonnage)
              </li>
              <li>
                <strong className="text-slate-900">
                  • Ambient Operating Temperature:
                </strong>{" "}
                Up to 45°C
              </li>
              <li>
                <strong className="text-slate-900">• Noise Level:</strong> &lt;
                75 dB (Quiet performance)
              </li>
              <li>
                <strong className="text-slate-900">• Installation Type:</strong>{" "}
                Floor Mounted
              </li>
              <li>
                <strong className="text-slate-900">• Applications:</strong> RO
                Water Chilling, Carbonators, Beverage Plants, Industrial Cooling
              </li>
              <li>
                <strong className="text-slate-900">• Brand:</strong> Vpack
              </li>
              <li>
                <strong className="text-slate-900">• Warranty:</strong> 1 Year
              </li>
              <li>
                <strong className="text-slate-900">
                  • After-Sales Support:
                </strong>{" "}
                Fully available for hassle-free service
              </li>
            </ul>

            <div className="pt-4">
              <button className="border border-orange-500 text-slate-800 hover:bg-orange-50 font-medium px-6 py-2.5 rounded-lg shadow-sm flex items-center gap-2 transition-all">
                Get a quote <span>→</span>
              </button>
            </div>
          </motion.section>

          {/* Why Vpack Chillers Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4 pt-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">💡</span>
              <h3 className="text-2xl font-bold text-slate-900">
                Why Vpack Chillers?
              </h3>
            </div>
            <ul className="space-y-3 text-[16px] lg:text-[18px] text-slate-700">
              <li className="flex items-start gap-2">
                <span>🟩</span>{" "}
                <span>
                  <strong className="text-slate-900">Energy Efficient</strong> –
                  Low running load, high performance
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🟩</span>{" "}
                <span>
                  <strong className="text-slate-900">Eco-Friendly</strong> –
                  Supports modern refrigerants
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🟩</span>{" "}
                <span>
                  <strong className="text-slate-900">Food-Grade Build</strong> –
                  Perfect for beverage & pharma applications
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🟩</span>{" "}
                <span>
                  <strong className="text-slate-900">Smart Controls</strong> –
                  Easy operation with digital automation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🟩</span>{" "}
                <span>
                  <strong className="text-slate-900">Customizable</strong> –
                  Built to suit your unique plant requirements
                </span>
              </li>
            </ul>
          </motion.section>

          {/* Help & Support Callout */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4 pt-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <h3 className="text-2xl font-bold text-slate-900">
                Need help picking the right chiller?
              </h3>
            </div>
            <p className="text-[16px] lg:text-[18px] text-slate-600">
              Our team will guide you through the best model for your plant.
            </p>
            <div>
              <button className="border border-orange-500 text-slate-800 hover:bg-orange-50 font-medium px-6 py-2.5 rounded-lg shadow-sm flex items-center gap-2 transition-all">
                Call Now <span>→</span>
              </button>
            </div>
          </motion.section>

          {/* Boost Production Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-3 pt-4 border-t border-dashed border-slate-300"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <h3 className="text-2xl font-bold text-slate-900">
                Boost Your Production with Confidence
              </h3>
            </div>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              • Our Machines combine{" "}
              <strong className="text-slate-900">innovation</strong>,{" "}
              <strong className="text-slate-900">efficiency</strong>, and{" "}
              <strong className="text-slate-900">reliability</strong> — giving
              your operations the edge they need. Trusted by hundreds of happy
              clients, Vpack Products are more than just machinery — they’re a{" "}
              <strong className="text-slate-900">promise of quality</strong>.
            </p>
          </motion.section>
        </div>

        {/* Right Column: Sticky Product Card Sidebar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-6 bg-white border border-slate-200 rounded-2xl p-5 shadow-lg space-y-5"
          >
            {/* Top Brand Logo */}
            <div className="flex justify-end">
              <div className="border border-slate-200 px-3 py-1 rounded-md bg-white shadow-xs">
                <span className="font-extrabold text-slate-900 tracking-wider">
                  VPack
                </span>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative w-full h-64 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center border border-slate-100">
              <Image
                src="/images/products/smart.png"
                alt="Smart Chiller Machine"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 text-yellow-400 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            {/* Sidebar Title */}
            <div>
              <h4 className="text-xl font-bold text-slate-900 leading-tight">
                Smart Cooling for Smart Manufacturing
              </h4>
              <p className="text-[16px] lg:text-[18px] font-medium text-slate-500 mt-1">
                Consistent Cooling. Peak Performance.
              </p>
            </div>

            {/* Sidebar Description */}
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              At <strong className="text-slate-900">Vpack</strong>, we offer
              robust and reliable{" "}
              <strong className="text-slate-900">Chiller Machines</strong> that
              serve as the cooling backbone of your industrial and commercial
              setups. Whether you’re operating a beverage plant, carbonator, or
              any industrial system that demands steady cooling, our chillers
              are designed to deliver.
            </p>

            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Think of it like a giant refrigerator — it cools water efficiently
              and sends it to your machines or processes to maintain a{" "}
              <strong className="text-slate-900">
                stable and optimal temperature
              </strong>
              .
            </p>

            {/* Call Now Button */}
            <div className="pt-2">
              <button className="w-full border border-orange-500 text-slate-800 hover:bg-orange-50 font-medium px-6 py-3 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all">
                Call Now <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
