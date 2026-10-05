"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FruitJuiceRFCPage() {
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
      {/* Top Hero Banner */}
      <div className="bg-[#dbe3eb] min-h-[120px] md:min-h-[140px] px-4 py-4 flex items-center justify-center">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] tracking-wide text-center uppercase">
          FRUIT JUICE RFC MACHINE
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE (Moves from Left) */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4 lg:sticky lg:top-6 bg-[#f8fafc] border border-gray-200 rounded-lg p-5 shadow-sm space-y-4"
          >
            {/* Product Image Container */}
            <div className="bg-white p-3 rounded-md border border-gray-100 shadow-inner relative">
              {/* Product Image */}
              <div className="relative w-full h-64 sm:h-72 my-2">
                <Image
                  src="/images/products/fruit2.png"
                  alt="Juice RFC Machine"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex text-amber-400 text-xl md:text-2xl">★★★★★</div>

            {/* Title with Juice Box Emoji */}
            <div className="flex items-center gap-2">
              <span className="text-xl">🧃</span>
              <h3 className="text-xl lg:text-2xl font-bold text-[#0B2545]">
                JUICE RFC MACHINE
              </h3>
            </div>

            {/* Short Description */}
            <p className="text-gray-600 text-[16px] lg:text-[18px]">
              Designed for seamless rinsing, filling, and capping, the Vpack
              Juice RFC Machine ensures consistent performance and hygiene in
              juice packaging operations.
            </p>

            {/* Call Now Button */}
            <div className="pt-2">
              <button
                onClick={handleCall}
                className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow hover:bg-orange-50 transition-colors cursor-pointer text-[16px] lg:text-[18px]"
              >
                Call Now <span className="text-gray-600">→</span>
              </button>
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
            {/* Title Section */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0B2545] leading-tight">
                Fruit Juice Plant Manufacturer in Delhi
              </h1>
              <div className="flex text-amber-400 text-xl md:text-2xl">
                ★★★★★
              </div>
            </div>

            {/* Main Content Paragraphs */}
            <div className="space-y-4 pt-2 text-[16px] lg:text-[18px]">
              <p className="text-gray-600">
                The Vpack Juice RFC Machine is an advanced solution built for
                the automatic rinsing, filling, and capping of synthetic and
                natural juices. As a trusted{" "}
                <Link
                  href="/contact"
                  className="text-blue-600 font-bold italic"
                >
                  Fruit Juice Plant Manufacturer in Delhi
                </Link>
                , this machine is engineered to meet high industry standards
                with efficiency and hygiene. Fabricated with durable{" "}
                <strong className="text-gray-800">
                  SS 304 stainless steel
                </strong>
                , this machine offers a hygienic and efficient production flow.{" "}
                <strong className="text-gray-800">
                  With a packaging range from 180 to 2000 ML and speed ranging
                  from 30 to 300 bottles per minute
                </strong>
                , it's perfectly suited for scaling juice production.
              </p>

              <p className="text-gray-600">
                The machine is part of a complete juice processing line,
                designed by leading{" "}
                <Link href="/contact" className="text-blue-600 font-bold">
                  Fruit Juice Plant Manufacturer
                </Link>
                , and capable of handling a wide variety of fruits like mango,
                orange, guava, lemon, pineapple, and more. Depending on the
                juice viscosity, plate or tubular heat exchangers are used for
                optimal processing. Whether it's clear juices like apple and
                grape or pulpy ones like mango and papaya, this system delivers
                uncompromising quality.
              </p>

              <p className="text-gray-600">
                As an experienced{" "}
                <strong className="text-gray-800">
                  Fruit Juice Plant Manufacturer
                </strong>
                , Vpack Machine provides turnkey solutions that simplify
                operations and reduce manual intervention. Our fruit juice
                plants are suitable for processing a wide range of fruits such
                as mango, orange, apple, pineapple, pomegranate, mixed fruit,
                and more.
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="pt-4 text-[16px] lg:text-[18px]">
              <div className="overflow-x-auto border border-gray-300 rounded-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-300 bg-gray-50">
                      <th className="p-3 sm:p-4 font-bold text-gray-800 w-1/2 border-r border-gray-300 text-center">
                        Technical Specifications
                      </th>
                      <th className="p-3 sm:p-4 font-bold text-gray-800 w-1/2 text-center">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Material of Construction
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">SS 304</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Capacity
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">60 BPM</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Range
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">
                        30 to 300 BPM
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Voltage
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">380 V</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Power Consumption
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">20 kW</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Packaging Size
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">
                        180 to 2000 ML
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Air Conveyor Length
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">15 Feet</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Machine Power
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">0–40 kW</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Frequency
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">50 Hz</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Phase
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">Three Phase</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Material
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">
                        Stainless Steel
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        End Product
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">Juice</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                        Automation Grade
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700">Automatic</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Performance Highlights */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <p className="font-bold text-gray-800">Performance Highlights:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>Integrated rinsing, filling, and capping in one unit</li>
                <li>High throughput with production capacity up to 300 BPM</li>
                <li>Compatible with bottles from 180 ML to 2 Liters</li>
                <li>
                  Food-grade stainless steel construction for hygiene and
                  durability
                </li>
                <li>Suitable for both clear and viscous juices</li>
                <li>Low maintenance and energy-efficient operation</li>
              </ul>
            </div>

            {/* Suitable for All Types of Juice Businesses */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Suitable for All Types of Juice Businesses
              </h2>
              <p className="text-gray-600">
                Vpack Machine fruit juice plants are ideal for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>Commercial fruit juice manufacturers</li>
                <li>Beverage startups and entrepreneurs</li>
                <li>Dairy and food processing companies</li>
                <li>Export-oriented juice production units</li>
                <li>Institutional and contract manufacturing setups</li>
              </ul>
            </div>

            {/* Advanced Technology & Hygienic Design */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Advanced Technology & Hygienic Design
              </h2>
              <p className="text-gray-600">
                At <strong className="text-gray-800">Vpack Machine</strong>, we
                understand the importance of hygiene and food safety in juice
                manufacturing. Our fruit juice plants are built with
                GMP-compliant designs and food-grade materials. Automated
                controls reduce human contact, ensuring safer production and
                maintaining the natural flavor and nutritional value of the
                juice.
              </p>
              <p className="text-gray-600">
                Our machines are energy-efficient, easy to operate, and require
                minimal maintenance, making them a cost-effective choice for
                juice manufacturers.
              </p>
            </div>

            {/* Why Choose Vpack Machine as Your Fruit Juice Plant Manufacturer? */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Why Choose Vpack Machine as Your Fruit Juice Plant Manufacturer?
              </h2>
              <p className="text-gray-600">
                There are many reasons why clients across India and overseas
                trust <strong className="text-gray-800">Vpack Machine</strong>:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>
                  Proven expertise in beverage and liquid processing machinery
                </li>
                <li>
                  Custom-built fruit juice plants for small, medium, and
                  large-scale production
                </li>
                <li>Robust construction for long-term performance</li>
                <li>Easy integration with existing production lines</li>
                <li>Competitive pricing without compromising on quality</li>
                <li>Excellent after-sales support and technical assistance</li>
              </ul>

              <p className="text-gray-600 pt-2">
                Our goal is not just to sell machines but to help you build a
                successful and sustainable fruit juice business.
              </p>
            </div>

            {/* Trusted Fruit Juice Plant Manufacturer for Quality & Performance */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Trusted Fruit Juice Plant Manufacturer for Quality & Performance
              </h2>
              <p className="text-gray-600">
                As a reliable Fruit Juice Plant Manufacturer, Vpack Machine
                focuses on innovation, quality, and customer satisfaction. Each
                plant undergoes strict quality checks before delivery to ensure
                flawless performance at the client’s site.
              </p>
              <p className="text-gray-600">
                We also provide installation support, operator training, and
                prompt service, ensuring smooth and uninterrupted production.
              </p>
              <p className="text-gray-600 font-medium">
                If you are looking for a high-quality, efficient, and affordable{" "}
                <strong className="text-gray-800">
                  Fruit Juice Plant Manufacturer
                </strong>
                , <strong className="text-gray-800">Vpack Machine</strong> is
                your ideal partner.
              </p>
            </div>

            {/* Contact line */}
            <p className="text-gray-700 pt-4 text-[16px] lg:text-[18px]">
              <strong className="text-gray-800">
                Contact Vpack Machine today
              </strong>{" "}
              to get expert guidance, customized plant solutions, and the best
              pricing for your fruit juice manufacturing project
            </p>

            {/* FAQs Section */}
            <div className="space-y-6 pt-6 border-t border-gray-200 text-[16px] lg:text-[18px]">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545]">
                FAQs
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
                    1. What is a fruit juice plant and how does it work?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    A fruit juice plant is a complete processing system used to
                    convert fresh fruits into ready-to-pack juice. It includes
                    fruit washing, crushing or pulping, juice extraction,
                    filtration, pasteurization, storage, and filling.{" "}
                    <strong className="text-gray-800">Vpack Machine</strong>{" "}
                    designs automated fruit juice plants that ensure high
                    hygiene, efficiency, and consistent juice quality.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
                    2. How do I choose the right production capacity for a fruit
                    juice plant?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    The right capacity depends on your business size, market
                    demand, and future growth plans.{" "}
                    <strong className="text-gray-800">Vpack Machine</strong>{" "}
                    offers fruit juice plants in small, medium, and large
                    capacities, allowing manufacturers to scale production
                    easily as demand increases.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
                    3. What is the cost of a fruit juice plant?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    The cost of a fruit juice plant varies based on production
                    capacity, level of automation, and additional equipment
                    required.{" "}
                    <strong className="text-gray-800">Vpack Machine</strong>{" "}
                    provides cost-effective and customized fruit juice plant
                    solutions. For accurate pricing, it is best to request a
                    detailed quotation.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
                    4. What types of fruits can be processed in a fruit juice
                    plant?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    A modern fruit juice plant can process a wide variety of
                    fruits such as mango, orange, apple, pineapple, pomegranate,
                    grapes, and mixed fruits.{" "}
                    <strong className="text-gray-800">Vpack Machine</strong>{" "}
                    designs versatile fruit juice plants suitable for multiple
                    fruit types without compromising juice quality.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
                    5. Why should I choose Vpack Machine as my fruit juice plant
                    manufacturer?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    <strong className="text-gray-800">Vpack Machine</strong> is
                    a trusted fruit juice plant manufacturer known for quality
                    engineering, hygienic design, and reliable performance. The
                    company offers customized solutions, competitive pricing,
                    installation support, and strong after-sales service, making
                    it a preferred choice for juice manufacturers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
