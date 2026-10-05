"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FilterPressPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100">
      {/* 1. Header Banner */}
      <section className="w-full bg-slate-200 py-8 md:py-10 px-4 sm:px-6 md:px-12 border-b border-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center"
          >
            <span className="text-2xl md:text-3xl">🧱</span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              VPACK Filter Press
            </h1>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-blue-500">
              Precision Filtration
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column: Sticky Product Card Sidebar (Mobile view: Order 1, Desktop view: Order 1) */}
        <div className="lg:col-span-1 order-1 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-6 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-lg space-y-4 sm:space-y-5"
          >
            {/* Product Image */}
            <div className="relative w-full h-55 sm:h-63 aspect-square bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center border border-slate-100">
              <Image
                src="/images/products/filter.webp"
                alt="VPACK Filter Press"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover p-2"
                priority
              />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 text-yellow-400 text-xl md:text-2xl">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            {/* Sidebar Title */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🧪</span>
                <h4 className="text-xl font-bold text-slate-900 leading-tight">
                  VPACK Filter Press
                </h4>
              </div>
              <p className="text-[16px] lg:text-[18px] font-medium text-slate-500 mt-1">
                Your Industrial Filtration Powerhouse
              </p>
            </div>

            {/* Sidebar Description */}
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              The <strong className="text-slate-900">VPACK Filter Press</strong>{" "}
              is an{" "}
              <strong className="text-slate-900">
                industrial-grade filtration system
              </strong>{" "}
              that ensures{" "}
              <strong className="text-slate-900">
                consistent and thorough separation
              </strong>{" "}
              of solids and liquids. Whether you’re treating wastewater,
              purifying beverages, or filtering chemicals, this press is
              engineered to{" "}
              <strong className="text-slate-900">maximize output</strong> and{" "}
              <strong className="text-slate-900">minimize downtime</strong>.
            </p>

            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              With options to suit any industrial setup—from{" "}
              <strong className="text-slate-900">
                manual to fully automatic systems
              </strong>
              —this machine adapts to your process with ease, while ensuring{" "}
              <strong className="text-slate-900">
                high durability, pressure resistance
              </strong>
              , and <strong className="text-slate-900">low maintenance</strong>.
            </p>

            {/* Call Now Button */}
            <div className="pt-2">
              <a
                href="tel:+919135636541"
                className="w-full border border-orange-500 text-slate-800 hover:bg-orange-50 font-medium px-6 py-3 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all text-[16px]"
              >
                Call Now <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Columns: Product Details (Mobile view: Order 2, Desktop view: Order 2) */}
        <div className="lg:col-span-2 order-2 lg:order-2 space-y-8 md:space-y-10">
          {/* Main Title & Rating */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-2xl sm:text-3xl">🧱</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                Filter Press – Efficient Solid-Liquid Separation
              </h2>
            </div>
            <div className="flex items-center gap-1 text-orange-500 mt-2 text-xl md:text-2xl">
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
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Description
            </h3>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              <strong className="text-slate-900">
                Optimize your filtration process with VPACK’s advanced Filter
                Press
              </strong>
              , designed for effective solid-liquid separation across various
              industries. Whether you’re in pharmaceuticals, chemicals, or
              wastewater treatment, our Filter Press ensures high performance,
              durability, and ease of operation.
            </p>
          </motion.section>

          {/* Product Highlights Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">✨</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Product Highlights
              </h3>
            </div>
            <ul className="space-y-3 text-[16px] lg:text-[18px] text-slate-700">
              <li>
                <strong className="text-slate-900">
                  • Versatile Operation:
                </strong>{" "}
                Available in Hydraulic, Mechanical, Automatic, and
                Semi-Automatic models to suit diverse operational needs.
              </li>
              <li>
                <strong className="text-slate-900">
                  • Robust Construction:
                </strong>{" "}
                Frames made from MS with Epoxy Coating or SS 304/316, ensuring
                longevity and resistance to corrosion.
              </li>
              <li>
                <strong className="text-slate-900">
                  • Customizable Plate Options:
                </strong>{" "}
                Choose from Polypropylene (PP), Cast Iron, or SS316 filter
                plates, with sizes ranging from 470 x 470 mm to 1200 x 1200 mm.
              </li>
              <li>
                <strong className="text-slate-900">
                  • High Filtration Capacity:
                </strong>{" "}
                Filter area from 1 m² to 100 m², accommodating cake holding
                capacities between 10 L to 1500 L.
              </li>
              <li>
                <strong className="text-slate-900">
                  • Efficient Filtration:
                </strong>{" "}
                Operating pressures of 4–7 bar (up to 15 bar for high-pressure
                models) and filtration cycle times between 30 minutes to 2
                hours.
              </li>
            </ul>
          </motion.section>

          <hr className="border-dashed border-slate-300" />

          {/* Technical Specifications */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">⚙️</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Technical Specifications
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-2.5 sm:gap-3 text-[16px] lg:text-[18px] text-slate-700">
              <li>
                <strong className="text-slate-900">• Machine Type:</strong>{" "}
                Hydraulic / Mechanical / Automatic / Semi-Automatic
              </li>
              <li>
                <strong className="text-slate-900">• Ideal For:</strong>{" "}
                Solid-liquid separation across industrial applications
              </li>
              <li>
                <strong className="text-slate-900">
                  • Frame Construction:
                </strong>{" "}
                Mild Steel with Epoxy Coating or SS304/316
              </li>
              <li>
                <strong className="text-slate-900">• Filter Plates:</strong>{" "}
                Available in PP, Cast Iron, or SS316
              </li>
              <li>
                <strong className="text-slate-900">• Plate Sizes:</strong> From
                compact 470 mm to large 1200 mm square
              </li>
              <li>
                <strong className="text-slate-900">• Filtration Area:</strong>{" "}
                Customizable from 1 m² to 100 m²
              </li>
              <li>
                <strong className="text-slate-900">• Cake Capacity:</strong>{" "}
                Ranges from 10 to 1500 Liters
              </li>
              <li>
                <strong className="text-slate-900">
                  • Filter Cloth Options:
                </strong>{" "}
                PP, Nylon, Cotton (Food & Chemical Grades)
              </li>
              <li>
                <strong className="text-slate-900">• Pressure Range:</strong>{" "}
                4–7 bar (up to 15 bar for specific models)
              </li>
              <li>
                <strong className="text-slate-900">• Pumps:</strong> Centrifugal
                / Diaphragm-based Slurry or Mud Pumps
              </li>
              <li>
                <strong className="text-slate-900">• Pump Materials:</strong>{" "}
                Stainless Steel, Cast Iron, or Polypropylene
              </li>
              <li>
                <strong className="text-slate-900">• Cycle Duration:</strong> 30
                minutes to 2 hours depending on slurry
              </li>
              <li>
                <strong className="text-slate-900">
                  • Cake Moisture Level:
                </strong>{" "}
                ~25–35%
              </li>
              <li>
                <strong className="text-slate-900">
                  • Hydraulic Mechanism:
                </strong>{" "}
                Manual or Motor Driven
              </li>
              <li>
                <strong className="text-slate-900">• Optional Controls:</strong>{" "}
                PLC / HMI for automation
              </li>
              <li>
                <strong className="text-slate-900">• Filtration Media:</strong>{" "}
                Supports Cloth, Paper, or Membrane Filters
              </li>
              <li>
                <strong className="text-slate-900">
                  • Slurry Pressure Input:
                </strong>{" "}
                3–5 kg/cm²
              </li>
              <li>
                <strong className="text-slate-900">• Discharge Design:</strong>{" "}
                Open or Closed (Drip Tray / Spout Type)
              </li>
              <li>
                <strong className="text-slate-900">• Finish:</strong>{" "}
                Industrial-grade epoxy or GMP-compliant SS finish
              </li>
              <li>
                <strong className="text-slate-900">• Safety Systems:</strong>{" "}
                Emergency Stop, Pressure Relief, Limit Switch
              </li>
              <li>
                <strong className="text-slate-900">
                  • Setup Space Needed:
                </strong>{" "}
                Starting from 6 ft x 4 ft
              </li>
              <li>
                <strong className="text-slate-900">• Power Needs:</strong> 2 to
                7 HP based on model
              </li>
              <li>
                <strong className="text-slate-900">• Unit Weight:</strong> 500
                to 3000+ kg
              </li>
              <li>
                <strong className="text-slate-900">
                  • Custom-Built Options:
                </strong>{" "}
                Available on request
              </li>
              <li>
                <strong className="text-slate-900">• Industries Served:</strong>{" "}
                Water, Beverage, Pharma, Chemical, Textile, Edible Oil
              </li>
              <li>
                <strong className="text-slate-900">• Warranty & Origin:</strong>{" "}
                1 Year | Proudly Made in India
              </li>
            </ul>

            <div className="pt-2 sm:pt-4">
              <Link
                href="/contact"
                className="inline-flex border border-orange-500 text-slate-800 hover:bg-orange-50 font-medium px-5 sm:px-6 py-2.5 rounded-lg shadow-sm items-center gap-2 transition-all text-[16px]"
              >
                Get a quote <span>→</span>
              </Link>
            </div>
          </motion.section>

          {/* Ideal For Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-3 sm:space-y-4 pt-2 sm:pt-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">🏭</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Ideal For
              </h3>
            </div>
            <ul className="space-y-3 text-[16px] lg:text-[18px] text-slate-700">
              <li>
                <strong className="text-slate-900">
                  • Water Treatment Plants:
                </strong>{" "}
                Efficient removal of solids from wastewater.
              </li>
              <li>
                <strong className="text-slate-900">• Beverage Industry:</strong>{" "}
                Clarification of juices and other beverages.
              </li>
              <li>
                <strong className="text-slate-900">
                  • Chemical Manufacturing:
                </strong>{" "}
                Separation of solids from chemical solutions.
              </li>
              <li>
                <strong className="text-slate-900">• Pharmaceuticals:</strong>{" "}
                Purification processes requiring high hygiene standards.
              </li>
              <li>
                <strong className="text-slate-900">
                  • Edible Oil Processing:
                </strong>{" "}
                Removal of impurities to ensure oil quality.
              </li>
              <li>
                <strong className="text-slate-900">• Textile Industry:</strong>{" "}
                Treatment of dye and chemical-laden effluents.
              </li>
            </ul>
          </motion.section>

          {/* Ready to Enhance Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-3 sm:space-y-4 pt-4 sm:pt-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">📞</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Ready to Enhance Your Filtration Process?
              </h3>
            </div>
            <p className="text-[16px] lg:text-[18px] text-slate-600">
              <strong className="text-slate-900">
                Upgrade to VPACK’s Filter Press
              </strong>{" "}
              for reliable, efficient, and customizable filtration solutions.
              Contact us today to discuss your specific requirements and get a
              tailored solution.
            </p>
            <div>
              <a
                href="tel:+919135636541"
                className="inline-flex border border-orange-500 text-slate-800 hover:bg-orange-50 font-medium px-5 sm:px-6 py-2.5 rounded-lg shadow-sm items-center gap-2 transition-all text-[16px]"
              >
                Call Now <span>→</span>
              </a>
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
              <span className="text-xl sm:text-2xl">🛡️</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Boost Your Production with Confidence
              </h3>
            </div>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Our machines combine{" "}
              <strong className="text-slate-900">innovation</strong>,{" "}
              <strong className="text-slate-900">efficiency</strong>, and{" "}
              <strong className="text-slate-900">reliability</strong> — giving
              your operations the edge they need. Trusted by numerous clients,
              VPACK products are more than just machinery — they’re a{" "}
              <strong className="text-slate-900">promise of quality</strong>.
            </p>
          </motion.section>

          <FAQ />
        </div>
      </main>
    </div>
  );
}
