"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { faqs } from "./faqs";

const specifications = [
  ["Standard capacity", "60 BPM (from 30 BPM; higher on request)"],
  ["Bottle size", "180 ml – 2,000 ml"],
  ["Material", "SS 304 food-grade"],
  ["Power", "20 kW"],
  ["Supply", "380 V, 50 Hz, three phase"],
  ["Air conveyor", "15 ft"],
];

const processSteps = [
  ["Washing and sorting", "removes dirt and damaged fruit."],
  [
    "Pulping and extraction",
    "the fruit pulper separates pulp from seeds and skin.",
  ],
  [
    "Blending",
    "pulp, water, sugar and additives mixed in SS blending and agitator tanks.",
  ],
  ["Filtration", "for clear juices."],
  ["Homogenization", "uniform texture, no settling."],
  [
    "Pasteurization",
    "kills microbes while keeping taste; plate or tubular heat exchangers are chosen by juice thickness.",
  ],
  ["Hot filling and capping", "on the juice RFC machine."],
  [
    "Cooling tunnel",
    "cools bottles quickly to protect flavour, colour and bottle shape.",
  ],
  ["Labeling and packing", ""],
];

const machines = [
  {
    name: "Fruit Pulper Machine",
    href: "/fruit-pulper-machine",
    role: "Extracts pulp from mango, guava, tomato and more",
  },
  {
    name: "SS Blending Tank",
    href: "/ss-blending-tank-manufacturer",
    role: "Mixes the juice formulation",
  },
  {
    name: "Agitator Tank",
    href: "/agitator-tank",
    role: "Keeps pulp and syrup evenly mixed",
  },
  { name: "Homogenizer", href: "/homogenizer", role: "Uniform texture" },
  {
    name: "Pasteurizer (200 LPH)",
    href: "/pasteurizer-200-lph",
    role: "Microbiological safety and shelf life",
  },
  { name: "Juice RFC Machine", role: "Rinses, fills and caps" },
  {
    name: "Cooling Tunnel Machine",
    href: "/cooling-tunnel-machine-manufacturer",
    role: "Cools hot-filled bottles",
  },
];

const startSteps = [
  [
    "Pick your products",
    "choose the fruits and pack sizes (180 ml to 2 L) that sell in your market.",
  ],
  [
    "Get licences",
    "an FSSAI licence is required for fruit beverages, along with GST registration and State Pollution Control Board consent where applicable.",
  ],
  [
    "Plan space and utilities",
    "lay out areas for processing, filling, cooling and storage, and plan power, water and steam supply for the pasteurizer.",
  ],
  [
    "Select machines",
    "fruit pulper, blending and agitator tanks, homogenizer, pasteurizer, juice RFC machine and cooling tunnel, sized to your daily output.",
  ],
  [
    "Install and train",
    "V-Pack Machine installs the line and trains your operators on hygiene.",
  ],
  [
    "Run trial batches",
    "test taste, colour and shelf life before full launch.",
  ],
];

