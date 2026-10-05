"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";

export default function StickerLabelorPage() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-700 min-h-screen text-[16px] lg:text-[18px] leading-relaxed">
      {/* Top Header Banner */}
      <div className="bg-[#dbe3ea]  py-6 md:py-8 px-4  ">
        <h1 className="text-2xl md:text-5xl font-bold text-[#0f172a] tracking-tight flex items-center justify-center gap-3 min-h-[80px]  md:min-h-[100px] ">
          <span>🏷️️</span>
          Sticker Labelor Machine
        </h1>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
        {/* Mobile: Flex column (order-1 for left image card, order-2 for right content) | Desktop: Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE (Mobile: FIRST / TOP) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-none w-full lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 md:p-6 shadow-sm lg:sticky lg:top-6"
          >
            {/* Product Image Container */}
            <div className="relative w-full h-[260px] sm:h-[320px] bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center p-4">
              <Image
                src="/images/products/sticker.png"
                alt="Sticker Labelor Machine"
                width={300}
                height={300}
                className="object-contain max-h-full"
                priority
              />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center space-x-1 text-amber-400 mt-4 text-xl">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            {/* Left Card Title */}
            <h2 className="text-xl lg:text-2xl font-bold text-[#0f172a] mt-2 flex items-center gap-2">
              <span>🏷️</span>
              <Link
                href="/contact"
                className="hover:text-[#3b82f6] transition-colors"
              >
                Sticker Labelor Machine
              </Link>
            </h2>

            {/* Left Card Description */}
            <p className="mt-3 text-slate-600 text-[16px] lg:text-[18px] leading-relaxed">
              The Sticker Labeling Machine automates the process of applying
              self-adhesive labels to bottles, jars, and containers with
              unmatched accuracy. Ideal for industries like beverages,
              pharmaceuticals, cosmetics, and chemicals — it delivers
              consistency, speed, and professional presentation.
            </p>

            {/* Call Now Button */}
            <div className="mt-6">
              <a
                href="tel:+919135636541"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-orange-300 text-slate-800 rounded-md shadow-[0_4px_12px_rgba(251,146,60,0.15)] hover:bg-orange-50 transition-all text-[16px] lg:text-[18px]"
              >
                Call Now <span className="text-sm">➔</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE (Mobile: SECOND / BELOW) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-none w-full lg:col-span-8 bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6 md:space-y-8"
          >
            {/* Main Headline */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] leading-tight">
                Effortless, high-speed labeling for precise branding and
                compliance.
              </h2>
              <div className="flex items-center space-x-1 text-amber-500 mt-3 text-lg md:text-2xl">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <hr className="border-dashed border-slate-200" />

            {/* Description Section */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                Description
              </h3>
              <p className="text-slate-600 text-[16px] lg:text-[18px]">
                Designed for peak performance in automated labeling, the Sticker
                Labelor handles self-adhesive label application with precision.
                With a flexible standard label height range (up to 150 mm) and
                minimum label length of 30 mm, it accommodates a wide range of
                packaging needs.
              </p>
              <p className="text-slate-600 text-[16px] lg:text-[18px]">
                Its roll capacity supports up to 300 mm diameter reels with a
                core of 75/76 mm, maintaining a tight ±1 mm to 1.5 mm label
                placement accuracy. Operating at speeds of up to 120 labels per
                minute, this machine performs flawlessly across industries where
                consistent branding and regulatory labeling are critical.
              </p>
              <p className="text-slate-600 text-[16px] lg:text-[18px]">
                Customizable for various product sizes, it integrates seamlessly
                with your packaging line and works on a standard 220 VAC
                single-phase power supply. Compact yet powerful, this machine is
                an ideal addition for modern production facilities.
              </p>
            </div>

            <hr className="border-dashed border-slate-200" />

            {/* Technical Specifications Section */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>⚙️</span> Technical Specifications
              </h3>
              <ul className="space-y-2 text-slate-700 list-disc list-inside text-[16px] lg:text-[18px]">
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Label Height:
                  </strong>{" "}
                  70 / 90 / 120 / 150 mm Standard*
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Label Length:
                  </strong>{" "}
                  30 mm Minimum
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Label Roll Dia.:
                  </strong>{" "}
                  300 mm
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Core Dia.:
                  </strong>{" "}
                  75 / 76 mm
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Gap Between Two Labels:
                  </strong>{" "}
                  Approx. 3 mm
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Label Accuracy:
                  </strong>{" "}
                  ±1 mm to 1.5 mm
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Product Size:
                  </strong>{" "}
                  As per customer requirements* (Feed Worm and Pocket System
                  required for size change in special machines)
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Electrical:
                  </strong>{" "}
                  220 VAC Single Phase Power Supply (50/60 Hz)
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Power:
                  </strong>{" "}
                  2.0 Amp
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Capacity:
                  </strong>{" "}
                  0.75 kW
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Speed:
                  </strong>{" "}
                  Up to 120 labels per minute (depending on product and label
                  size, and conveyor stability)
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Conveyor Height:
                  </strong>{" "}
                  830 – 875 mm*
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">
                    Overall Dimensions:
                  </strong>{" "}
                  2580 mm (L) x 1500 mm (W) x 1500 mm (H)
                </li>
              </ul>
            </div>

            {/* Performance Highlights Section */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>⚙️</span> Performance Highlights:
              </h3>
              <ul className="space-y-2 text-slate-700 list-disc list-inside text-[16px] lg:text-[18px]">
                <li>High-speed labeling: up to 120 labels per minute</li>
                <li>Superior label placement accuracy (±1–1.5 mm)</li>
                <li>Compatible with various label heights and product sizes</li>
                <li>Efficient 0.75 kW power usage</li>
                <li>Compact footprint with robust construction</li>
              </ul>

              {/* Get a quote Button */}
              <div className="pt-2 flex justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-orange-300 text-slate-800 rounded-md shadow-[0_4px_12px_rgba(251,146,60,0.15)] hover:bg-orange-50 transition-all text-[16px] lg:text-[18px]"
                >
                  Get a quote <span className="text-sm">➔</span>
                </Link>
              </div>
            </div>

            {/* Ideal For Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>🏭</span> Ideal For
              </h3>
              <ul className="space-y-2 text-slate-700 list-disc list-inside text-[16px] lg:text-[18px]">
                <li>Beverage bottling plants</li>
                <li>Pharmaceutical manufacturers</li>
                <li>Cosmetic packaging lines</li>
                <li>Chemical product labeling</li>
                <li>Food and dairy industries</li>
              </ul>
            </div>

            {/* Why Choose the Sticker Labelor? Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>💡</span> Why Choose the Sticker Labelor?
              </h3>
              <ul className="space-y-2 text-slate-700 list-disc list-inside text-[16px] lg:text-[18px]">
                <li>Quick, accurate label application</li>
                <li>Supports a wide range of label dimensions</li>
                <li>Reliable performance even at higher speeds</li>
                <li>Minimal maintenance with robust design</li>
                <li>Smooth product handling on conveyor</li>
              </ul>
            </div>

            {/* Ready to Transform Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>📞</span> Ready to Transform Your Line? Let's Talk!
              </h3>
              <p className="text-slate-600 text-[16px] lg:text-[18px]">
                Call us today to discover how{" "}
                <strong className="text-slate-800 font-semibold">
                  Sticker Labelor Machine
                </strong>{" "}
                can elevate your packaging process
              </p>
              <div>
                <a
                  href="tel:+919135636541"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-orange-300 text-slate-800 rounded-md shadow-[0_4px_12px_rgba(251,146,60,0.15)] hover:bg-orange-50 transition-all text-[16px] lg:text-[18px]"
                >
                  Call Now <span className="text-sm">➔</span>
                </a>
              </div>
            </div>

            {/* Boost Your Production Confidence Section */}
            <div className="space-y-2 pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>🚀</span> Boost Your Production Confidence
              </h3>
              <p className="text-slate-600 text-[16px] lg:text-[18px]">
                With precision and flexibility,{" "}
                <strong className="text-slate-800 font-semibold">
                  Sticker Labelor Machine
                </strong>{" "}
                delivers performance you can count on.
              </p>
            </div>

            {/* Engineered for Excellence Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>🎯</span> Engineered for Excellence. Built for You.
              </h3>
              <p className="text-slate-600 text-[16px] lg:text-[18px]">
                From speed to accuracy — every unit tells a story of quality.
              </p>
              <div>
                <a
                  href="tel:+919135636541"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-orange-300 text-slate-800 rounded-md shadow-[0_4px_12px_rgba(251,146,60,0.15)] hover:bg-orange-50 transition-all text-[16px] lg:text-[18px]"
                >
                  Call Now <span className="text-sm">➔</span>
                </a>
              </div>
            </div>
            <FAQ />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
