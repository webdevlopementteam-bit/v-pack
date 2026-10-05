"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";

export default function FruitPulperPage() {
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
      {/* Top Hero Banner - Height 80px on mobile, 110px on md+ */}
      <div className="bg-[#dbe3eb] px-4 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2 min-h-[80px] md:min-h-[140px]">
          <span className="text-3xl lg:text-4xl">🍑</span>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] tracking-wide uppercase">
            FRUIT PULPER MACHINE
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
                  src="/images/products/fruit.png"
                  alt="Fruit Pulper Machine"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Stars */}
            <div className="flex text-amber-400 text-xl md:text-2xl">★★★★★</div>

            {/* Product Heading */}
            <h3 className="text-xl lg:text-2xl font-bold text-[#0B2545]">
              Efficient pulp extraction with hygienic design
            </h3>

            {/* Product Short Description */}
            <p className="text-gray-600 text-[15px] sm:text-[16px] lg:text-[17px]">
              The Semi-Automatic Fruit Pulper delivers smooth separation of
              seeds and skin from fruit pulp, ensuring quality output for juice
              and puree production.
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
                The Fruit Pulper Machine
              </h1>
              <div className="flex text-orange-500 text-xl md:text-2xl">
                ★★★★★
              </div>
            </div>

            <hr className="border-dashed border-gray-200 my-4" />

            {/* Description Section */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                Description
              </h2>

              <p className="text-gray-600">
                The{" "}
                <strong className="text-gray-800">Fruit Pulper Machine</strong>{" "}
                is engineered for extracting pulp from various fruits such as{" "}
                <strong className="text-gray-800">
                  mango, tomato, guava, papaya, and more
                </strong>
                , making it an essential piece of equipment for any fruit
                processing line. The machine operates using a{" "}
                <strong className="text-gray-800">
                  high-speed blade and sieve system
                </strong>{" "}
                that effectively separates seeds and peels from the fruit pulp,
                delivering a smooth and uniform product.
              </p>

              <p className="text-gray-600">
                Made from{" "}
                <strong className="text-gray-800">
                  food-grade stainless steel (SS 304)
                </strong>
                , the machine is not only hygienic but also{" "}
                <strong className="text-gray-800">
                  easy to maintain and clean
                </strong>
                , thanks to its modular design. With its{" "}
                <strong className="text-gray-800">
                  semi-automatic function
                </strong>
                , it strikes the right balance between manual control and
                efficiency, offering reliable operation for medium-scale units.
              </p>

              <p className="text-gray-600">
                Perfect for businesses aiming to{" "}
                <strong className="text-gray-800">
                  maximize pulp output with minimal waste
                </strong>
                , the pulper machine is also{" "}
                <strong className="text-gray-800">eco-friendly</strong> and
                power-efficient. Whether you’re running a juice line, sauce
                bottling plant, or pulp packaging unit, this machine ensures
                consistent quality and long-lasting performance.
              </p>
            </div>

            <hr className="border-dashed border-gray-200 my-6" />

            {/* Technical Specifications Section */}
            <div className="space-y-4 pt-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>⚙️</span> Technical Specifications
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>
                  <strong className="text-gray-800">Product Type:</strong>{" "}
                  Semi-Automatic Fruit Pulper Machine
                </li>
                <li>
                  <strong className="text-gray-800">Material:</strong> Stainless
                  Steel (SS 304)
                </li>
                <li>
                  <strong className="text-gray-800">Automation Grade:</strong>{" "}
                  Semi-Automatic
                </li>
                <li>
                  <strong className="text-gray-800">Voltage:</strong> 220–440
                  Volts (v)
                </li>
                <li>
                  <strong className="text-gray-800">Feature:</strong>{" "}
                  Eco-Friendly
                </li>
                <li>
                  <strong className="text-gray-800">Warranty:</strong> Yes
                </li>
              </ul>
            </div>

            {/* Performance Highlights Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>⚙️</span> Performance Highlights:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>High-speed rotating sieve and blade mechanism</li>
                <li>Efficient separation of skin, seeds, and pulp</li>
                <li>Built from durable, food-grade SS 304 stainless steel</li>
                <li>Easy to disassemble and clean</li>
                <li>Minimal pulp wastage and high output yield</li>
                <li>Suitable for batch and semi-continuous operations</li>
              </ul>

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
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>🏭</span> Ideal For
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>Juice and beverage processing plants</li>
                <li>Fruit pulp and purée manufacturers</li>
                <li>Tomato ketchup and sauce production units</li>
                <li>Small and medium-scale food industries</li>
                <li>Fruit-based dessert and jam producers</li>
                <li>Canning and bottling facilities</li>
              </ul>
            </div>

            {/* Ready to Transform Your Line? Section */}
            <div className="space-y-3 pt-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>📞</span> Ready to Transform Your Line? Let's Talk!
              </h2>
              <p className="text-gray-600">
                Call us today to discover how the{" "}
                <strong className="text-gray-800">Fruit Pulper Machine</strong>{" "}
                can streamline your pulp production process.
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
                With reliable operation and hygienic performance, the{" "}
                <strong className="text-gray-800">Fruit Pulper Machine</strong>{" "}
                delivers consistent results you can count on.
              </p>
            </div>

            {/* Engineered for Excellence Section */}
            <div className="space-y-3 pt-4 pb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] flex items-center gap-2">
                <span>🎯</span> Engineered for Excellence. Built for You.
              </h2>
              <p className="text-gray-600">
                Designed for hygiene, built for durability — this machine brings
                efficiency to every batch.
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

            <hr className="border-dashed border-gray-300 my-8" />
            <FAQ />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
