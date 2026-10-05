"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyWeAreDifferent() {
  const cardsData = [
    {
      title: "PRECISION",
      description:
        "3,000+ installations with near-zero errors built for consistent, high-quality output every time.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
    },
    {
      title: "CUSTOMIZATION",
      description:
        "Custom solutions for 10+ industries built to match your unique needs.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
    },
    {
      title: "COMMITMENT",
      description:
        "99% client retention and trusted by brands like Old Monk & DS Group, we build lasting partnerships.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-slate-950 text-white py-10 md:py-15 px-6  overflow-hidden">

      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-[url('/images/home/why.png')] bg-cover bg-center bg-no-repeat opacity-50 pointer-events-none [-webkit-font-smoothing:antialiased] [backface-visibility:hidden] transform-gpu" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative max-w-7xl mx-auto text-center space-y-4 mb-16"
      >
        {/* Main Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Why We Are{" "}
          <span className="text-blue-500 underline decoration-blue-500/50 underline-offset-8">
            Different
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto">
          Backed by results, trusted by industry leaders — our difference lies
          in performance that speaks louder than promises.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            className="group relative bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:border-orange-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-orange-950/50 flex flex-col items-start text-left"
          >
            {/* Icon Box with Bottom-Moving Shadow on Hover */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-orange-600/30 rounded-xl blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-3"></div>
              <div className="relative w-14 h-14 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center text-orange-600 shadow-md transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-2 group-hover:shadow-[4px_6px_15px_rgba(234,88,12,0.4)]">
                {card.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold tracking-wider text-white mb-3">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
