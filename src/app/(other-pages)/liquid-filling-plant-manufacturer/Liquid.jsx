"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { faqs } from "./faqs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const specifications = [
  ["Nozzles", "2"],
  ["Fill range", "5 ml – 1,000 ml"],
  ["Accuracy", "±2%"],
  ["Maximum flow", "2,000 ml/min (water)"],
  ["Power", "40 W"],
  ["Supply", "110–220 V, 50–60 Hz"],
  ["Contact material", "Food-grade stainless steel"],
];

const industries = [
  ["Drinking water and beverages", "Water, juice, soft drinks, flavoured milk"],
  [
    "Food and edible oil",
    "Mustard, sunflower and refined oils, syrups, vinegar",
  ],
  ["Pharmaceutical", "Syrups, tonics, oral liquids"],
  ["Cosmetics and personal care", "Shampoo, hair oil, lotion, sanitizer"],
  ["Chemicals and lubricants", "Cleaners, phenyl, engine oil"],
];

const machines = [
  [
    "Mini Liquid Filling Machine, Double Nozzle (SP MLF D)",
    "5 ml – 1,000 ml",
    "Up to 2,000 ml/min",
    "Startups, labs, small batches",
  ],
  [
    "Automatic liquid filling line",
    "200 ml – 5 L",
    "Up to 60 BPM",
    "Medium to large production",
  ],
  [
    "Bottle RFC machine (water/juice)",
    "180 ml – 2 L",
    "24 – 90 BPM",
    "Water and beverage plants",
  ],
];

const lineComponents = [
  ["Storage and mixing tanks", "SS tanks for the product"],
  ["Filtration unit", "removes particles before filling"],
  ["Filling machine", "matched to your liquid"],
  ["Capping machine", "PVC or metal caps"],
  ["Labeling machine", "sticker or BOPP"],
  ["Conveyors and control panel", "flow, fill level and pressure monitoring"],
];

