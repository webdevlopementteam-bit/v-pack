"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VpackEdgeSection() {
  const features = [
    {
      title: "High-Speed Precision",
      description:
        "Machines deliver up to 60 bottles per minute (BPM) with accurate fills and minimal wastage.",
    },
    {
      title: "Versatile Applications",
      description:
        "Suitable for industries like food, cosmetics, pharmaceuticals, lubricants, and beverages.",
    },
    {
      title: "Low Operational Costs",
      description:
        "Automation reduces manpower and ensures consistent performance with minimal supervision.",
    },
    {
      title: "Customizable Configurations",
      description:
        "From 200 ml to 5 liters, machines are adjustable for various product types and packaging needs.",
    },
    {
      title: "Extended Shelf Life",
      description:
        "Airtight seals help maintain product integrity during transit and storage.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-[#E65C00] font-semibold text-sm sm:text-[20px] uppercase tracking-wider mb-2">
              The Vpack Edge
            </span>
            <h2 className="text-2xl sm:text-4xl  font-semibold text-gray-900 leading-tight mb-6">
              Why Vpack Machines Are a Game Changer
            </h2>
            <p className="text-[#333333] text-[16px] leading-relaxed mb-8">
              When it comes to filling solutions, not all machines are created
              equal. Vpack&apos;s filling machines are designed to meet the
              real-world challenges of today&apos;s industries — whether
              you&apos;re working with water, oil, paste, or viscous liquids.
              From increasing output to maintaining quality, here&apos;s how
              Vpack helps businesses stay ahead of the curve.
            </p>

            {/* Feature List */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    {/* Red Check Icon */}
                    <div className="w-6 h-6 rounded-full border-2 border-[#E65C00] flex items-center justify-center text-[#E65C00]">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold text-[16px] leading-snug">
                      {feature.title}:{" "}
                      <span className="font-normal text-[#4A4A4A]">
                        {feature.description}
                      </span>
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Machine Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full h-[200px] sm:h-[400px] md:h-[400px]">
              <Image
                src="/images/home/The-Vpack-Edge/p1.png"
                alt="Vpack Filling Machine"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover sm:object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
