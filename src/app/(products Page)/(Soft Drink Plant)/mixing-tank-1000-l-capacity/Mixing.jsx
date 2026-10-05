"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function MixingTankPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 text-[16px] lg:text-[18px]">
      {/* 1. Header Banner */}
      <section className="w-full bg-slate-200 py-6 md:py-10 px-4 md:px-12 border-b border-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="w-full flex items-center justify-center text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-center leading-tight sm:leading-normal h-auto min-h-[80px] md:min-h-[110px] flex items-center justify-center">
              <span className="text-slate-900 block sm:inline">
                Mixing Tank –{" "}
              </span>
              <span className="text-blue-500 block sm:inline">
                1000 L Capacity
              </span>
            </h1>
          </motion.div>
        </div>
      </section>
      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Left & Middle Columns: Product Details */}
        <div className="lg:col-span-2 space-y-8 md:space-y-10">
          {/* Title & Rating */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-violet-600 text-3xl">🌀</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                VPACK Mixing Tank
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
            className="space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Description
            </h3>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Designed for precision and performance, the{" "}
              <strong className="text-slate-900">VPACK Mixing Tank</strong> is
              your go-to solution for seamless and efficient blending across a
              variety of industrial applications. Built from premium stainless
              steel and equipped with essential features like mixing blades,
              control panels, and safety guards, this machine is ideal for
              producing{" "}
              <strong className="text-slate-900">homogeneous mixtures</strong>{" "}
              in food, beverages, chemicals, and more.
            </p>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Whether you’re mixing syrups, flavors, or other liquid
              ingredients, VPACK’s automated blending machine ensures
              consistency, hygiene, and durability – batch after batch.
            </p>
          </motion.section>

          {/* Product Highlights Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Product Highlights
              </h3>
            </div>
            <ul className="space-y-3 text-[16px] lg:text-[18px] text-slate-700">
              <li>
                <strong className="text-slate-900">
                  • 🧪 Blending Capacity:
                </strong>{" "}
                1000 liters – ideal for medium to large batches.
              </li>
              <li>
                <strong className="text-slate-900">• 🧳 Fully Equipped:</strong>{" "}
                Comes with{" "}
                <strong className="text-slate-900">mixing blades</strong>,{" "}
                <strong className="text-slate-900">control panel</strong>, and{" "}
                <strong className="text-slate-900">safety guards</strong> for
                safe, smooth operation.
              </li>
              <li>
                <strong className="text-slate-900">• 🤍 Built to Last:</strong>{" "}
                Made from high-grade{" "}
                <strong className="text-slate-900">stainless steel</strong>,
                ensuring long-term durability and easy cleaning.
              </li>
              <li>
                <strong className="text-slate-900">
                  • ⚙️ Automated & Efficient:
                </strong>{" "}
                Designed with{" "}
                <strong className="text-slate-900">automatic controls</strong>{" "}
                and{" "}
                <strong className="text-slate-900">
                  low energy consumption
                </strong>{" "}
                to optimize production.
              </li>
              <li>
                <strong className="text-slate-900">• 🛠️ Customizable:</strong>{" "}
                We tailor the tank’s capacity and features to your process
                needs.
              </li>
            </ul>
          </motion.section>

          <hr className="border-dashed border-slate-300" />

          {/* Detailed Specifications */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">📊</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Detailed Specifications
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-3 text-[16px] lg:text-[18px] text-slate-700">
              <li>
                <strong className="text-slate-900">• Blending Capacity:</strong>{" "}
                1000 Liters
              </li>
              <li>
                <strong className="text-slate-900">• Type:</strong> Blending
                Machine / Mixing Tank
              </li>
              <li>
                <strong className="text-slate-900">• Material:</strong>{" "}
                Stainless Steel (SS)
              </li>
              <li>
                <strong className="text-slate-900">• Automation Grade:</strong>{" "}
                Automatic
              </li>
              <li>
                <strong className="text-slate-900">
                  • Accessories Included:
                </strong>{" "}
                Mixing Blades, Control Panel, Safety Guards
              </li>
              <li>
                <strong className="text-slate-900">• Power Consumption:</strong>{" "}
                Low Energy Consumption
              </li>
              <li>
                <strong className="text-slate-900">• Capacity:</strong>{" "}
                Customizable to your requirement
              </li>
              <li>
                <strong className="text-slate-900">• Installation Type:</strong>{" "}
                On-site installation available
              </li>
              <li>
                <strong className="text-slate-900">• Certifications:</strong>{" "}
                ISO 9001 Certified
              </li>
              <li>
                <strong className="text-slate-900">• Brand:</strong> VPACK
              </li>
              <li>
                <strong className="text-slate-900">• Customization:</strong> Yes
                – design and features can be customized based on application
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-orange-500 text-slate-800 hover:bg-orange-50 font-medium px-6 py-2.5 rounded-lg shadow-xs transition-all text-[16px] lg:text-[18px]"
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
            className="space-y-3 pt-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧳</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Ideal For
              </h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-[16px] lg:text-[18px] text-slate-700">
              <li>Beverage processing units</li>
              <li>Syrup and flavor blending</li>
              <li>Cosmetic & pharmaceutical mixing</li>
              <li>Chemical and industrial blending applications</li>
            </ul>
          </motion.section>

          {/* Why Choose VPACK Mixing Tank Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4 pt-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧠</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Why Choose VPACK Mixing Tank?
              </h3>
            </div>
            <ul className="space-y-3 text-[16px] lg:text-[18px] text-slate-700">
              <li className="flex items-center gap-2">
                <span>✔</span> Sturdy stainless steel construction for longevity
              </li>
              <li className="flex items-center gap-2">
                <span>✔</span> Consistent mixing with minimal energy usage
              </li>
              <li className="flex items-center gap-2">
                <span>✔</span> Fully automatic for user convenience
              </li>
              <li className="flex items-center gap-2">
                <span>✔</span> Easy to clean, operate, and maintain
              </li>
              <li className="flex items-center gap-2">
                <span>✔</span> Tailored capacity and features for your process
              </li>
              <li className="flex items-center gap-2">
                <span>✔</span> Backed by ISO 9001 certification for quality
                assurance
              </li>
            </ul>
          </motion.section>

          {/* Ready to Elevate Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4 pt-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">📦</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Ready to Elevate Your Mixing Process?
              </h3>
            </div>
            <p className="text-[16px] lg:text-[18px] text-slate-600">
              Get in touch to customize your blending tank and streamline your
              production with VPACK’s trusted engineering.
            </p>
            <div>
              <a
                href="tel:+919135636541"
                className="inline-flex items-center gap-2 border border-orange-500 text-slate-800 hover:bg-orange-50 font-medium px-6 py-2.5 rounded-lg shadow-xs transition-all text-[16px] lg:text-[18px]"
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
              <span className="text-2xl">🚀</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Boost Your Production with Confidence
              </h3>
            </div>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed mb-8">
              • Our Machines combine{" "}
              <strong className="text-slate-900">innovation</strong>,{" "}
              <strong className="text-slate-900">efficiency</strong>, and{" "}
              <strong className="text-slate-900">reliability</strong> — giving
              your operations the edge they need. Trusted by hundreds of happy
              clients, Vpack Products are more than just machinery — they’re a{" "}
              <strong className="text-slate-900">promise of quality</strong>.
            </p>
            {/* FAQ Component */}
            <FAQ />
          </motion.section>
        </div>

        {/* Right Column: Sticky Product Card Sidebar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-6 bg-white border border-slate-200 rounded-2xl p-5 shadow-lg space-y-5"
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
                src="/images/products/engineer.png"
                alt="VPACK Mixing Tank 1000L"
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
                Engineered for Perfect Blends
              </h4>
              <p className="text-[16px] lg:text-[18px] font-medium text-slate-500 mt-1">
                Where Precision Meets Performance
              </p>
            </div>

            {/* Sidebar Description */}
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              In industries where{" "}
              <strong className="text-slate-900">blending accuracy</strong> is
              non-negotiable, the{" "}
              <strong className="text-slate-900">VPACK Mixing Tank</strong>{" "}
              delivers seamless mixing performance with{" "}
              <strong className="text-slate-900">
                hygienic design and robust construction
              </strong>
              . Made from food-grade{" "}
              <strong className="text-slate-900">stainless steel</strong> and
              integrated with essential features like{" "}
              <strong className="text-slate-900">
                mixing blades and digital control panels
              </strong>
              , this automatic blending system ensures optimal consistency every
              single time.
            </p>

            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Whether you’re formulating beverages, cosmetics, pharmaceuticals,
              or chemicals — this tank is your partner for{" "}
              <strong className="text-slate-900">
                uniform, contamination-free, and energy-efficient blending
              </strong>
              .
            </p>

            {/* Call Now Button */}
            <div className="pt-2">
              <a
                href="tel:+919135636541"
                className="w-full inline-flex items-center justify-center gap-2 border border-orange-500 text-slate-800 hover:bg-orange-50 font-medium px-6 py-3 rounded-lg shadow-xs transition-all text-[16px] lg:text-[18px]"
              >
                Call Now <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
