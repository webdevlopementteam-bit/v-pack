"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import FAQ from "@/components/FAQ";
import TopHeader from "@/components/TopHeader";

export default function VpackIndustrialROPlantPage() {
  const router = useRouter();

  const handleCall = () => {
    window.location.href = "tel:+919135636541";
  };

  const handleQuote = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-orange-200 text-[16px] lg:text-[18px]">
      {/* Top Header */}
      <TopHeader i={"💧"} t={"VPACK Industrial RO Plant"} />

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
                  src="/images/products/ro-plant.png"
                  alt="VPACK Industrial RO Plant"
                  className="w-full h-64 object-contain md:object-cover rounded-lg shadow-inner hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-3 text-amber-400 text-lg">
                {"★".repeat(5)}
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-xl font-bold text-[#102a43] mb-3 flex items-center gap-2">
                <span>🎯</span> RO PLANT– Industrial Powerhouse in a Compact
                Frame
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6">
                For industries requiring continuous, high-volume water
                purification, the <strong>VPACK</strong> offers unmatched
                performance and durability. Its robust stainless-steel
                construction, efficient water recovery, and high LPH output make
                it a reliable choice for demanding environments.
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
                High-Capacity Water Purification Solution
              </h2>

              <div className="flex items-center gap-1 text-orange-500 text-xl mb-6">
                {"★".repeat(5)}
              </div>

              <hr className="border-dashed border-slate-200 mb-6" />

              <h3 className="text-lg font-bold text-[#102a43] mb-3">
                Description
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Engineered for high-output environments, the{" "}
                <strong>VPACK Industrial RO Plant</strong> is designed to
                deliver superior water purification at scale. With a capacity
                ranging from <strong>500 to 10,000 liters per hour</strong>,
                this system is built to handle the heavy lifting in your
                production line.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Its <strong>stainless steel body</strong> enhances durability
                and corrosion resistance, making it ideal for long-term
                industrial use. The system recovers{" "}
                <strong>55–60% of water</strong>, ensuring reduced water wastage
                and increased cost-efficiency. Whether your water source is from
                a borewell or municipal supply, the VPACK can adapt easily to
                your needs.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Operating on <strong>220 V power</strong> with a{" "}
                <strong>50 Hz frequency</strong>, it integrates seamlessly into
                standard industrial setups. Manufactured by{" "}
                <strong>Vpack</strong>, a trusted name in the automation and
                packaging industry, the VPACK is your reliable partner in clean
                water production.
              </p>

              <hr className="border-dashed border-slate-200 mb-6" />

              <h3 className="text-lg font-bold text-[#102a43] mb-4 flex items-center gap-2">
                <span>⚙️</span> Technical Specifications
              </h3>

              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Power Source:</strong> Electric
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Brand:</strong> Vpack
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Voltage:</strong> 220 V
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Max Water Recovery Rate:</strong> 55–60%
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Material:</strong> Stainless Steel
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Frequency:</strong> 50 Hz
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>RO Capacity:</strong> 500–10000 LPH
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Water Source Type:</strong> Borewell Water
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    <strong>Model Name:</strong> VPACK
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#102a43] mt-8 mb-4 flex items-center gap-2">
                <span>⚙️</span> Performance Highlights:
              </h3>

              <ul className="space-y-3 text-slate-700 mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>Handles large volumes of water with ease</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    Stainless steel construction ensures long-lasting durability
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>
                    Efficient recovery rate saves water and reduces operational
                    waste
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>Stable performance on standard 220 V / 50 Hz power</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1.5">•</span>
                  <div>Trusted brand quality from Vpack</div>
                </li>
              </ul>

              <div className="flex justify-end pt-2">
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
              <h3 className="text-xl font-bold text-[#102a43] mb-4 flex items-center gap-2">
                <span>🏭</span> Ideal For
              </h3>
              <ul className="space-y-2.5 text-slate-700">
                <li className="flex items-center gap-2.5">
                  <span>•</span> <span>Beverage & bottled water plants</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span> <span>Pharmaceutical manufacturing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span> <span>Chemical & fertilizer industries</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span> <span>Textile and dyeing units</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span>•</span>{" "}
                  <span>Industrial canteens and large institutions</span>
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
                <span>📞</span> Ready to Transform Your Line? Let's Talk!
              </h3>
              <p className="text-slate-500 mb-6">
                Call us today to discover how VPACK Industrial RO Plant can
                elevate your production game.
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

            {/* Boost Your Production Confidence */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-[#102a43] mb-2 flex items-center gap-2">
                <span>🚀</span> Boost Your Production Confidence
              </h3>
              <p className="text-slate-500 italic">
                With precision and flexibility, VPACK Industrial RO Plant
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
              <p className="text-slate-500 mb-6">
                From speed to accuracy — every unit tells a story of quality.
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
