"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SodaPlantPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Top Hero Banner */}
      <div className="w-full bg-slate-200 flex items-center justify-center px-4 min-h-[120px] md:min-h-[140px]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-slate-900 text-center"
        >
          Soda Plant <span className="text-blue-500">Manufacturer</span>
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
                src="/images/products/soda.png"
                alt="Soda Plant"
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
              <span className="text-green-600">✅</span> Precision Carbonation{" "}
              <br />– Powered by Vpack
            </h2>

            <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wider">
              Perfect Fizz. Every Time.
            </p>

            <p className="text-[16px] lg:text-[18px] text-gray-600 mb-4">
              At <span className="font-bold">Vpack</span>, we manufacture
              high-performance{" "}
              <span className="font-bold">Carbonator Machines</span> designed to
              bring that perfect sparkle to your beverages. Whether you&apos;re
              crafting soda, sparkling water, energy drinks, or soft drinks, our
              machines ensure consistent carbonation with precision control and
              food-grade safety.
            </p>

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
              Soda Plant Manufacturer in Delhi
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
        <div className="mt-12 space-y-8 text-[16px] lg:text-[18px] text-gray-700 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Soda Plant Manufacturer in Delhi – Complete Guide to Soda Plant
              Machines
            </h2>
            <p>
              The demand for carbonated beverages and soda drinks is growing
              rapidly in India. Businesses in the beverage industry require
              reliable and high-performance machinery to meet this demand.
              Choosing the right{" "}
              <Link href="/soda-plant-manufacturer" className="text-blue-600 ">
                Soda Plant Manufacturer
              </Link>{" "}
              plays a crucial role in ensuring efficient production and high
              product quality.
            </p>
            <p className="mt-3">
              Vpack Machine makes soda plants in Delhi, known for solid
              performance in business drink making. Built using new methods,
              their gear keeps fizz levels steady while staying clean and
              running fast. Each unit pushes out big volumes without skipping
              steps during operation.
            </p>
            <p className="mt-3">
              Fresh off the drawing board or fine-tuning what’s already running,
              going with an experienced builder keeps things strong, smooth, and
              steady over time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              What is a Soda Plant Machine?
            </h2>
            <p className="mb-3">
              From bubbles to bottles, a soda machine blends water with CO₂ and
              flavoring to make fizzy drinks. Found in kitchens of big eateries,
              production lines, or drink packaging sites, they handle large
              batches daily. Instead of manual mixing, this setup automates
              combining ingredients into ready-to-serve liquids. Not just for
              colas – any carbonated beverage can come from one of these units.
            </p>
            <p>
              Starting off, modern soda facilities rely on carbonation gear
              paired with cooling setups. Then come storage containers linked
              directly to bottling equipment. Each part works alongside others
              without hiccups during output. Automation runs through every stage
              because pieces connect tightly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Why Choose a Professional Soda Plant Manufacturer?
            </h2>
            <p className="mb-4">
              Working with a reliable{" "}
              <Link href="/soda-plant-manufacturer" className="text-blue-600 ">
                Soda Plant Manufacturer in Delhi
              </Link>{" "}
              offers many advantages for beverage businesses.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">
                  1. Advanced Technology
                </h3>
                <p>
                  Professional manufacturers use modern engineering and
                  automation systems that improve production speed and product
                  quality.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  2. High Production Capacity
                </h3>
                <p>
                  Industrial soda plants are designed for large-scale beverage
                  production, making them ideal for bottling plants and beverage
                  companies.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  3. Hygienic Processing
                </h3>
                <p>
                  Food-grade stainless steel construction ensures hygiene and
                  safety during soda manufacturing.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  4. Energy Efficient Machines
                </h3>
                <p>
                  Modern soda plants consume less power while maintaining high
                  productivity.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  5. Long-Lasting Performance
                </h3>
                <p>
                  High-quality components ensure durability and low maintenance
                  costs.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Key Features of Soda Plant Machines
            </h2>
            <p className="mb-3">
              A high-quality soda plant machine offers several advanced features
              that improve beverage production.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stainless steel body for hygienic beverage processing</li>
              <li>High-pressure carbonation system</li>
              <li>Automatic temperature and pressure control</li>
              <li>Easy operation and maintenance</li>
              <li>Energy-efficient performance</li>
              <li>Compact and durable design</li>
              <li>
                <span className="font-bold">High production output</span>
                <br />
                These features help beverage manufacturers produce soda
                efficiently while maintaining consistent taste and quality.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Applications of Soda Plant Machines
            </h2>
            <p className="mb-4">
              Soda plant machines are used across various industries where
              carbonated beverages are produced.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">
                  Beverage Manufacturing Industry
                </h3>
                <p>
                  Large beverage companies use soda plants for mass production
                  of soft drinks.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Bottling Plants</h3>
                <p>
                  Soda plants are commonly installed in bottling units for
                  filling carbonated beverages into bottles or cans.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  Restaurants and Cafes
                </h3>
                <p>
                  Some restaurants and beverage outlets use small soda plants
                  for fresh soda production.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  Juice and Soft Drink Businesses
                </h3>
                <p>
                  Entrepreneurs starting soft drink brands often rely on soda
                  plants for commercial beverage production.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Why Vpack Machine is a Trusted Soda Plant Manufacturer in Delhi
            </h2>
            <p className="mb-3">
              Vpack Machine stands out where drinks equipment matters, building
              soda plants that work without fuss. Their gear runs hard, trusted
              by those who need things done right – day after day.
            </p>
            <p>
              Fine-tuned gears hum inside each unit, shaped by strict quality
              demands. From start to finish, precision drives every model
              rolling out of their workshop. Crafted with top-tier steel, these
              systems handle tough daily runs without faltering. Instead of
              shortcuts, long-tested methods shape how parts come together.
              Every piece functions cleanly under real factory conditions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Key Reasons to Choose Vpack Machine
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>High-quality soda plant machines</li>
              <li>Advanced carbonation technology</li>
              <li>Durable stainless steel construction</li>
              <li>Competitive pricing</li>
              <li>Reliable after-sales support</li>
              <li>Customized plant solutions</li>
            </ul>
            <p>
              With years of experience in beverage machinery manufacturing,{" "}
              <span className="font-bold">Vpack Machine</span> has become a
              preferred{" "}
              <Link href="/contact" className="text-blue-600 ">
                Soda Plant Manufacturer in Delhi
              </Link>{" "}
              for many beverage businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Things to Consider Before Buying a Soda Plant
            </h2>
            <p className="mb-4">
              Before purchasing a soda plant machine, businesses should consider
              a few important factors.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">Production Capacity</h3>
                <p>
                  Choose a machine based on your required daily beverage output.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Machine Quality</h3>
                <p>
                  Always select machines made from food-grade stainless steel to
                  ensure hygiene.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Automation Level</h3>
                <p>
                  Automatic soda plants improve efficiency and reduce manual
                  labor.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  Maintenance and Support
                </h3>
                <p>
                  Choose a manufacturer that offers technical support and spare
                  parts.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Energy Consumption</h3>
                <p>
                  Energy-efficient machines reduce operational costs in the long
                  run.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Future of Soda Manufacturing Industry
            </h2>
            <p className="mb-3">
              Fizzing drinks grow more popular every year, pushing companies to
              act fast. Because of that, factories now buy smarter gear for
              bottling soda. This shift helps them make more while keeping taste
              steady. Machines today do tasks quicker than before, which changes
              how plants operate. Rising interest in sweet sparkling options
              drives the whole push forward.
            </p>
            <p>
              Fueled by smart tech, fresh approaches to saving power pop up
              where you least expect.{" "}
              <span className="font-bold">Vpack Machine</span> slips into the
              scene, building gear that keeps drinks flowing without hiccups.
            </p>
          </motion.div>
        </div>

        {/* FAQs Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-[16px] lg:text-[18px]">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                1. What is a soda plant machine?
              </h3>
              <p className="text-gray-700">
                A soda plant machine is equipment used to produce carbonated
                beverages by mixing water, CO₂ gas, and flavored syrup in a
                controlled process.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                2. Who is the best Soda Plant Manufacturer in Delhi?
              </h3>
              <p className="text-gray-700">
                <span className="font-bold">Vpack Machine</span> is considered a
                reliable Soda Plant Manufacturer in Delhi offering advanced soda
                production machines for beverage businesses. Or you can{" "}
                <Link href="/contact" className="text-blue-600 ">
                  contact us
                </Link>{" "}
                directly.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                3. What is the production capacity of a soda plant?
              </h3>
              <p className="text-gray-700">
                Soda plants are available in different capacities ranging from
                small commercial units to large industrial beverage production
                systems.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                4. How does a soda plant machine work?
              </h3>
              <p className="text-gray-700">
                A soda plant machine chills water, injects carbon dioxide gas,
                and mixes it with syrup to create carbonated beverages before
                bottling.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                5. What industries use soda plant machines?
              </h3>
              <p className="text-gray-700">
                Soda plant machines are widely used in beverage factories, soft
                drink companies, bottling plants, and restaurants.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                6. Is a soda plant machine suitable for small businesses?
              </h3>
              <p className="text-gray-700">
                Yes, many manufacturers offer compact soda plants designed
                specifically for small beverage startups and restaurants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