const juiceTypes = [
  ["Pulpy juices", "Mango, guava, papaya"],
  ["Clear juices", "Apple, grape, pomegranate"],
  ["Citrus", "Orange, lemon, pineapple"],
  ["Blends", "Mixed fruit"],
];

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto border border-gray-300 rounded-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-300 bg-gray-50">
            <th className="p-3 sm:p-4 font-bold text-gray-800 w-1/2 border-r border-gray-300 text-center">
              {headers[0]}
            </th>
            <th className="p-3 sm:p-4 font-bold text-gray-800 w-1/2 text-center">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map(([label, value], i) => (
            <tr key={i}>
              <td className="p-3 sm:p-4 text-gray-700 border-r border-gray-200">
                {label}
              </td>
              <td className="p-3 sm:p-4 text-gray-700">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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
        <p className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] tracking-wide text-center uppercase">
          FRUIT JUICE PLANT MANUFACTURER
        </p>
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
                  alt="Fruit juice plant with juice RFC machine by V-Pack Machine, Delhi"
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
              Rinses, fills and caps juice bottles from 180 ml to 2 litres at a
              standard 60 BPM, built in SS 304 food-grade steel.
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
                Fruit Juice Plant Manufacturer In Delhi - V Pack Machine
              </h1>
              <div className="flex text-amber-400 text-xl md:text-2xl">
                ★★★★★
              </div>
            </div>

            {/* Quick Answer */}
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-sm p-4 sm:p-5 text-[16px] lg:text-[18px]">
              <p className="text-gray-700">
                <strong className="text-gray-800">Quick Answer:</strong> V-Pack
                Machine Pvt. Ltd. is a{" "}
                <strong className="text-gray-800">
                  fruit juice plant manufacturer in Delhi
                </strong>
                . Its juice lines take fresh fruit through pulping, blending,
                homogenization and pasteurization (200 LPH), then hot-fill
                bottles from 180 ml to 2 litres on a 60 BPM juice RFC machine
                and cool them in a cooling tunnel — all built in SS 304
                food-grade steel by a team with 14 years of experience.
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Technical Specifications
              </h2>
              <DataTable
                headers={["Specification", "Value"]}
                rows={specifications}
              />
            </div>

            {/* What Is a Fruit Juice Plant? */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                What Is a Fruit Juice Plant?
              </h2>
              <p className="text-gray-600">
                A fruit juice plant is a complete production line that turns
                fresh fruit into sealed, shelf-stable bottled juice. It covers
                every step — washing, pulping, blending, homogenization,
                pasteurization, filling, cooling and packing — so the juice is
                safe, smooth and tastes the same in every bottle.
              </p>
              <p className="text-gray-600">
                The heart of the line is the{" "}
                <strong className="text-gray-800">juice RFC machine</strong>,
                which rinses, fills and caps bottles in one pass. The processing
                machines before it decide the juice quality; the filling and
                cooling machines after it decide shelf life. As a{" "}
                <strong className="text-gray-800">
                  fruit juice plant manufacturer in Delhi
                </strong>
                , V-Pack Machine builds both parts of the line in-house.
              </p>
            </div>

            {/* Fruit Juice Plant Process */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Fruit Juice Plant Process
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 pl-1">
                {processSteps.map(([step, detail]) => (
                  <li key={step}>
                    <strong className="text-gray-800">{step}</strong>
                    {detail && <> — {detail}</>}
                  </li>
                ))}
              </ol>
              <p className="text-gray-600">
                Juice is more sensitive than water or soda. It contains sugar
                and pulp, so microbes grow quickly if any step is skipped, and
                too much heat changes its taste and colour. The key is balance:
                enough pasteurization to make juice safe, followed by fast
                cooling to keep its fresh flavour.
              </p>
              <p className="text-gray-600">
                V-Pack Machine&apos;s 14 years of experience in beverage
                machinery go into getting this balance right on every juice
                line.
              </p>
            </div>

            {/* Machines in a V-Pack Juice Plant */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Machines in a V-Pack Juice Plant
              </h2>
              <DataTable
                headers={["Machine", "Role"]}
                rows={machines.map(({ name, href, role }) => [
                  href ? (
                    <Link href={href} className="text-blue-600 font-semibold">
                      {name}
                    </Link>
                  ) : (
                    name
                  ),
                  role,
                ])}
              />
            </div>

            {/* Juices and Drinks You Can Make */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Juices and Drinks You Can Make
              </h2>
              <DataTable headers={["Category", "Examples"]} rows={juiceTypes} />
              <p className="text-gray-600">
                Pulpy juices like mango and guava need a pulper and homogenizer
                so the drink stays smooth and does not separate on the shelf.
                Clear juices like apple and grape need good filtration instead.
                Tell V-Pack Machine which fruits you plan to process, and the
                line will be configured for them.
              </p>
            </div>

            {/* How to Start a Fruit Juice Plant */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                How to Start a Fruit Juice Plant: Step by Step
              </h2>
              <p className="text-gray-600">
                Starting a juice business takes planning beyond buying machines.
                Working with an experienced{" "}
                <strong className="text-gray-800">
                  fruit juice plant manufacturer in Delhi
                </strong>{" "}
                like V-Pack Machine keeps each step on track.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 pl-1">
                {startSteps.map(([step, detail]) => (
                  <li key={step}>
                    <strong className="text-gray-800">{step}</strong> —{" "}
                    {detail}
                  </li>
                ))}
              </ol>
            </div>

            {/* Who Uses V-Pack Juice Plants */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Who Uses V-Pack Juice Plants
              </h2>
              <p className="text-gray-600">
                Buyers who choose V-Pack Machine as their{" "}
                <strong className="text-gray-800">
                  fruit juice plant manufacturer in Delhi
                </strong>{" "}
                include beverage startups, established juice brands, dairy and
                food processors, contract manufacturers and export units.
                V-Pack&apos;s clients include dairy and beverage companies such
                as Paras Dairy and DS Group.
              </p>
            </div>

            {/* About V-Pack Machine */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                About V-Pack Machine — 14 Years of Experience
              </h2>
              <p className="text-gray-600">
                V-Pack Machine Pvt. Ltd. is a{" "}
                <strong className="text-gray-800">
                  fruit juice plant manufacturer in Delhi
                </strong>{" "}
                with 14 years of experience in juice, beverage and water
                machinery. Every pulper, tank, homogenizer,
                pasteurizer and RFC machine is built at the company&apos;s
                factory in Pooth Khurd, New Delhi, in SS 304 food-grade steel.
              </p>
              <p className="text-gray-600">
                With more than 3,000 installations across India and abroad,
                V-Pack supports juice businesses from the first trial batch to
                full production.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Start Your Fruit Juice Plant with V-Pack Machine
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-[#0B2545] text-white rounded-md font-semibold shadow hover:bg-[#13315c] transition-colors"
                >
                  Get a Quote <span>→</span>
                </Link>
                <button
                  onClick={handleCall}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow hover:bg-orange-50 transition-colors cursor-pointer"
                >
                  Call Now <span className="text-gray-600">→</span>
                </button>
              </div>
            </div>

            {/* FAQs Section */}
            <div className="space-y-6 pt-6 border-t border-gray-200 text-[16px] lg:text-[18px]">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545]">
                FAQs
              </h2>

              <div className="space-y-6">
                {faqs.map(({ question, answer }, i) => (
                  <div key={question}>
                    <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
                      {i + 1}. {question}
                    </h3>
                    <p className="text-gray-600 mt-1">{answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
