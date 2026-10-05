"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LiquidFillingPlantManufacturerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Top Banner Header */}
      <div className="w-full bg-gray-200 py-12 md:py-16 text-center shadow-inner">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800"
        >
          <Link href="/" className="hover:underline">
            Liquid Filling Plant
          </Link>{" "}
          <Link href="/contact" className="text-blue-500 hover:underline">
            Manufacturer
          </Link>
        </motion.h1>
      </div>

      {/* Main Container */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-6xl mx-auto px-4 py-10 text-base lg:text-lg leading-relaxed"
      >
        {/* Top Grid Section: Product Card & Specifications Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          {/* Product Card (Left) */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-lg shadow-sm p-5">
            <div className="relative w-full h-[300px] mb-4">
              <Image
                src="/images/blog/liquid.png"
                alt="Liquid Filling Plant Machine"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-contain md:object-cover rounded-md"
                priority
              />
            </div>

            {/* Star Rating */}
            <div className="flex text-amber-400 mb-2 space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="bg-green-100 text-green-600 px-1.5 py-0.5 rounded text-sm">
                ✅
              </span>
              Liquid Filling Plant Machine
            </h2>

            <p className="text-sm md:text-base text-gray-600 mb-6">
              We are the importers and suppliers of premium quality of Mini
              Liquid Filling Machine Double Nozzel
            </p>

            <a
              href="tel:+919135636541"
              className="border border-orange-500 text-slate-800 hover:bg-orange-500 hover:text-white transition-colors duration-200 font-medium px-6 py-2.5 rounded inline-flex items-center gap-2 text-sm shadow-sm"
            >
              Call Now <span>→</span>
            </a>
          </div>

          {/* Specifications Table & Title (Right) */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Liquid Filling Plant Manufacturer in Delhi
            </h2>

            <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
              <table className="w-full border-collapse text-left text-base">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3.5 font-semibold bg-gray-50 text-gray-800 w-1/3 border-r border-gray-200">
                      Model
                    </td>
                    <td className="p-3.5 text-gray-700">SP MLF D</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-100">
                    <td className="p-3.5 font-semibold text-gray-800 border-r border-gray-200">
                      Voltage Power
                    </td>
                    <td className="p-3.5 text-gray-700">
                      110V - 220V / 50 - 60 Hz 40W
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3.5 font-semibold bg-gray-50 text-gray-800 border-r border-gray-200">
                      Maximum Runoff
                    </td>
                    <td className="p-3.5 text-gray-700">2000ml/M (Water)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-100">
                    <td className="p-3.5 font-semibold text-gray-800 border-r border-gray-200">
                      Filling Range
                    </td>
                    <td className="p-3.5 text-gray-700">5 ml - 1000ml</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3.5 font-semibold bg-gray-50 text-gray-800 border-r border-gray-200">
                      Optimal Filling Range
                    </td>
                    <td className="p-3.5 text-gray-700">5 ml - 1000ml</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-3.5 font-semibold text-gray-800 border-r border-gray-200">
                      Filling Precision
                    </td>
                    <td className="p-3.5 text-gray-700">± 2%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Section 1 */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Liquid Filling Plant Manufacturer in Delhi – Efficient & Hygienic
            Filling Solutions
          </h2>
          <p className="mb-4">
            The demand for packaged liquid products such as water, beverages,
            oils, chemicals, and pharmaceutical liquids is continuously
            increasing across different industries. To meet this demand,
            manufacturers require accurate, hygienic, and reliable filling
            systems. Choosing a trusted{" "}
            <Link
              href="/contact"
              className="text-blue-600 font-medium hover:underline"
            >
              Liquid Filling Plant Manufacturer in Delhi
            </Link>{" "}
            is essential for businesses that want consistent quality and
            long-term operational performance.
          </p>
          <p className="mb-6">
            Vpack Machine creates and provides liquid filling plants which
            enable businesses to automate their filling operations. The plants
            are designed to process multiple liquid products while upholding
            hygiene requirements and operational efficiency standards.
          </p>

          <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
            Introduction of Liquid Filling Plant
          </h3>
          <p className="mb-4">
            A liquid filling plant functions as an integrated system which fills
            bottles and containers with liquid products at controlled volume
            measurements. The system generally includes storage tanks,
            filtration units, filling machines, conveyors, and control panels.
            The system needs all parts to function together because their
            combined work produces operational efficiency and dependable
            production results.
          </p>
          <p className="mb-3 font-medium">
            Liquid filling plants are widely used in industries such as the
            following:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Drinking water and beverages</li>
            <li>Food and edible oil processing</li>
            <li>Pharmaceutical and cosmetic production</li>
            <li>Chemical and industrial liquid packaging</li>
          </ul>
          <p className="mb-6">
            A reliable Liquid Filling Plant Manufacturer in Delhi focuses on
            designing plants that suit different product types and container
            sizes.
          </p>
        </motion.section>

        {/* Advanced Design and Material Quality */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Advanced Design and Material Quality
          </h2>
          <p className="mb-4">
            Vpack Machine produces liquid filling plants, which they construct
            with food-grade stainless steel materials that include SS 304 and SS
            316 to ensure hygienic operations and prevent equipment corrosion.
            The entire filling procedure maintains safety because liquid
            products stay protected from any potential contamination risks.
          </p>
          <p className="mb-6">
            The plant design minimizes manual handling and reduces the risk of
            spillage or contamination. The facility contains smooth surface
            finishes and easy-to-clean structures which enable staff to perform
            regular sanitation and maintenance work.
          </p>
        </motion.section>

        {/* Automation and Efficiency in Operations */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Automation and Efficiency in Operations
          </h2>
          <p className="mb-4">
            Automated control systems in modern liquid filling plants operate by
            monitoring essential operational parameters, which include flow rate
            and filling level and pressure. Automation helps reduce human error
            and ensures uniform filling accuracy in every container.
          </p>
          <p className="mb-6">
            Energy-efficient motors and pumps are used to lower power
            consumption while maintaining high performance. The system operates
            continuously with minimal downtime, which makes it suitable for
            production environments of both small-scale and large-scale
            operations.
          </p>
        </motion.section>

        {/* Flexible Capacity and Customization Options */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Flexible Capacity and Customization Options
          </h2>
          <p className="mb-4">
            As a professional liquid filling plant manufacturer in Delhi, Vpack
            Machine offers solutions for different production capacities. Plants
            can be designed for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Small-scale production units for startups</li>
            <li>Medium-capacity plants for regional suppliers</li>
            <li>High-capacity automated plants for large manufacturers</li>
          </ul>
          <p className="mb-6">
            Customization options are available based on bottle size, filling
            volume, type of liquid, and production speed. This flexibility
            allows businesses to expand their operations as market demand grows.
          </p>
        </motion.section>

        {/* Installation, Training, and Technical Support */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Installation, Training, and Technical Support
          </h2>
          <p className="mb-4">
            A liquid filling plant needs both correct installation work and
            complete operator training work to achieve its full operational
            efficiency. Vpack Machine provides installation services, which
            include commissioning support together with operator training to
            educate customers about system operation and maintenance procedures.
          </p>
          <p className="mb-6">
            Technical support teams assist with troubleshooting and routine
            guidance, ensuring that the plant operates smoothly over time. This
            structured support helps businesses maintain stable production
            without frequent interruptions.
          </p>
        </motion.section>

        {/* Long-Term Reliability and Industry Compliance */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Long-Term Reliability and Industry Compliance
          </h2>
          <p className="mb-4">
            Liquid filling plants must follow quality and safety standards to
            protect product integrity and consumer health. Proper filtration,
            hygienic filling processes, and automated monitoring systems play a
            key role in compliance.
          </p>
          <p className="mb-6">
            With regular maintenance and proper operation, a liquid filling
            plant can function efficiently for many years. Durable construction,
            advanced technology, and reliable components contribute to long-term
            performance and cost-effective operation.
          </p>
        </motion.section>

        {/* Conclusion */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Conclusion
          </h2>
          <p className="mb-4">
            Businesses that package liquids must choose a reliable liquid
            filling plant manufacturer in Delhi because it represents a critical
            business decision. The operation of a liquid filling plant achieves
            precise filling results while maintaining hygienic conditions and
            delivering consistent production capacity.
          </p>
          <p className="mb-6">
            By combining modern technology, quality materials, and structured
            technical support,{" "}
            <Link
              href="/contact"
              className="text-blue-600 font-medium hover:underline"
            >
              Vpack Machine
            </Link>{" "}
            provides liquid-filling plant solutions that help businesses achieve
            consistent performance and long-term reliability in their production
            processes.
          </p>
        </motion.section>

        {/* FAQs */}
        <motion.section variants={fadeIn} className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
            FAQs
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                1. What does a Liquid Filling Plant Manufacturer in Delhi
                provide?
              </h3>
              <p>
                A liquid filling plant manufacturer in Delhi provides complete
                filling solutions including storage tanks, filling machines,
                conveyors, control systems, and installation support for
                different liquid products.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                2. Which industries can use a liquid filling plant?
              </h3>
              <p>
                Liquid filling plants are used in drinking water, beverages,
                edible oils, pharmaceuticals, cosmetics, and chemical industries
                for accurate and hygienic liquid packaging.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                3. Is automation available in liquid filling plants?
              </h3>
              <p>
                Yes, modern liquid filling plants operate with automated control
                systems that ensure consistent filling accuracy, reduce manual
                errors, and improve production efficiency.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                4. Can a liquid filling plant be customized for different bottle
                sizes?
              </h3>
              <p>
                Yes, liquid filling plants can be customized based on bottle
                size, filling volume, and production capacity to meet specific
                business requirements.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                5. How long does a liquid filling plant last with proper
                maintenance?
              </h3>
              <p>
                With regular maintenance and quality components, a liquid
                filling plant can operate efficiently for 10 to 15 years or
                more.
              </p>
            </div>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
}
