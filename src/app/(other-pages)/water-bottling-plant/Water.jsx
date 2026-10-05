"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WaterBottlingPlantPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Top Hero Banner */}
      <div className="w-full bg-slate-200 flex items-center justify-center px-4 min-h-[80px] md:min-h-[110px]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-slate-900 text-center"
        >
          Water Bottling <span className="text-blue-500">Plant</span>
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
                src="/images/products/water.png"
                alt="Water Bottling Plant"
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

            <p className="text-[16px] lg:text-[18px] text-gray-600 mb-4">
              The complete{" "}
              <span className="font-bold text-gray-800">
                Water Bottling Machine
              </span>{" "}
              is enclosed in transparent plastic and stainless steel guard cover
              without any rubber gaskets. This ensures there is no bacterial
              growth in the crevice.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Water bottling plant
            </h2>

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
              Water Bottling Plant Manufacturer
            </h2>

            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-3 text-[16px] lg:text-[18px] font-bold text-gray-700 w-1/3">
                      Specification
                    </th>
                    <th className="p-3 text-[16px] lg:text-[18px] font-bold text-gray-700 w-2/3">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-[16px] lg:text-[18px]">
                  <tr>
                    <td className="p-3 text-gray-600">Capacity</td>
                    <td className="p-3 text-gray-800">30 Bottles Per Minute</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Power Consumption</td>
                    <td className="p-3 text-gray-800">7 kW</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Usage/Application</td>
                    <td className="p-3 text-gray-800">PET Bottle Filling</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Machine Type</td>
                    <td className="p-3 text-gray-800">Automatic</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Material</td>
                    <td className="p-3 text-gray-800">Stainless Steel</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Driven Type</td>
                    <td className="p-3 text-gray-800">Electric</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Voltage</td>
                    <td className="p-3 text-gray-800">240 V</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Frequency</td>
                    <td className="p-3 text-gray-800">50 Hz</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Material Grade</td>
                    <td className="p-3 text-gray-800">SS 304</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Phase</td>
                    <td className="p-3 text-gray-800">Single Phase</td>
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
              Water Bottling Plant Manufacturer in Delhi
            </h2>
            <p>
              Starting or upgrading a bottled water business begins with
              choosing the right{" "}
              <Link href="/contact" className="text-blue-600 ">
                Water Bottling Plant Manufacturer in Delhi
              </Link>
              . Vpack Machine designs, manufactures, and installs complete water
              bottling plants — covering purification, filling, capping,
              labeling, and packaging — built to meet BIS hygiene and safety
              standards.
            </p>
            <p className="mt-3">
              Every plant we deliver is powered by our in-house range of{" "}
              <span className="font-bold">water bottling machines</span>,
              engineered for accuracy, speed, and minimal downtime. Whether
              you&apos;re setting up a new unit in Delhi NCR or expanding an
              existing line, Vpack Machine offers end-to-end support — from
              machine selection to after-sales service — so your production
              stays consistent and profitable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Why Vpack Machine is a Trusted Water Bottling Plant Manufacturer
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Complete turnkey water bottling plant setup — no need to source
                machines from multiple vendors
              </li>
              <li>
                Precision-built water bottling machines with low maintenance and
                long service life
              </li>
              <li>
                BIS and ISO-aligned manufacturing for safe, compliant production
              </li>
              <li>
                Flexible capacity options to match your investment and business
                scale
              </li>
              <li>
                On-ground installation, training, and AMC support across Delhi
              </li>
              <li>Transparent, affordable pricing with no hidden costs</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Types of Water Bottling Plants We Manufacture
            </h2>
            <p className="mb-3">
              As a full-spectrum{" "}
              <Link href="/contact" className="text-blue-600 ">
                Water Bottling Plant Manufacturer
              </Link>
              , Vpack Machine caters to different categories of bottled water
              businesses in Delhi:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-bold">
                  Packaged Drinking Water Bottling Plant
                </span>{" "}
                – For purified, filtered drinking water in PET bottles and jars.
              </li>
              <li>
                <span className="font-bold">Mineral Water Bottling Plant</span>{" "}
                – RO-based filtration systems that retain essential minerals
                while removing impurities.
              </li>
              <li>
                <span className="font-bold">
                  Soda & Carbonated Water Bottling Plant
                </span>{" "}
                – Equipped with carbonators for sparkling and flavored water
                production.
              </li>
            </ul>
            <p className="mt-3">
              Each plant type uses a tailored combination of our water bottling
              machines, selected based on your raw water source, target bottle
              size, and daily production goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Our Core Water Bottling Machines
            </h2>
            <p className="mb-3">
              A complete water bottling plant runs on the following machines,
              all manufactured and supplied by{" "}
              <span className="font-bold">Vpack Machine</span>:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-bold">Bottle RFC Machine</span> – Combines
                rinsing, filling, and capping in one automated unit, available
                in capacities from 24 to 90 BPM.
              </li>
              <li>
                <span className="font-bold">Industrial RO Plant</span> – Treats
                raw water to remove bacteria, dissolved solids, and contaminants
                before filling.
              </li>
              <li>
                <span className="font-bold">SS Water Storage Tank</span> –
                Stainless steel tanks that keep purified water hygienic and
                ready for filling.
              </li>
              <li>
                <span className="font-bold">Capper Machine</span> – Ensures
                tight, leak-proof sealing on every bottle at high speed.
              </li>
              <li>
                <span className="font-bold">
                  BOPP & Sticker Labelor Machines
                </span>{" "}
                – Apply professional, durable labels for retail-ready bottles.
              </li>
              <li>
                <span className="font-bold">Shrink Wrapping Machine</span> –
                Bundles bottles into shrink-packed units for safe transport and
                storage.
              </li>
              <li>
                <span className="font-bold">Pet Blow Moulding Machine</span> –
                Produces your own PET bottles in-house, reducing dependency on
                third-party suppliers.
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
              Why Delhi-Based Businesses Choose Vpack Machine
            </h2>
            <p>
              Delhi NCR’s growing demand for packaged and mineral water makes it
              essential to work with a local{" "}
              <span className="font-bold">
                water bottling plant manufacturer
              </span>{" "}
              who understands regional compliance needs and can respond quickly.
              With our manufacturing base in Delhi, customers benefit from
              shorter delivery timelines, faster on-site servicing, easy access
              to spare parts, and personalized consultation — without the wait
              times associated with manufacturers based outside the region.
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
                1. Who is the best Water Bottling Plant Manufacturer in Delhi?
              </h3>
              <p className="text-gray-700">
                Vpack Machine is a trusted Water Bottling Plant Manufacturer in
                Delhi, offering BIS-compliant machinery, complete turnkey
                installation, and reliable after-sales support for businesses of
                all sizes.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                2. What is a water bottling plant?
              </h3>
              <p className="text-gray-700">
                A water bottling plant is a complete production setup that
                purifies, fills, caps, labels, and packages water into bottles
                or jars, typically combining an RO plant, water bottling
                machine, labeling unit, and packaging system.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                3. What is the difference between a water bottling plant and a
                water bottling machine?
              </h3>
              <p className="text-gray-700">
                A water bottling machine refers to the specific unit that
                rinses, fills, and caps bottles, while a water bottling plant is
                the entire production line — including filtration, storage, the
                bottling machine, labeling, and packaging — needed to produce
                finished bottled water.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                4. What is the cost of setting up a water bottling plant in
                Delhi?
              </h3>
              <p className="text-gray-700">
                Costs vary based on plant capacity, automation level, and
                machine selection, ranging from a few lakhs for a small unit to
                higher investments for fully automated, high-capacity setups.
                Contact Vpack Machine for a customized quotation.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                5. What types of water bottling plants does Vpack Machine
                manufacture?
              </h3>
              <p className="text-gray-700">
                Vpack Machine manufactures Packaged Drinking Water Bottling
                Plants, Mineral Water Bottling Plants, and Soda/Carbonated Water
                Bottling Plants, each customized with the right water bottling
                machine configuration.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                6. What machines are included in a complete water bottling
                machine setup?
              </h3>
              <p className="text-gray-700">
                A typical setup includes a Bottle RFC Machine
                (rinser-filler-capper), Industrial RO Plant, SS Storage Tank,
                Labeling Machine, and Shrink Wrapping Machine — all supplied and
                installed by Vpack Machine.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                7. What capacity options are available for water bottling
                machines?
              </h3>
              <p className="text-gray-700">
                Vpack Machine’s water bottling machines are available in 24, 30,
                60, and 90 BPM (bottles per minute) capacities, suitable for
                both small-scale startups and large production units.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                8. Is BIS certification mandatory for a water bottling plant in
                Delhi?
              </h3>
              <p className="text-gray-700">
                Yes, BIS certification is legally required for manufacturing and
                selling packaged drinking water in India, including Delhi. Vpack
                Machine’s plants are designed to help you meet these compliance
                standards.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                9. How much space is needed for a water bottling plant?
              </h3>
              <p className="text-gray-700">
                A small to mid-sized water bottling plant typically needs
                1,500–3,000 sq. ft. of covered space, depending on machine
                capacity and storage requirements. Vpack Machine provides a
                custom layout based on your site.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                10. How long does installation take?
              </h3>
              <p className="text-gray-700">
                Installation of a water bottling plant by Vpack Machine
                generally takes 15 to 45 days, depending on plant capacity and
                site readiness.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                11. Do you provide after-sales service for water bottling
                machines in Delhi?
              </h3>
              <p className="text-gray-700">
                Yes, Vpack Machine offers nationwide AMC, genuine spare parts,
                and technical support, with faster response times for Delhi NCR
                customers due to our local manufacturing base.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                12. How can I get a price quote for a water bottling plant?
              </h3>
              <p className="text-gray-700">
                Share your required capacity, bottle sizes, and location with
                Vpack Machine’s team to receive a customized quotation along
                with plant layout and consultation support. Or visit our{" "}
                <Link href="/contact" className="text-blue-600 ">
                  contact page
                </Link>{" "}
                to request a quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
