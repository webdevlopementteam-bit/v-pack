"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LiquidFillingPlantPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Top Hero Banner */}
      <div className="w-full bg-slate-200 flex items-center justify-center px-4 min-h-[100px] md:min-h-[140px]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-slate-900 text-center"
        >
          Liquid Filling Plant{" "}
          <span className="text-blue-500">Manufacturer</span>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Main Section: Left & Right split with Framer Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Part (Moves Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
          >
            <div className="relative w-full h-[320px] mb-4">
              <Image
                src="/images/blog/liquid.png"
                alt="Liquid Filling Plant Machine"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-contain rounded-md"
                priority
              />
            </div>

            <div className="flex items-center gap-1 text-yellow-400 mb-3 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-green-600">✅</span> Liquid Filling Plant
              Machine
            </h2>

            <p className="text-[16px] lg:text-[18px] text-gray-600 mb-6">
              We are the importers and suppliers of premium quality of Mini
              Liquid Filling Machine Double Nozzel
            </p>

            <a
              href="tel:+919135636541"
              className="inline-flex items-center justify-center w-full bg-white border border-orange-500 text-orange-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-orange-50 transition-colors"
            >
              Call Now <span className="ml-2">→</span>
            </a>
          </motion.div>

          {/* Right Part (Moves Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Liquid filling plant manufacturer in Haryana
            </h2>

            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-3 text-[16px] lg:text-[18px] font-bold text-gray-700 w-1/3">
                      Model
                    </th>
                    <th className="p-3 text-[16px] lg:text-[18px] font-bold text-gray-700 w-2/3">
                      SP MLF D
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-[16px] lg:text-[18px]">
                  <tr>
                    <td className="p-3 text-gray-600 font-medium bg-gray-50/50">
                      Voltage Power
                    </td>
                    <td className="p-3 text-gray-800">
                      110V - 220V / 50 - 60 Hz 40W
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Maximum Runoff</td>
                    <td className="p-3 text-gray-800">2000ml/M (Water)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600 font-medium bg-gray-50/50">
                      Filling Range
                    </td>
                    <td className="p-3 text-gray-800">5 ml - 1000ml</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Optimal Filling Range</td>
                    <td className="p-3 text-gray-800">5 ml - 1000ml</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600 font-medium bg-gray-50/50">
                      Filling Precision
                    </td>
                    <td className="p-3 text-gray-800">± 2%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Detailed Description Content Section */}
        <div className="mt-12 space-y-6 text-[16px] lg:text-[18px] text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Liquid Filling Plant Manufacturer in Haryana for Industrial
              Packaging Solutions
            </h2>
            <p>
              Haryana is one of the major manufacturing centers in North India,
              and many food processing, pharmaceutical, cosmetic, and
              chemical-based industries are flourishing in the state. If the
              production of products is on the rise in different industries, a
              proper solution for the same is required to maintain the quality
              of the products. This is where a professional{" "}
              <Link href="/contact" className="text-blue-600 ">
                Liquid filling Plant Manufacturer in Haryana
              </Link>{" "}
              is required for the business of different liquids.
            </p>
            <p className="mt-3">
              Liquid filling plant is a machine that helps different industries
              fill liquids such as edible oils, juice, syrups, chemicals, and
              pharmaceutical liquids into different bottles or containers in an
              accurate manner. Such a machine is required for the business to
              reduce the work by using the latest technology in the form of
              automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Role of Liquid Filling Machines in Modern Industries
            </h2>
            <p className="mb-3">
              In industries that work with liquids, the filling of the liquids
              into the containers is of utmost importance. A good Liquid Filling
              Plant Manufacturer in Haryana can offer machines that can work at
              higher speeds, as well as maintain the required level of purity.
            </p>
            <p>
              The automated machines for filling liquids can work well with
              different container sizes as well as the viscosity of the liquids.
              This makes the machines suitable for different industries that
              work with liquids. The companies can benefit from the automated
              machines by improving the efficiency of the operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Reliable Liquid Filling Solutions by Vpackmachine
            </h2>
            <p className="mb-3">
              In the search for reliable liquid filling solutions, industries
              have come to recognize Vpackmachine for its high-quality filling
              machines, which have been developed to cater to the current
              industrial needs of various industries. The company has been
              dedicated to providing efficient liquid filling solutions to
              support industrial activities.
            </p>
            <p>
              Vpackmachine is a company that specializes in the manufacture of
              automatic and semi-automatic liquid filling plants that can be
              used in the food, pharmaceutical, cosmetic, and chemical sectors,
              among others. The company has been able to provide quality
              machines that are equipped with advanced technology, which has
              been a great advantage to companies that have invested in
              Vpackmachine’s machines, helping them improve their output in the
              process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Conclusion
            </h2>
            <p>
              As the growth in industries in Haryana continues to rise, so does
              the need for advanced technology in packaging. Selecting a
              reliable Liquid Filling Plant Manufacturer in Haryana ensures that
              businesses operate with high efficiency and quality in products.
              With advanced technology and reliable performance,{" "}
              <Link href="/" className="text-blue-600 ">
                V-Pack Machine
              </Link>{" "}
              offers liquid filling plants to industries to help them attain
              accurate and efficient results in packaging.
            </p>
          </motion.div>
        </div>

        {/* FAQs Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            FAQs
          </h2>

          <div className="space-y-6 text-[16px] lg:text-[18px]">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                1. What is the use of a liquid filling plant?
              </h3>
              <p className="text-gray-700">
                Liquid filling plant is used for filling liquid material into
                bottles or containers correctly. Vpackmachine offers reliable
                filling machines for the industry.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                2. Which industries require liquid filling machines in Haryana?
              </h3>
              <p className="text-gray-700">
                Food, pharmaceutical, chemical, and cosmetic industries require
                filling machines. Vpackmachine offers filling machines for the
                industries.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                3. Are liquid filling machines automatic or manual?
              </h3>
              <p className="text-gray-700">
                Liquid filling machines come in both automatic and
                semi-automatic models. Vpackmachine offers both automatic and
                semi-automatic machines.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                4. Why should you choose Vpackmachine for liquid filling
                machines?
              </h3>
              <p className="text-gray-700">
                Vpackmachine offers reliable machines for filling liquid
                material.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                5. How can you select the right liquid filling plant
                manufacturer in Haryana?
              </h3>
              <p className="text-gray-700">
                Businesses can select the right manufacturer for filling
                machines based on the quality of machines, automation, and
                services offered by the company. Vpackmachine offers reliable
                machines for filling liquid material. Or you can{" "}
                <Link href="/contact" className="text-blue-600 ">
                  request a quote
                </Link>{" "}
                today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
