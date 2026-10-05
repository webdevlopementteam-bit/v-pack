"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";

export default function CapperProductPage() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-700 min-h-screen text-[16px] lg:text-[18px] leading-relaxed">
      {/* Top Header Banner */}

      <div className="bg-[#dbe3ea] flex justify-center text-center py-6 md:py-8 px-4">
        <h1 className="text-2xl md:text-5xl font-bold text-[#0f172a] tracking-tight min-h-[80px] md:min-h-[110px] flex items-center justify-center">
          Capper Machine <span className="text-[#3b82f6] ml-2">VPCL-40M</span>
        </h1>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
        {/* Flex container on mobile (order-1 for left card, order-2 for right content) & Grid on large screens */}
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
                src="/images/products/capper.png"
                alt="VPACK- Capper Machine"
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
            <h2 className="text-xl lg:text-2xl font-bold text-[#0f172a] mt-2">
              VPACK- Capper Machine
            </h2>

            {/* Left Card Description */}
            <p className="mt-3 text-slate-600 text-[16px] lg:text-[18px] leading-relaxed">
              The Vpack Metal Cap Closing Machine is engineered for efficient,
              high-speed sealing of burglar-proof plastic caps. Widely used in
              the beverage, wine, chemical, and pharmaceutical industries, it
              ensures reliable and consistent performance with every cap.
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
                Precision meets performance for secure metal cap sealing.
              </h2>
              <div className="flex items-center space-x-1 text-amber-500 mt-3 text-lg md:text-xl">
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
                Built with compact design and high functionality, the Vpack is
                your go-to solution for sealing PVC plastic burglar-proof caps.
                With a power-efficient 0.37W motor and a voltage requirement of
                220V/60Hz, it offers a capacity of up to 1200 bottles per
                hour—making it ideal for medium-volume production.
              </p>
              <p className="text-slate-600 text-[16px] lg:text-[18px]">
                Compatible with bottles ranging from 50 to 320 mm in height and
                caps of 25 x 40 mm in size, it ensures consistent torque and a
                professional seal every time. Its lightweight (just 65 kg) and
                compact dimensions (550x350x650 mm) make it suitable for tight
                spaces in your production line.
              </p>
            </div>

            <hr className="border-dashed border-slate-200" />

            {/* Technical Specifications Section */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>⚙️</span> Technical Specifications
              </h3>
              <ul className="space-y-2 text-slate-700 list-disc list-inside text-[16px] lg:text-[18px]">
                <li>Model: VPACK</li>
                <li>Voltage (V/Hz): 220 / 60</li>
                <li>Power (W): 0.37</li>
                <li>Cap Diameter (mm): 25 x 40</li>
                <li>Applicable Bottle Height (mm): 50 – 320</li>
                <li>Capacity (bottles/h): &lt;1200</li>
                <li>Types of Cap: PVC</li>
                <li>External Dimensions (mm): 550 x 350 x 650</li>
                <li>Net Weight (kg): 65</li>
              </ul>
            </div>

            {/* Performance Highlights Section */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>⚙️</span> Performance Highlights:
              </h3>
              <ul className="space-y-2 text-slate-700 list-disc list-inside text-[16px] lg:text-[18px]">
                <li>Handles up to 1200 bottles per hour</li>
                <li>Compact, lightweight, and efficient</li>
                <li>Energy-saving design with 0.37W power usage</li>
                <li>Perfect for plastic burglar-proof cap applications</li>
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
                <li>Beverage industries</li>
                <li>Wine and liquor bottling</li>
                <li>Chemical solutions</li>
                <li>Pharmaceutical liquid packaging</li>
              </ul>
            </div>

            {/* Why VPCL-40M Metal Capper? Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>💡</span> Why VPCL-40M Metal Capper?
              </h3>
              <ul className="space-y-2 text-slate-700 list-disc list-inside text-[16px] lg:text-[18px]">
                <li>Compact design for space-saving setups</li>
                <li>Reliable sealing for PVC burglar-proof caps</li>
                <li>Simple to operate and maintain</li>
                <li>Suits a wide range of bottle heights</li>
                <li>Consistent, high-speed capping for mid-scale operations</li>
              </ul>
            </div>

            {/* Ready to Transform Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>📞</span> Ready to Transform Your Line? Let's Talk!
              </h3>
              <p className="text-slate-600 text-[16px] lg:text-[18px]">
                Call us today to discover how Vpack can elevate your capping
                operations.
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

            {/* Boost Your Production Section */}
            <div className="space-y-2 pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>🚀</span> Boost Your Production with Confidence
              </h3>
              <p className="text-slate-600 text-[16px] lg:text-[18px]">
                With precision and flexibility, VPACK delivers performance you
                can count on.
              </p>
            </div>

            {/* Engineered for Excellence Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] flex items-center gap-2">
                <span>🎯</span> Engineered for Excellence. Built for You.
              </h3>
              <p className="text-slate-600 text-[16px] lg:text-[18px]">
                From speed to accuracy — every label tells a story of quality.
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

            <hr className="border-dashed border-slate-200" />

            {/* FAQ Section */}
            <FAQ />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
