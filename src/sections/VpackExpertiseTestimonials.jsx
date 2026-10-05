"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function VpackExpertiseTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Colby Clarke",
      image: "/images/home/testimoinals/t1.jpeg",
      title: "Sophisticated Design",
      review:
        "Maids table how learn drift but purse stand yet set. Music me house could among oh as their. Piqued our sister shy nature almost his wicket. Hand dear so we hour to. He be hastily offence we be hastily offence effects he service. Sympathize it projection ye insipidity celebrated my pianoforte indulgence.",
      time: "1 Days Ago",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia Martinez",
      image: "/images/home/testimoinals/t2.jpg",
      title: "Exceptional Machinery & Support",
      review:
        "Outstanding performance and build quality. The bottling plant setup exceeded our expectations, and the team provided phenomenal guidance throughout the installation process.",
      time: "3 Days Ago",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-10 md:py-15 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Red Card Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-red-500 rounded-3xl p-8 sm:p-12 text-white shadow-lg flex flex-col justify-center min-h-[380px]"
          >
            <div className="space-y-6 text-center max-w-md mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-snug">
                Launch Your Next Big Project with VPack Expertise
              </h2>
              <p className="text-red-100 text-base sm:text-lg">
                Your big idea deserves powerful machines — we’re ready when you
                are.
              </p>
              <div className="pt-2">
                <Link
                  href="/#"
                  className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-red-500 transition-all duration-300 shadow-sm"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Testimonial Slider Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 relative shadow-sm"
          >
            <div className="space-y-6">
              {/* User Profile & Info */}
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 border-2 border-red-500">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {current.name}
                  </h4>
                  <span className="text-xs text-gray-500">{current.time}</span>
                </div>
              </div>

              {/* Title & Rating */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {current.title}
                </h3>
                <div className="flex space-x-1 text-red-500">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-base leading-relaxed min-h-[100px]">
                "{current.review}"
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-400">
                  {currentIndex + 1} of {testimonials.length}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors text-gray-700"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors text-gray-700"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
