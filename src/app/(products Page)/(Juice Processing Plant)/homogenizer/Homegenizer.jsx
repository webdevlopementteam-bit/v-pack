"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FAQ from "@/components/FAQ";

export default function HomogenizerPage() {
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
      {/* Top Hero Banner - min-height 80px on mobile, 110px on md+ */}
      <div className="bg-[#dbe3eb]  px-4 py-4 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2 min-h-[80px] md:min-h-[110px]">
          <span className="text-3xl lg:text-4xl">⚙️</span>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] tracking-wide uppercase">
            HOMOGENIZER
          </h1>
        </div>
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
                  src="/images/products/homegenizer.png"
                  alt="Homogenizer Machine"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Stars */}
            <div className="flex text-amber-400 text-xl md:text-2xl">★★★★★</div>

            {/* Product Heading */}
            <h3 className="text-xl lg:text-2xl font-bold text-[#0B2545] flex items-center gap-2">
              <span>⚙️</span> Homogenizer
            </h3>

            {/* Product Short Description */}
            <p className="text-gray-600 text-[15px] sm:text-[16px] lg:text-[17px]">
              The Vpack Homogenizer is an automatic, high-efficiency solution
              designed for food processing industries. It delivers uniform
              product texture and stability with pressures exceeding 250 Bar and
              a flow range of 200 to 2000 LPH — perfect for dairy, beverages,
              and more.
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
                High-Efficiency Food-Grade Homogenizer for Smooth, Consistent
                Output
              </h1>
              <div className="flex text-amber-400 text-xl md:text-2xl">
                ★★★★★
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                Description
              </h2>

              <p className="text-gray-600">
                The <strong className="text-gray-800">Vpack Homogenizer</strong>{" "}
                is engineered to deliver high-pressure homogenization ideal for
                emulsifying, suspending, and blending in food and dairy
                processing. With a working range from 200 to 2000 LPH and
                operating at pressures over 250 Bar, it ensures consistent
                product texture and extended shelf life.
              </p>

              <p className="text-gray-600">
                Its heart — the VP-40 LD plunger pump — includes three tungsten
                carbide-coated pistons (16 mm), ensuring longevity and wear
                resistance. With a rated efficiency of 90%, this system provides
                a fine product output between 2.5 to 3 microns in quality. Built
                from SS304 grade stainless steel, the liquid-end guarantees
                hygiene and corrosion resistance.
              </p>

              <p className="text-gray-600">
                This model operates smoothly at 250 strokes per minute and
                delivers up to 1050 LPH at rated water pressure. The manually
                adjustable spring-loaded pressure valve, SS diaphragm-type
                pressure gauge (Waaree make), and L&T starter ensure safe and
                reliable performance.
              </p>

              <p className="text-gray-600">
                It features high-grade internals such as EN24 nitrided
                crankshafts, SKF taper roller bearings, and a forged steel
                connecting rod — all lubricated via a splash system for low
                maintenance. The 2HP motor (from reputed brands like Siemens,
                CG, or Havells) ensures reliable operation, while the SS ball
                valve and 1" SMS unions make inlet/outlet integration seamless.
              </p>
            </div>

            {/* Technical Specifications Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>⚙️</span> Technical Specifications
              </h2>

              <div className="space-y-2 text-gray-700 pl-1">
                <p>
                  <strong className="text-gray-800">
                    Minimum Order Quantity:
                  </strong>{" "}
                  1 Unit
                </p>
                <p>
                  <strong className="text-gray-800">Application:</strong> Food
                  Processing
                </p>
                <p>
                  <strong className="text-gray-800">Brand:</strong> Vpack
                </p>
                <p>
                  <strong className="text-gray-800">Range:</strong> 200 to 2000
                  LPH
                </p>
                <p>
                  <strong className="text-gray-800">Pressure:</strong> &gt;250
                  Bar
                </p>
                <p>
                  <strong className="text-gray-800">Capacity:</strong> 200
                  Litres/Hour
                </p>
                <p>
                  <strong className="text-gray-800">Automation Grade:</strong>{" "}
                  Automatic
                </p>
                <p>
                  <strong className="text-gray-800">Power Source:</strong> 440
                  Volts
                </p>
                <p>
                  <strong className="text-gray-800">Phase:</strong> 3 Phase
                </p>
                <p>
                  <strong className="text-gray-800">Plunger Pump Model:</strong>{" "}
                  VP-40 LD
                </p>
                <p>
                  <strong className="text-gray-800">Piston Diameter:</strong> 16
                  mm Super Finish Tungsten Carbide Coated
                </p>
                <p>
                  <strong className="text-gray-800">No. of Pistons:</strong> 3
                  Nos
                </p>
                <p>
                  <strong className="text-gray-800">Working Pressure:</strong>{" "}
                  160 Bar (2300 PSI)
                </p>
                <p>
                  <strong className="text-gray-800">Working Temp:</strong> 72°C
                  to 80°C
                </p>
                <p>
                  <strong className="text-gray-800">Efficiency:</strong> 90.00%
                </p>
                <p>
                  <strong className="text-gray-800">Product Quality:</strong>{" "}
                  2.5 Micron to 3 Micron
                </p>
                <p>
                  <strong className="text-gray-800">
                    Material of Construction (Liquid End):
                  </strong>{" "}
                  SS 304
                </p>
                <p>
                  <strong className="text-gray-800">Pump Speed:</strong> 250 SPM
                </p>
                <p>
                  <strong className="text-gray-800">
                    Capacity at Rated Pressure:
                  </strong>{" "}
                  1050 LPH in Water
                </p>
                <p>
                  <strong className="text-gray-800">Homogenizing Valve:</strong>{" "}
                  High quality tungsten carbide valves (Primary &amp; Secondary)
                </p>
                <p>
                  <strong className="text-gray-800">
                    Pressure Adjusting Method:
                  </strong>{" "}
                  Spring Loaded Manual Type
                </p>
                <p>
                  <strong className="text-gray-800">
                    Suction &amp; Discharge Valves:
                  </strong>{" "}
                  Stainless Steel
                </p>
                <p>
                  <strong className="text-gray-800">
                    Cream Inlet &amp; Outlet:
                  </strong>{" "}
                  1″ SMS Union
                </p>
                <p>
                  <strong className="text-gray-800">Power Required:</strong> 2
                  HP Motor, 960 RPM, 3 Phase (CG/Havells/Siemens make)
                </p>
                <p>
                  <strong className="text-gray-800">Motor Starter:</strong>{" "}
                  L&amp;T Starter
                </p>
                <p>
                  <strong className="text-gray-800">Drive:</strong> Belt Pulley
                  Type
                </p>
                <p>
                  <strong className="text-gray-800">NRV Type:</strong> Ball
                  Valve, 12 mm Dia
                </p>
                <p>
                  <strong className="text-gray-800">Pressure Gauge:</strong>{" "}
                  Waaree Make SS Diaphragm Type, Sanitary Design
                </p>
                <p>
                  <strong className="text-gray-800">Crank Shaft:</strong> Solid
                  EN 24 Bar, Nitrided
                </p>
                <p>
                  <strong className="text-gray-800">Cross Head:</strong> SS 410
                  (Hard Chrome Plated)
                </p>
                <p>
                  <strong className="text-gray-800">
                    Crank Shaft Bearing:
                  </strong>{" "}
                  SKF Make Taper Roller
                </p>
                <p>
                  <strong className="text-gray-800">Connecting Rod:</strong>{" "}
                  High Quality Forged Steel
                </p>
                <p>
                  <strong className="text-gray-800">
                    Connecting Rod Bearing:
                  </strong>{" "}
                  Split Type Bi-Metallic
                </p>
                <p>
                  <strong className="text-gray-800">Lubricating System:</strong>{" "}
                  Splash Type
                </p>
              </div>
            </div>

            {/* Performance Highlights Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>⚙️</span> Performance Highlights:
              </h2>
              <div className="space-y-2 text-gray-700 pl-1">
                <p>Delivers consistent 2.5–3 micron product quality</p>
                <p>Rated efficiency of 90%</p>
                <p>Heavy-duty construction with SS304 and EN24 components</p>
                <p>Pressure gauge and safety valves for optimal control</p>
                <p>
                  Smooth 250 SPM pump speed with high-capacity 1050 LPH output
                </p>
              </div>

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

            {/* Ideal For Section */}
            <div className="space-y-3 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>🏭</span> Ideal For
              </h2>
              <div className="space-y-1 text-gray-700 pl-1">
                <p>Dairy plants</p>
                <p>Juice and beverage manufacturers</p>
                <p>Food emulsification processes</p>
                <p>Pharmaceutical blending</p>
                <p>Cosmetic and chemical applications</p>
              </div>
            </div>

            {/* Why Choose the Vpack Homogenizer? Section */}
            <div className="space-y-3 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>💡</span> Why Choose the Vpack Homogenizer?
              </h2>
              <div className="space-y-2 text-gray-700 pl-1">
                <p>Superior homogenizing with tungsten carbide valves</p>
                <p>Durable components built for high-pressure operations</p>
                <p>Custom-designed for food-grade safety</p>
                <p>Compact, efficient, and low-maintenance system</p>
                <p>Trusted motor and starter brands included</p>
              </div>
            </div>

            {/* Ready to Transform Your Labeling Line? Let's Talk! Section */}
            <div className="space-y-3 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>📞</span> Ready to Transform Your Labeling Line? Let's
                Talk!
              </h2>
              <p className="text-gray-600">
                Call us today to discover how{" "}
                <strong className="text-gray-800">Vpack Homogenizer</strong> can
                elevate your production game.
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

            {/* Boost Your Production Section */}
            <div className="space-y-3 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>🚀</span> Boost Your Production with Confidence
              </h2>
              <p className="text-gray-600">
                With precision and flexibility,{" "}
                <strong className="text-gray-800">Vpack Homogenizer</strong>{" "}
                delivers performance you can count on.
              </p>
            </div>

            {/* Engineered for Excellence Section */}
            <div className="space-y-3 pt-4 pb-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>🎯</span> Engineered for Excellence. Built for You.
              </h2>
              <p className="text-gray-600">
                From speed to accuracy — every unit tells a story of quality.
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
            {/* FAQ Items */}
            <FAQ />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
