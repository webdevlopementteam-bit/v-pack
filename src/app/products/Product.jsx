"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/data";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Banner Hero Section */}
      <section
        className="relative text-slate-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/products/p5.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-6xl mx-auto text-center space-y-2">
          <h1 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-white">
            Products
          </h1>

          <p className="text-blue-500 font-bold text-sm sm:text-xl flex items-center justify-center gap-2">
            <Link
              href="/"
              className="hover:text-white transition-colors no-underline"
            >
              Home
            </Link>

            <span>-</span>

            <span className="text-blue-500">Products & Solutions</span>
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Power Your Industry
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
          Discover Our Machines & Solutions
        </h3>
        <p className="text-gray-500 text-[16px] sm:text-base leading-relaxed w-full mx-auto">
          From beverage and water plants to pharma and cosmetics, our machines
          are engineered for precision, efficiency, and durability. Find the
          perfect solution for your industry today!
        </p>
      </section>

      {/* Products Listing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 overflow-hidden">
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          const isFirst = index === 0;

          // Define side-aware animations: items on the left slide from left (-50), items on the right slide from right (50)
          const contentAnimation = isEven
            ? {
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
              }
            : {
                initial: { opacity: 0, x: 50 },
                whileInView: { opacity: 1, x: 0 },
              };

          const imageAnimation = isEven
            ? {
                initial: { opacity: 0, x: 50 },
                whileInView: { opacity: 1, x: 0 },
              }
            : {
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
              };

          return (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                !isEven ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content Side */}
              <motion.div
                initial={contentAnimation.initial}
                whileInView={contentAnimation.whileInView}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className={`lg:col-span-7 space-y-6 order-2 ${
                  !isEven ? "lg:col-start-6 lg:order-none" : "lg:order-none"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider`}
                  >
                    {product.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-3xl font-extrabold text-gray-900 flex items-center gap-2">
                    {product.icon && <span>{product.icon}</span>}
                    {product.title}
                  </h3>
                  {product.subtitle && (
                    <p className="text-gray-600 font-medium italic text-[16px] sm:text-base">
                      {product.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-gray-500 text-[16px] sm:text-base leading-relaxed">
                  {product.description}
                </p>

                {product.items && product.items.length > 0 && (
                  <div className="space-y-2 pt-2">
                    {product.categoryLabel && (
                      <h4 className="text-[23px] font-semibold text-gray-800">
                        {product.categoryLabel}
                      </h4>
                    )}

                    <ul className="space-y-1.5">
                      {product.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm font-medium"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2.5"></span>
                          <Link
                            href={item.link}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4">
                  <a
                    href="tel:+919135636541"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-orange-500/50 rounded-xl text-gray-800 font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg group no-underline"
                  >
                    <span>Call Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={imageAnimation.initial}
                whileInView={imageAnimation.whileInView}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 0.1,
                }}
                className={`lg:col-span-5 relative w-full h-[320px] sm:h-[420px] lg:h-[420px] bg-slate-50 border border-gray-100 rounded-2xl p-4 flex items-center justify-center shadow-md overflow-hidden order-1 ${
                  !isEven ? "lg:col-start-1 lg:order-none" : "lg:order-none"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  {...(isFirst ? { priority: true, loading: "eager" } : {})}
                  className="object-contain p-4 transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