const whyChoose = [
  "Custom-built for your bottle size, fill volume, liquid and speed",
  "SS 304/316 food-grade contact parts; easy-clean surfaces",
  "Installation, commissioning, operator training and technical support",
  "Machine life of 10–15+ years with maintenance; 3,000+ installations across 10+ industries",
];

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
      <table className="w-full border-collapse text-left text-base">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            {headers.map((header, i) => (
              <th
                key={header}
                className={`p-3.5 font-bold text-gray-800 ${
                  i < headers.length - 1 ? "border-r border-gray-200" : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr
              key={r}
              className={`${r < rows.length - 1 ? "border-b border-gray-200" : ""} ${
                r % 2 === 1 ? "bg-gray-100" : ""
              }`}
            >
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`p-3.5 ${
                    i === 0 ? "font-semibold text-gray-800" : "text-gray-700"
                  } ${i < row.length - 1 ? "border-r border-gray-200" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LiquidFillingPlantManufacturerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Top Banner Header */}
      <div className="w-full bg-gray-200 py-12 md:py-16 px-4 text-center shadow-inner">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800"
        >
          Liquid Filling Plant Manufacturer In Delhi -{" "}
          <span className="text-blue-500">Vpack Machine</span>
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
                alt="Mini liquid filling machine double nozzle SP MLF D by Vpack Machine, Delhi"
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
              Mini Liquid Filling Machine, Double Nozzle (SP MLF D) — fills 5
              ml to 1,000 ml with ±2% accuracy.
            </p>

            <a
              href="tel:+919135636541"
              className="border border-orange-500 text-slate-800 hover:bg-orange-500 hover:text-white transition-colors duration-200 font-medium px-6 py-2.5 rounded inline-flex items-center gap-2 text-sm shadow-sm"
            >
              Call Now <span>→</span>
            </a>
          </div>

          {/* Quick Answer & Specifications Table (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-sm p-4 sm:p-5 mb-8">
              <p className="text-gray-700">
                <strong className="text-slate-900">Quick Answer:</strong> Vpack
                Machine Pvt. Ltd. is a{" "}
                <strong className="text-slate-900">
                  liquid filling plant manufacturer in New Delhi
                </strong>
                . It builds filling machines and complete lines for water,
                beverages, edible oil, chemicals, pharmaceutical and cosmetic
                liquids — from a 5 ml–1,000 ml double-nozzle filler with ±2%
                accuracy to automatic lines filling 200 ml–5 L at up to 60
                bottles per minute — with SS 304/316 contact parts and 14 years
                of manufacturing experience.
              </p>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Technical Specifications
            </h2>
            <DataTable
              headers={["Specification", "Value"]}
              rows={specifications}
            />
          </div>
        </div>

        {/* What Is a Liquid Filling Plant? */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            What Is a Liquid Filling Plant?
          </h2>
          <p className="mb-4">
            A liquid filling plant is a set of machines that fills a measured
            volume of liquid into bottles, jars or cans, then caps and labels
            them. It can be as simple as one double-nozzle filler on a table, or
            a complete automatic line with tanks, filtration, filling, capping,
            labeling and conveyors.
          </p>
          <p className="mb-6">
            The right setup depends on three things: how thick your liquid is,
            what pack sizes you sell, and how many bottles you need each day. A
            good{" "}
            <strong className="text-slate-900">
              liquid filling plant manufacturer
            </strong>{" "}
            will ask about all three before recommending a machine.
          </p>
        </motion.section>

        {/* Liquids and Industries We Serve */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Liquids and Industries We Serve
          </h2>
          <div className="mb-6">
            <DataTable
              headers={["Industry", "Typical liquids"]}
              rows={industries}
            />
          </div>
          <p className="mb-4">
            Every liquid behaves differently. Water flows freely and can foam,
            edible oil is thick and sticky, syrups change thickness with
            temperature, and some chemicals need special seals. A filling
            machine that works well for one liquid can drip, foam or under-fill
            with another. That is why choosing the right liquid filling plant
            manufacturer matters as much as choosing the machine.
          </p>
          <p className="mb-6">
            With 14 years of experience across water, food, pharma and cosmetic
            lines, Vpack Machine, a{" "}
            <strong className="text-slate-900">
              liquid filling plant manufacturer in Delhi
            </strong>
            , selects the filling method, nozzle and contact material to suit
            your exact product.
          </p>
        </motion.section>

        {/* Vpack Liquid Filling Machines */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Vpack Liquid Filling Machines
          </h2>
          <div className="mb-6">
            <DataTable
              headers={["Machine", "Fill range", "Speed", "Best for"]}
              rows={machines}
            />
          </div>
          <p className="mb-6">
            Many small manufacturers start with the double-nozzle SP MLF D for
            trial batches and local sales, then move to an automatic line once
            orders grow. Moving up is simple: Vpack Machine plans the automatic
            line around the bottles and products you already sell.
          </p>
        </motion.section>

        {/* Complete Line */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            What a Liquid Filling Plant Manufacturer Supplies in a Complete Line
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {lineComponents.map(([item, detail]) => (
              <li key={item}>
                <strong className="text-slate-900">{item}</strong> — {detail}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Why Choose Vpack Machine */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Why Choose Vpack Machine as Your Liquid Filling Plant Manufacturer
            in Delhi
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {whyChoose.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </motion.section>

        {/* About Vpack Machine */}
        <motion.section variants={fadeIn} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            About Vpack Machine — 14 Years of Experience
          </h2>
          <p className="mb-4">
            Vpack Machine Pvt. Ltd. is a{" "}
            <strong className="text-slate-900">
              liquid filling plant manufacturer in Delhi
            </strong>{" "}
            with 14 years of experience in liquid filling, bottling and
            packaging machinery. The company builds its machines at its own
            factory in Pooth Khurd, New Delhi, serves 10+ industries, and has
            completed more than 3,000 installations across India and abroad.
          </p>
          <p className="mb-6">
            Installation, commissioning, operator training and technical
            support are part of every order.{" "}
            <Link
              href="/contact"
              className="text-blue-600 font-medium hover:underline"
            >
              Get a quote
            </Link>
            .
          </p>
        </motion.section>

        {/* FAQs */}
        <motion.section variants={fadeIn} className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ question, answer }, i) => (
              <div key={question}>
                <h3 className="font-bold text-slate-900 mb-1">
                  {i + 1}. {question}
                </h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
}
