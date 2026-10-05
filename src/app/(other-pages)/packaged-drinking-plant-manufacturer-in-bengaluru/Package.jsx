"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Phone, FileText, CheckCircle2 } from "lucide-react";

export default function PackagedDrinkingWaterPlantPage() {
  // Animation variants for left and right columns
  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bannerVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans text-base lg:text-lg">
      {}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={bannerVariant}
        className="w-full bg-[#E4E7EB] border-b border-gray-300 flex items-center justify-center px-4 min-h-[120px] md:min-h-[140px]"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-[#1A2E40] text-center tracking-tight">
          Packaged Drinking <span className="text-blue-600">Water Plant</span>
        </h1>
      </motion.div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Upper Section: Product Image Card & Specification Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Product Image & Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={leftVariant}
            className="lg:col-span-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
          >
            <div className="relative w-full h-[280px] sm:h-[340px] rounded-xl overflow-hidden mb-4 bg-gray-100">
              <Image
                src="/images/products/packaged.webp"
                alt="VPACK Packaged Drinking Water Plant"
                fill
                className="object-cover rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-[#1A2E40] mb-4">
              VPACK Packaged Drinking Water Plant
            </h2>

            {/* Call / Quote Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+919135636541"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm text-base"
              >
                <Phone className="w-5 h-5" />
                Call Now (+91 9135636541)
              </a>
              <Link
                href="/contact"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#1A2E40] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors border border-gray-300 text-base"
              >
                <FileText className="w-5 h-5" />
                Request a Quote
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Title, Ratings & Technical Specifications Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rightVariant}
            className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#1A2E40] leading-snug mb-2">
              Packaged Drinking Water Plant Manufacturer in Bengaluru
            </h2>

            {/* Star Rating Icons */}
            <div className="flex items-center gap-1 mb-6 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Specifications Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-left text-base">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-3 px-4 font-bold text-[#1A2E40] border-r border-gray-200 w-2/5 text-center">
                      Technical Specifications
                    </th>
                    <th className="py-3 px-4 font-bold text-[#1A2E40] text-center">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-gray-700 border-r border-gray-200">
                      Capacity
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Customizable from 500 LPH to 20,000 LPH
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-gray-700 border-r border-gray-200">
                      Processes
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Sand & Carbon Filtration, Micron Filtration, Reverse
                      Osmosis (RO), UV Sterilization & Ozonation
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-gray-700 border-r border-gray-200">
                      Material
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Stainless Steel (SS304 / SS316)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-gray-700 border-r border-gray-200">
                      Automation
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Semi-Automatic or Fully Automatic
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-gray-700 border-r border-gray-200">
                      Power Requirement
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      5–20 HP (depends on capacity)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-gray-700 border-r border-gray-200">
                      Bottle Sizes
                    </td>
                    <td className="py-3 px-4 text-gray-600">200 ml to 20 L</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-gray-700 border-r border-gray-200">
                      Compliance
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      BIS & FSSAI Certified
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-gray-700 border-r border-gray-200">
                      Add-ons
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      Filling, capping, labeling, and packaging machines
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[#1A2E40] mb-4">
            Packaged Drinking Plant Manufacturer in Bengaluru
          </h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            A{" "}
            <strong className="font-bold text-gray-900">
              Packaged Drinking Water Plant
            </strong>{" "}
            is a complete system designed to purify, process, and pack safe
            drinking water in bottles or jars. It includes advanced water
            treatment technologies such as sand filtration, carbon filtration,
            RO purification, UV sterilization, and ozone treatment. If you are
            planning to start a bottled water business, choosing a reliable{" "}
            <Link
              href="/packaged-drinking-plant-manufacturer-in-bengaluru"
              className="text-blue-600  font-medium"
            >
              Packaged Drinking Plant Manufacturer in Bengaluru
            </Link>{" "}
            is the first and most important step.
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Bengaluru is a rapidly growing city with high demand for clean and
            hygienic drinking water in homes, offices, hotels, hospitals, and
            industries. A modern packaged drinking water plant ensures water
            quality as per BIS standards and delivers consistent production
            output. The system removes impurities, dissolved salts, bacteria,
            and harmful contaminants to provide safe and fresh drinking water.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#1A2E40] mb-4">
            Main Components of Packaged Drinking Water Plant
          </h3>

          <ul className="space-y-2 mb-6 text-gray-700 list-disc pl-5">
            <li>Raw water storage tank</li>
            <li>Multi-grade sand filter</li>
            <li>Activated carbon filter</li>
            <li>Reverse Osmosis (RO) system</li>
            <li>UV and ozone sterilization system</li>
            <li>Bottle rinsing, filling, and capping machine</li>
          </ul>

          <p className="mb-4 text-gray-700 leading-relaxed">
            These plants are available in different capacities like 250 LPH, 500
            LPH, 1000 LPH, and higher, depending on your production
            requirements. The entire system is built using high-quality
            stainless steel to ensure durability, hygiene, and long service
            life. Automation reduces manual labor and increases production
            efficiency.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            When selecting a{" "}
            <Link href="/" className="text-blue-600  font-medium">
              Packaged Drinking Plant Manufacturer in Bengaluru
            </Link>
            , you should consider factors such as product quality, customization
            options, installation support, training, and after-sales service. A
            trusted manufacturer will guide you from plant design and layout
            planning to final commissioning.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            <Link href="/" className="text-blue-600  font-medium">
              Vpack machine
            </Link>{" "}
            is known for delivering high-performance packaged drinking water
            plants with advanced technology and reliable build quality. The
            company provides cost-effective and energy-efficient solutions
            suitable for startups and large-scale businesses. With strong
            technical support and timely service, Vpack machine ensures smooth
            plant operation and long-term productivity.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Investing in a quality Packaged Drinking Water Plant not only
            improves product purity but also increases your brand value in the
            competitive market. Choosing the right manufacturer in Bengaluru
            will help you build a successful and profitable water bottling
            business.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
