"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AllPostsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const posts = [
    {
      id: 1,
      image: "/images/home/all-post/p1.png",
      title:
        "How the Right Water Bottling Plant Manufacturer In Delhi Boosts Business Growth",
      link: "/water-bottling-plant-manufacturers",
    },
    {
      id: 2,
      image: "/images/home/all-post/p2.png",
      title:
        "Best Liquid Filling Plant Manufacturer in Delhi — Everything You Need to Know Before Buying",
      link: "/liquid-filling-plant-manufacturers",
    },
    {
      id: 3,
      image: "/images/home/all-post/p3.png",
      title:
        "7 Expert Tips to Choose the Best Soda Plant Manufacturer for Your Business",
      link: "/soda-plant-manufacturers",
    },
    {
      id: 4,
      image: "/images/home/all-post/p4.png",
      title:
        "Best Tips to Choose the Right Packaged Drinking Water Plant Manufacturer: Complete Guide 2026",
      link: "/packaged-drinking-water-plant-manufacturer-in-delhi",
    },
    {
      id: 5,
      image: "/images/home/all-post/p5.png",
      title:
        "💧 Mineral Water Business Plan — Machines, Investment & Profits (2026)",
      link: "/mineral-water-business-plan-machines-investment-profits",
    },
    {
      id: 6,
      image: "/images/home/all-post/p6.png",
      title: "💧 Common Problems in Water Bottling Plants and How to Fix Them",
      link: "/common-problems-in-water-bottling-plants",
    },
    {
      id: 7,
      image: "/images/home/all-post/p7.png",
      title:
        "How to Choose the Right Capacity Bottling Plant — 24, 30, 60, or 90 BPM?",
      link: "/how-to-choose-the-right-capacity-bottling-plant",
    },
    {
      id: 8,
      image: "/images/home/all-post/p8.png",
      title:
        "30 BPM Water Bottling Plant — Complete Setup, Price & Process (2025 Guide)",
      link: "/30-bpm-water-bottling-plant-complete-setup",
    },
  ];

  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  return (
    <section className="py-10 md:py-15 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top Tabs with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex justify-center items-center space-x-4 mb-12"
        >
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-md font-medium shadow-md transition-all ${
              activeTab === "all"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Posts
          </button>

          <button
            onClick={() => setActiveTab("blogs")}
            className={`px-6 py-2 rounded-md font-medium shadow-md transition-all ${
              activeTab === "blogs"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Blogs
          </button>
        </motion.div>

        {/* Posts Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, index) => (
            <Link key={post.id} href={post.link} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col cursor-pointer"
              >
                <div className="relative w-full h-56 bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    priority
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-[16px] font-semibold text-gray-900 leading-snug">
                    {post.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-md font-medium shadow-md bg-purple-600 text-white hover:bg-purple-700 transition-all"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
