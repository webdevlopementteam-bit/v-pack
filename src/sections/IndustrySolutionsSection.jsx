"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export default function IndustrySolutionsSection() {
  // i1 to i10 bottom logos array
  const logos = [
    { id: 1, src: "/icons/bootom_logo/i1.png", alt: "Client Logo 1" },
    { id: 2, src: "/icons/bootom_logo/i2.png", alt: "Client Logo 2" },
    { id: 3, src: "/icons/bootom_logo/i3.png", alt: "Client Logo 3" },
    { id: 4, src: "/icons/bootom_logo/i4.png", alt: "Client Logo 4" },
    { id: 5, src: "/icons/bootom_logo/i5.png", alt: "Client Logo 5" },
    { id: 6, src: "/icons/bootom_logo/i6.png", alt: "Client Logo 6" },
    { id: 7, src: "/icons/bootom_logo/i7.png", alt: "Client Logo 7" },
    { id: 8, src: "/icons/bootom_logo/i8.png", alt: "Client Logo 8" },
    { id: 9, src: "/icons/bootom_logo/i9.png", alt: "Client Logo 9" },
    { id: 10, src: "/icons/bootom_logo/i10.png", alt: "Client Logo 10" },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Top Banner with Background Image */}
      <div className="relative w-full h-[250px] sm:h-[280px] lg:h-[400px] flex items-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/faq/b1.webp"
            alt="Best Machinery & Solutions Background"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            priority
            className="object-contain md:object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Best Machinery & Solutions for Your Industry!
            </h2>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Cutting-edge technology, precision engineering, and reliable
              performance—built for your success.
            </p>
          </motion.div>

          {/* Contact Us Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Swiper Section with Fast Mobile Scroll */}
      <div className="bg-white/40 py-12 px-2 sm:px-6 lg:px-8 md:max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            speed={600} // Fast transition speed on swipe
            freeMode={{
              enabled: true,
              sticky: false,
              momentumBounce: false,
            }}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full py-4 flex items-center"
          >
            {logos.map((logo) => (
              <SwiperSlide
                key={logo.id}
                className="flex justify-center items-center"
              >
                <div className="relative w-44 h-24 bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-shadow">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={80}
                    className="object-contain w-full h-full hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
