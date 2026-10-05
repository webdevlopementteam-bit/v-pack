"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
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
import FAQ from "@/components/FAQ";
import TopHeader from "@/components/TopHeader";

export default function SemiAutomaticShrinkWrappingMachine() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* HEADER BANNER */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#CCD2D8] py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200 shadow-sm text-center"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center p-2.5 bg-blue-50 rounded-2xl shadow-inner text-blue-500 mb-2"
          >
            <Package className="w-8 h-8 fill-blue-400" />
          </motion.div>
          <h1 className="text-[16px] sm:text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Semi-Automatic Shrink Wrapping
          </h1>
          <h2 className="text-[16px] sm:text-3xl md:text-5xl font-bold text-blue-500 tracking-tight">
            Machine
          </h2>
        </div>
      </motion.header>

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
            {/* Product Image */}
            <div className="relative w-full h-72 sm:h-80 bg-slate-100 rounded-xl overflow-hidden mb-6 flex items-center justify-center border border-slate-100 group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="/images/products/power-pack.png"
                alt="Semi-Automatic Shrink Wrapping Machine"
                className="w-full h-full object-contain p-4"
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
            <h3 className="text-[16px] sm:text-lg font-semibold text-slate-900 leading-snug mb-3 flex items-center gap-2">
              Power-Packed Performance for Clean, Tight, and Professional
              Packaging
            </h3>

            {/* Short Description */}
            <p className="text-[16px] sm:text-sm text-slate-600 leading-relaxed mb-6">
              Say hello to{" "}
              <span className="font-medium text-slate-800">VPACK</span> — the
              ultimate semi-automatic shrink wrapping solution for businesses
              looking to enhance their packaging game without breaking the bank.
              Whether you're packing bottles, cans, or cartons, this machine
              delivers consistently crisp, clear, and secure shrink-wrapped
              packages with every cycle.
            </p>

            {/* Call Now Button */}
            <motion.a
              href="tel:+919135636541"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 border-2 border-orange-500/80 rounded-xl text-slate-800 font-medium bg-gradient-to-r from-orange-50/50 to-amber-50/50 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md group text-[16px]"
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
              <h2 className="text-[16px] sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Semi-Automatic Shrink Wrapping Machine Manufacturer
              </h2>

              {/* Description Section */}
              <div className="space-y-4 text-slate-600 leading-relaxed text-[16px]">
                <p>
                  Presenting the VPACK, a{" "}
                  <span className="italic text-slate-800 font-medium">
                    semi-automatic shrink wrapping
                  </span>{" "}
                  device made for dependable, economical, and effective
                  packaging with premium shrink film. This machine, which was
                  designed to meet the needs of small to medium-sized
                  businesses, is perfect for precisely and consistently packing
                  cans, cartons, juice bottles, mineral water bottles, and other
                  similar products.
                </p>

                <p>
                  Efficiency and product presentation are critical success
                  factors in the cutthroat industrial packaging market. Vpack
                  Machine stands out if you’re looking for a dependable
                  manufacturer of semi-automatic shrink wrapping machines
                  because it provides high-performing, long-lasting, and
                  cost-effective packaging options that adhere to contemporary
                  industry standards.
                </p>

                <p>
                  Engineered for versatility and user-friendly operation, the
                  VPACK delivers professional packaging results without
                  compromising on energy efficiency or operational ease. Whether
                  you're upgrading an existing packaging line or starting a new
                  setup, this machine provides a clear advantage in packaging
                  speed, uniformity, and overall productivity.
                </p>
              </div>
            </div>

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <div className="border-b border-dashed border-slate-300 pb-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-purple-100 rounded-xl text-purple-600 shadow-sm">
                  <Settings className="w-6 h-6" />
                </div>

                <h3 className="text-[16px] sm:text-xl font-bold text-slate-900 tracking-tight">
                  Technical Specifications
                </h3>
              </div>

              <ul className="space-y-3 text-slate-700 text-[16px]">
                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Conveyor Height:
                  </span>
                  <span>
                    Adjustable — 800 mm ± 50 mm, making it suitable for
                    different product sizes.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Model Number:
                  </span>
                  <span>VPACK’s trusted semi-automatic series.</span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Power Requirement:
                  </span>
                  <span>1.5 kW — energy-efficient yet powerful.</span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Voltage:
                  </span>
                  <span>Operates on 380 V, standard industrial supply.</span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Machine Brand:
                  </span>
                  <span>VPACK — known for reliable packaging automation.</span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Machine Weight:
                  </span>
                  <span>300 kg — robust and stable during operation.</span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Frequency:
                  </span>
                  <span>
                    50 Hz — compatible with standard electrical settings.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Overall Dimensions:
                  </span>
                  <span>
                    1370 mm (L) × 920 mm (W) × 1800 mm (H) — fits compact
                    spaces.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Packing Speed:
                  </span>
                  <span>
                    0 to 12 packets per minute — adjustable for your workflow.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Working Air Pressure:
                  </span>
                  <span>
                    6 Kgf/m² — ensures firm sealing and smooth operation.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Max Sealing Length:
                  </span>
                  <span>650 mm — accommodates larger bundle sizes.</span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 w-52 shrink-0">
                    • Max Packing Dimension:
                  </span>
                  <span>
                    500 mm (L) × 290 mm (W) × 380 mm (H) — ideal for a range of
                    pack sizes.
                  </span>
                </li>
              </ul>
            </div>

            {/* WHY CHOOSE VPACK MACHINE SECTION */}
            <div className="border-b border-dashed border-slate-300 pb-10">
              <h3 className="text-[16px] sm:text-xl font-bold text-slate-900 tracking-tight mb-4">
                Why Choose Vpack Machine?
              </h3>

              <p className="text-slate-600 text-[16px] mb-6 leading-relaxed">
                <span className="font-medium text-slate-900">
                  Vpack Machine
                </span>{" "}
                has earned its reputation as a premier{" "}
                <span className="italic text-slate-800 font-medium">
                  semi-automatic shrink wrapping machine manufacturer
                </span>{" "}
                by focusing on innovation and user-centric design. Their
                machines are engineered to handle a variety of products—from
                water bottles and cosmetic kits to food containers and
                industrial components.
              </p>

              <h4 className="text-[16px] sm:text-lg font-bold text-slate-900 tracking-tight mb-4">
                Key Features of Vpack Semi-Automatic Machines:
              </h4>

              <ul className="space-y-3 text-slate-700 text-[16px]">
                <li className="flex items-start">
                  <span className="font-medium text-slate-900 shrink-0 mr-2">
                    • Precision Sealing:
                  </span>
                  <span>
                    Equipped with advanced L-sealers or web sealers that ensure
                    clean, tamper-evident edges every time.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 shrink-0 mr-2">
                    • Energy Efficiency:
                  </span>
                  <span>
                    Optimized shrink tunnels that maintain consistent
                    temperatures while minimizing power consumption.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 shrink-0 mr-2">
                    • Heavy-Duty Build:
                  </span>
                  <span>
                    Constructed with high-grade stainless steel or powder-coated
                    mild steel for long-term industrial use.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-medium text-slate-900 shrink-0 mr-2">
                    • User-Friendly Interface:
                  </span>
                  <span>
                    Simple controls that require minimal operator training,
                    allowing your team to get up to speed in minutes.
                  </span>
                </li>
              </ul>
            </div>

            {/* SEMI-AUTOMATIC SHRINK WRAPPING'S BENEFITS SECTION */}
            <div className="border-b border-dashed border-slate-300 pb-10">
              <h3 className="text-[16px] sm:text-xl font-bold text-slate-900 tracking-tight mb-4">
                Semi-Automatic Shrink Wrapping’s Benefits
              </h3>

              <p className="text-slate-600 text-[16px] mb-6 leading-relaxed">
                A fully automated system is an expensive and possibly
                unnecessary investment for many businesses. On the other hand,
                wrapping by hand is too slow. The semi-automatic shrink wrapping
                machine excels in this situation.
              </p>

              <div className="space-y-6 text-slate-700 text-[16px]">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    1. Economical
                  </h4>

                  <p className="text-slate-600">
                    Compared to fully automated lines, semi-automatic machines
                    are significantly less expensive to start. They enable SMEs
                    to produce packaging of a professional caliber without
                    requiring a large capital investment.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    2. Increased Adaptability
                  </h4>

                  <p className="text-slate-600">
                    Semi-automatic models from Vpack Machine are very
                    adjustable, in contrast to fully automatic systems that are
                    frequently “set and forget” for a single product size. You
                    can easily transition between various product dimensions
                    (boxes, bottles, or bundles).
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    3. Enhanced Throughput
                  </h4>

                  <p className="text-slate-600">
                    A semi-automatic machine can effortlessly process packages
                    efficiently, whereas a manual operator might find it
                    difficult to keep up with high demands.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    4. Better Protection for Products
                  </h4>

                  <p className="text-slate-600">
                    During transportation, shrink wrapping shields your products
                    from moisture, dust, and tampering. Your product will be
                    delivered to the customer in perfect condition thanks to
                    Vpack technology’s tight, expert seal.
                  </p>
                </div>
              </div>
            </div>

            {/* CONCLUSION SECTION */}
            <div className="border-b border-dashed border-slate-300 pb-10">
              <h3 className="text-[16px] sm:text-xl font-bold text-slate-900 tracking-tight mb-4">
                In conclusion, connect with Vpack Machine today.
              </h3>

              <p className="text-slate-600 text-[16px] mb-4 leading-relaxed">
                Purchasing a high-quality machine from a reputable manufacturer
                of semi-automatic shrink wrapping machines is an investment in
                the future of your company. Vpack Machine creates long-lasting
                packaging solutions by fusing cutting-edge technology with
                regional knowledge.
              </p>

              <p className="text-slate-600 text-[16px] leading-relaxed">
                Are you prepared to improve your packaging procedure? For a
                personalized quote or a live demonstration of our most recent
                semi-automatic shrink wrapping options, get in touch with Vpack
                Machine right now!
              </p>
            </div>

            {/* CALL TO ACTION BANNER */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-rose-500/20 rounded-xl text-rose-400">
                  <PhoneCall className="w-6 h-6 animate-pulse" />
                </div>

                <h3 className="text-[16px] sm:text-2xl font-bold tracking-tight">
                  Ready to Transform Your Line? Let's Talk!
                </h3>
              </div>

              <p className="text-slate-300 text-[16px] mb-8 max-w-2xl">
                Call us today to discover how our shrink wrapping solutions can
                elevate your production game.
              </p>

              <motion.a
                href="tel:+919135636541"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-orange-500 rounded-xl text-slate-900 font-medium bg-white hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-lg group text-[16px]"
              >
                <span>Call Now</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* FAQ SECTION */}
            <div className="bg-white py-10 px-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                FAQs
              </h2>

              <div className="space-y-6 max-w-3xl mx-auto text-gray-800">
                {/* Q1 */}
                <div>
                  <h3 className="font-semibold text-lg">
                    1. What is the difference between manual and semi-automatic
                    shrink wrapping machines?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    A manual machine requires the operator to apply the film and
                    use a heat gun or hand-operated sealer. In a{" "}
                    <span className="font-semibold italic">
                      semi-automatic machine
                    </span>
                    , the operator places the product into the film, but the
                    machine handles the sealing and conveying into the shrink
                    tunnel automatically. This ensures more consistent tension
                    and faster production.
                  </p>
                </div>

                {/* Q2 */}
                <div>
                  <h3 className="font-semibold text-lg">
                    2. Which type of shrink film should I use with Vpack
                    machines?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    Most Vpack semi-automatic machines are compatible with
                    <span className="font-semibold"> POF (Polyolefin)</span>,
                    <span className="font-semibold"> PVC</span>, and
                    <span className="font-semibold">
                      {" "}
                      PE (Polyethylene)
                    </span>{" "}
                    films. POF is preferred for retail products due to its
                    clarity, while PE is ideal for heavy-duty bundling (like
                    water bottle cases).
                  </p>
                </div>

                {/* Q3 */}
                <div>
                  <h3 className="font-semibold text-lg">
                    3. How many products can a semi-automatic machine wrap per
                    hour?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    On average, a semi-automatic system can wrap between
                    <span className="font-semibold">
                      {" "}
                      400 to 900 units per hour
                    </span>
                    , depending on the operator’s speed and the size of the
                    product. This makes it ideal for medium-scale production
                    environments.
                  </p>
                </div>

                {/* Q4 */}
                <div>
                  <h3 className="font-semibold text-lg">
                    4. Does a semi-automatic shrink wrapping machine require
                    high maintenance?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    No. One of the main advantages of choosing a manufacturer
                    like
                    <span className="font-semibold"> Vpack Machine</span> is the
                    simplicity of the design. Regular cleaning of the sealing
                    blade and occasional checks on the conveyor belt and heating
                    elements are usually all that is needed to keep the machine
                    running for years.
                  </p>
                </div>

                {/* Q5 */}
                <div>
                  <h3 className="font-semibold text-lg">
                    5. What is the price range for a semi-automatic shrink
                    wrapping machine?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    Prices vary based on the tunnel size and sealing width.
                    Generally, semi-automatic models are a middle-ground
                    investment, costing significantly less than fully automated
                    systems while providing a rapid
                    <span className="font-semibold">
                      {" "}
                      Return on Investment (ROI)
                    </span>{" "}
                    through labor savings and material efficiency.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
