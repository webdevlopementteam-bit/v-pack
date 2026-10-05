"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const blogPosts = [
  {
    id: "/water-bottling-plant-manufacturers",
    image: "/images/blog/b1.png",
    title:
      "How the Right Water Bottling Plant Manufacturer In Delhi Boosts Business Growth ",
    date: "8 June 2026",
  },
  {
    id: "/soda-plant-manufacturers",
    image: "/images/blog/b2.png",
    title:
      "7 Expert Tips to Choose the Best Soda Plant Manufacturer for Your Business ",
    date: "5 June 2026",
  },
  {
    id: "/liquid-filling-plant-manufacturers",
    image: "/images/blog/b3.png",
    title:
      "Best Liquid Filling Plant Manufacturer in Delhi — Everything You Need to Know Before Buying",
    date: "6 June 2026",
  },
  {
    id: "/packaged-drinking-water-plant-manufacturer-in-delhi ",
    image: "/images/blog/b4.png",
    title:
      "Best Tips to Choose the Right Packaged Drinking Water Plant Manufacturer: Complete Guide 2026",
    date: "3 June 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-orange-100">
      {/* Header Banner */}
      <section className="w-full bg-slate-900 py-12 md:py-16 px-4 md:px-12 text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto space-y-4"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight">
            Our Latest Blogs & Insights
          </h1>
          <p className="text-sm sm:text-base lg:text-[18px] text-slate-300 max-w-2xl mx-auto">
            Stay updated with expert guides, industrial news, and manufacturing
            tips from Vpack Machine.
          </p>
        </motion.div>
      </section>

      {/* Blog Grid Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {blogPosts.map((post, index) => {
            return (
              <motion.article
                key={post.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col justify-between"
              >
                <div>
                  {/* Blog Image Container with Responsive Heights */}
                  <Link
                    href={`${post.id}`}
                    className="relative block w-full h-64 sm:h-80 md:h-[380px] lg:h-[440px] bg-[#F8FAFC] overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className="object-contain w-full h-full"
                    />
                  </Link>

                  {/* Blog Content */}
                  <div className="pt-6 pb-3 space-y-3">
                    <span className="text-sm sm:text-[16px] lg:text-[18px] font-medium text-orange-600 block">
                      {post.date}
                    </span>
                    <Link
                      href={`${post.id}`}
                      className="block text-lg sm:text-[18px] lg:text-[20px] font-bold text-slate-900 leading-snug hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
