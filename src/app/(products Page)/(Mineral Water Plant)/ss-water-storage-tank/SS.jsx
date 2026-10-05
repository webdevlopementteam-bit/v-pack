"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplet,
  Star,
  ArrowRight,
  Settings,
  Factory,
  PhoneCall,
  Rocket,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import FAQ from "@/components/FAQ";

const MotionLink = motion.create(Link);

export default function SSWaterStorageTank() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* HEADER BANNER */}

      <TopHeader i={"💧"} t={"SS Water Storage Tank"} />

      {/* MAIN CONTENT SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: STICKY PRODUCT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 lg:sticky lg:top-8 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden p-6 relative"
          >
            {/* VPack Badge */}
            <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm flex items-center space-x-1.5">
              <span className="text-orange-600 font-bold text-sm tracking-wider">
                V
              </span>
              <span className="text-slate-900 font-semibold text-xs">
                Pack®
              </span>
            </div>

            {/* Product Image */}
            <div className="relative w-full h-72 sm:h-80 bg-slate-100 rounded-xl overflow-hidden mb-6 flex items-center justify-center border border-slate-100 group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="/images/products/ss-water.png"
                alt="SS Water Storage Tank"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x400/f1f5f9/334155?text=SS+Water+Tank";
                }}
              />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Card Title & Subtitle */}
            <h2 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug mb-3 flex items-center gap-2">
              <Droplet className="w-5 h-5 text-blue-500 shrink-0" />
              SS Water Storage Tank - Tough, Safe & Customizable Storage
            </h2>

            {/* Short Description */}
            <p className="text-base sm:text-sm text-slate-600 leading-relaxed mb-6">
              Crafted from food-grade SS304, the{" "}
              <span className="font-medium text-slate-800">
                SS Water Storage Tank
              </span>{" "}
              is built to securely store liquids across various industries. With
              sizes ranging from 500 to 10,000 liters and optional add-ons, it's
              a versatile and safe solution for your storage needs.
            </p>

            {/* Call Now Button */}
            <motion.a
              href="tel:+919135636541"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 border-2 border-orange-500/80 rounded-xl text-slate-800 font-medium bg-gradient-to-r from-orange-50/50 to-amber-50/50 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md group text-base"
            >
              <span>Call Now</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* RIGHT COLUMN: DETAILED CONTENT & SECTIONS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8 space-y-12"
          >
            {/* MAIN HEADING & OVERVIEW */}
            <div className="border-b border-dashed border-slate-300 pb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Hygienic Liquid Storage You Can Trust
              </h2>
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Description Section */}
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <h3 className="text-lg font-semibold text-slate-900 pt-2">
                  Description
                </h3>
                <p className="text-base sm:text-base">
                  The{" "}
                  <span className="font-medium text-slate-800">
                    SS Water Storage Tank
                  </span>{" "}
                  by Vpack is a high-quality liquid storage solution designed to
                  meet the demanding needs of industrial and commercial
                  applications. Constructed from{" "}
                  <span className="font-medium text-slate-800">
                    SS304 stainless steel
                  </span>
                  , it ensures exceptional durability, corrosion resistance, and
                  hygiene — making it ideal for storing{" "}
                  <span className="font-medium text-slate-800">
                    purified water, beverages, and other sensitive liquids
                  </span>
                  .
                </p>
                <p className="text-base sm:text-base">
                  Available in both{" "}
                  <span className="font-medium text-slate-800">
                    vertical and horizontal designs
                  </span>
                  , this tank can be{" "}
                  <span className="font-medium text-slate-800">
                    customized from 500 L to over 10,000 L
                  </span>{" "}
                  to match your process requirements. The tank features a{" "}
                  <span className="font-medium text-slate-800">
                    smooth interior surface
                  </span>
                  , enabling hassle-free cleaning and maintenance. Optional
                  features like{" "}
                  <span className="font-medium text-slate-800">
                    insulation, level indicators, manholes
                  </span>
                  , and{" "}
                  <span className="font-medium text-slate-800">
                    pressure relief valves
                  </span>{" "}
                  provide added safety, ease of use, and temperature control.
                </p>
                <p className="text-base sm:text-base">
                  Whether you're running a water treatment plant or a food
                  production line, the{" "}
                  <span className="font-medium text-slate-800">
                    SS Water Storage Tank
                  </span>{" "}
                  is engineered to uphold the highest standards of{" "}
                  <span className="font-medium text-slate-800">
                    BIS and FSSAI compliance
                  </span>
                  , ensuring safety, hygiene, and regulatory trust.
                </p>
              </div>
            </div>

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <div className="border-b border-dashed border-slate-300 pb-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-purple-100 rounded-xl text-purple-600 shadow-sm">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Technical Specifications
                </h3>
              </div>

              <ul className="space-y-3 text-slate-700 text-base">
                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-32 shrink-0">
                    • Material:
                  </span>
                  <span>Stainless Steel (SS304)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-32 shrink-0">
                    • Capacity:
                  </span>
                  <span>Customizable (500 L to 10,000 L or more)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-32 shrink-0">
                    • Design:
                  </span>
                  <span>Vertical or Horizontal options available</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-32 shrink-0">
                    • Features:
                  </span>
                  <span className="italic">Advanced industrial options:</span>
                </li>
                <ul className="pl-6 space-y-2 mt-2 border-l-2 border-purple-200 ml-4 text-base">
                  <li className="flex items-center text-slate-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Corrosion-resistant and durable
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Food-grade material for safe water storage
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Smooth interior for easy cleaning
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Insulated options for temperature control
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Level indicator, pressure relief valve, and manhole for easy
                    maintenance
                  </li>
                </ul>
                <li className="flex items-start pt-2">
                  <span className="font-medium text-slate-900 w-32 shrink-0">
                    • Compliance:
                  </span>
                  <span>BIS and FSSAI certified</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-32 shrink-0">
                    • Applications:
                  </span>
                  <span>
                    Ideal for storing purified water, beverages, and other
                    liquids
                  </span>
                </li>
              </ul>
            </div>

            {/* PERFORMANCE HIGHLIGHTS SECTION */}
            <div className="border-b border-dashed border-slate-300 pb-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-purple-100 rounded-xl text-purple-600 shadow-sm">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Performance Highlights:
                </h3>
              </div>

              <ul className="space-y-3 text-slate-700 text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Made from corrosion-resistant SS304 stainless steel
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Available in customizable sizes from 500 L to 10,000 L+
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Smooth interior surface allows easy cleaning and low
                  maintenance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Optional insulation for temperature-controlled storage
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  BIS and FSSAI certified for food-grade safety
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mt-8">
                <MotionLink
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-orange-500/80 rounded-xl text-slate-800 font-medium bg-gradient-to-r from-orange-50/50 to-amber-50/50 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md group text-base"
                >
                  <span>Get a quote</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </MotionLink>
              </div>
            </div>

            {/* IDEAL FOR SECTION */}
            <div className="border-b border-dashed border-slate-300 pb-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-purple-100 rounded-xl text-purple-600 shadow-sm">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Ideal For
                </h3>
              </div>

              <ul className="space-y-3 text-slate-700 text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Water purification systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Beverage manufacturing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Dairy and food processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Pharmaceutical and cosmetic industries
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Institutional and industrial water storage
                </li>
              </ul>
            </div>

            {/* WHY SS WATER STORAGE TANK SECTION */}
            <div className="border-b border-dashed border-slate-300 pb-10">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-6">
                Why SS Water Storage Tank?
              </h3>

              <ul className="space-y-3 text-slate-700 text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Customizable from 500L to 10,000L+
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Made from SS304 food-grade stainless steel
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Ideal for water, beverages, dairy, and more
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  Corrosion-resistant, hygienic, and easy to maintain
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 shrink-0"></span>
                  BIS & FSSAI certified for total compliance
                </li>
              </ul>
            </div>

            {/* CALL TO ACTION BANNER 1 */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-rose-500/20 rounded-xl text-rose-400">
                  <PhoneCall className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Ready to Transform Your Line? Let's Talk!
                </h3>
              </div>
              <p className="text-slate-300 text-base mb-8 max-w-2xl">
                Call us today to discover how{" "}
                <span className="font-medium text-white">
                  SS Water Storage Tank
                </span>{" "}
                can elevate your production game.
              </p>
              <motion.a
                href="tel:+919135636541"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-orange-500 rounded-xl text-slate-900 font-medium bg-white hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-lg group text-base"
              >
                <span>Call Now</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* CALL TO ACTION BANNER 2 */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-blue-100 rounded-xl text-blue-600">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Boost Your Production with Confidence
                </h3>
              </div>
              <p className="text-slate-600 text-base">
                With precision and flexibility,{" "}
                <span className="font-medium text-slate-900">
                  SS Water Storage Tank
                </span>{" "}
                delivers performance you can count on.
              </p>
            </div>

            {/* ENGINEERED FOR EXCELLENCE SECTION */}
            <div className="border-b border-dashed border-slate-300 pb-10 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="p-3 bg-pink-100 rounded-2xl text-pink-600 shadow-sm shrink-0">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Engineered for Excellence. Built for You.
                  </h3>
                  <p className="text-slate-600 text-base mt-1">
                    From speed to accuracy — every unit tells a story of
                    quality.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex justify-center sm:justify-start">
                <motion.a
                  href="tel:+919135636541"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-orange-500/80 rounded-xl text-slate-800 font-medium bg-gradient-to-r from-orange-50/50 to-amber-50/50 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md group text-base"
                >
                  <span>Call Now</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>

            {/* FAQ SECTION */}
            <FAQ />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
