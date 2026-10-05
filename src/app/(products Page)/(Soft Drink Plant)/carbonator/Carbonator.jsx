"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FAQ from "@/components/FAQ";

export default function CarbonatorMachinePage() {
  const handleCall = () => {
    window.location.href = "tel:+919135636541";
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-orange-200 text-[16px] lg:text-[18px]">
      {/* Top Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-slate-200 py-10 px-4 shadow-sm border-b border-slate-300"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 text-center min-h-[80px] md:min-h-[100px]">
          <h1 className="text-3xl md:text-5xl font-bold text-[#102a43] tracking-tight">
            Carbonator Machine{" "}
            <span className="text-blue-600">Manufacturer</span>
          </h1>
        </div>
      </motion.header>

      {/* Main Container with Two-Column Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sticky Product Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-8 order-1"
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 relative overflow-hidden">
              {/* Machine Image */}
              <div className="rounded-xl overflow-hidden mb-5 bg-gradient-to-b from-slate-50 to-slate-100 p-2 border border-slate-100">
                <Image
                  src="/images/products/Precision.png"
                  alt="Carbonator Machine Manufacturer"
                  width={500}
                  height={500}
                  className="w-full h-80 object-contain rounded-lg shadow-inner hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-3 text-amber-400 text-lg">
                {"★".repeat(5)}
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-xl font-extrabold text-[#102a43] mb-1 flex items-center gap-2">
                <span>✅</span> Precision Carbonation – Powered by Vpack
              </h2>
              <p className="text-sm text-slate-500 font-medium mb-4">
                Perfect Fizz. Every Time.
              </p>

              <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                At <strong>Vpack</strong>, we manufacture high-performance{" "}
                <strong>Carbonator Machines</strong> designed to bring that
                perfect sparkle to your beverages. Whether you’re crafting soda,
                sparkling water, energy drinks, or soft drinks, our machines
                ensure consistent carbonation with precision control and
                food-grade safety.
              </p>

              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                We are the importers and suppliers of premium quality of Mini
                Liquid Filling Machine Double Nozzel
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
            </div>
          </motion.div>

          {/* Right Column: Scrollable Content Container */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 space-y-8 order-2"
          >
            {/* Description & Highlights Section */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#102a43] tracking-tight mb-4">
                Carbonator Machine Manufacturer in Delhi
              </h2>

              <p className="text-slate-600 leading-relaxed mb-4">
                At <strong>Vpack</strong>, we specialize in manufacturing
                high-performance <strong>Carbonator Machines</strong> designed
                to infuse beverages with just the right amount of fizz. Whether
                you’re a startup or a large-scale manufacturer, our machines
                deliver consistent carbonation for a wide range of beverages —
                from soda and soft drinks to sparkling juices and energy drinks.
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                Engineered with{" "}
                <strong>food-grade stainless steel (SS 304/316)</strong> and
                built to integrate seamlessly with bottle filling lines, our
                carbonator machines are trusted for their{" "}
                <strong>efficiency, customizability</strong>, and{" "}
                <strong>automation options</strong>.
              </p>
            </div>

            {/* Why Choose Vpack's ? */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#102a43] mb-4 flex items-center gap-2">
                <span>💎</span> Why Choose Vpack’s ?
              </h3>

              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-600 font-bold mt-0.5">✔</span>
                  <div>
                    <strong>Unmatched Durability</strong> – Built to last with
                    superior material strength
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-600 font-bold mt-0.5">✔</span>
                  <div>
                    <strong>Food-Grade Cleanliness</strong> – Hygienic, safe,
                    and easy to maintain
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-600 font-bold mt-0.5">✔</span>
                  <div>
                    <strong>Precision Engineering</strong> – Ensures smooth,
                    uniform melting every time
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-600 font-bold mt-0.5">✔</span>
                  <div>
                    <strong>Corrosion & Heat Resistant</strong> – Perfect for
                    high-temperature applications
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-600 font-bold mt-0.5">✔</span>
                  <div>
                    <strong>Customizable Designs</strong> – Tailored to fit your
                    unique production needs
                  </div>
                </li>
              </ul>
            </div>

            {/* Boost Your Production with Confidence */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#102a43] mb-3 flex items-center gap-2">
                <span>🚀</span> Boost Your Production with Confidence
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our Machines combine <strong>innovation, efficiency</strong>,
                and <strong>reliability</strong> – giving your operations the
                edge they need. Trusted by hundreds of happy clients, Vpack
                Products are more than just machinery – they’re a{" "}
                <strong>promise of quality</strong>.
              </p>
            </div>

            {/* Technical Specifications Section */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-extrabold text-[#102a43] mb-6 flex items-center gap-2">
                <span>⚙️</span> Technical Specifications
              </h3>

              <div className="space-y-6 text-slate-700">
                <div>
                  <h4 className="font-bold text-[#102a43] mb-1">
                    What is a Carbonator Machine?
                  </h4>
                  <p className="text-slate-600">
                    A specialized system that infuses CO₂ gas into liquids to
                    create carbonated beverages like soda and sparkling water.
                  </p>
                </div>

                <hr className="border-dashed border-slate-200" />

                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Types Available:</strong> Manual, Semi-Automatic,
                      Fully Automatic, Inline, and Batch types to suit every
                      production setup.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Available Capacities:</strong> From 250 Liters Per
                      Hour (LPH) to 10,000 LPH — scalable based on your needs.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Carbonation Method:</strong> CO₂ Gas Injection
                      combined with chilling for optimal fizz and taste
                      retention.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Material of Construction:</strong> Made from
                      high-grade SS 304 / SS 316 stainless steel, fully
                      food-grade and corrosion-resistant.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Chilling Requirement:</strong> A chiller is
                      required — preferably maintaining{" "}
                      <strong>5°C or lower</strong> for best carbonation
                      results.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Working Pressure:</strong> Operates efficiently
                      under a pressure range of <strong>2 to 4 bar</strong>.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>CO₂ Cylinder Requirement:</strong> Yes — requires
                      food-grade CO₂ with a pressure regulator.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Mixing System:</strong> Available with both{" "}
                      <strong>Static Mixers</strong> and{" "}
                      <strong>Dynamic Mixers</strong> for thorough blending.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Automation Options:</strong> Choose between{" "}
                      <strong>Manual, Semi-Automatic</strong>, and{" "}
                      <strong>Fully Automatic</strong> models based on your
                      workflow.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Power Consumption:</strong> Varies between{" "}
                      <strong>2 kW to 10 kW</strong>, depending on the machine
                      size and automation level.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Control Panel:</strong> Automatic models come
                      equipped with a{" "}
                      <strong>PLC & HMI-based control system</strong> for ease
                      of operation.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Safety Systems:</strong> Includes{" "}
                      <strong>Pressure Release Valve</strong> and{" "}
                      <strong>Overload Protection</strong> for safe, reliable
                      operation.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Cooling Source:</strong> Compatible with{" "}
                      <strong>Glycol or Water Chillers</strong> for pre-chilling
                      requirements.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>System Integration:</strong> Can be fully
                      integrated into your existing{" "}
                      <strong>Bottle Filling Line</strong> for seamless
                      operations.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>CO₂ Flow Meter:</strong> Built-in flow meter for
                      precise pressure and dosage control.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Output Pressure:</strong> Fully adjustable —
                      optimized based on beverage type.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Application:</strong> Perfect for{" "}
                      <strong>Soda, Soft Drinks, Sparkling Juices</strong>, and{" "}
                      <strong>Energy Drinks</strong>.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Footprint & Weight:</strong> Compact and
                      customizable. Weights start from{" "}
                      <strong>300 kg to over 1500 kg</strong> depending on
                      capacity.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Warranty & Support:</strong> Comes with a{" "}
                      <strong>1-year warranty</strong> and reliable{" "}
                      <strong>after-sales support</strong> from the Vpack team.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Optional Features Include:</strong> Auto CO₂
                      dosing, Pre-chilling tanks, Online carbonation control,
                      and CIP (Clean-in-Place) compatibility.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <div>
                      <strong>Recommended Capacity Use:</strong>
                      <ul className="pl-5 mt-2 space-y-1 list-disc text-slate-600">
                        <li>
                          <strong>250–500 LPH:</strong> Ideal for Startups
                        </li>
                        <li>
                          <strong>1000–2000 LPH:</strong> Best for Small Plants
                        </li>
                        <li>
                          <strong>3000–5000 LPH:</strong> Designed for
                          Commercial Units
                        </li>
                        <li>
                          <strong>6000–10,000 LPH:</strong> Perfect for
                          Large-Scale Manufacturing
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <FAQ />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
