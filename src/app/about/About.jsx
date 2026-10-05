"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Animated Number Counter Component
function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

const testimonials = [
  {
    role: "Beverage Industry Entrepreneur",
    title: "Unmatched Quality & Efficiency!",
    quote:
      "We’ve been using Vpack’s mineral water plant for over a year now, and the performance is flawless. The efficiency and durability of their machines are truly top-notch!",
  },
  {
    role: "Manufacturing Director",
    title: "Precision Engineering at Its Best",
    quote:
      "We purchased a complete CSD plant from Vpack, and it has exceeded our expectations. The quality, technology, and ease of operation make it the best investment we’ve made.",
  },
  {
    role: "Pharma Industry Expert",
    title: "Trusted Partner for Industrial Growth",
    quote:
      "Vpack’s machines are a perfect blend of innovation and reliability. Their team understood our requirements and delivered a customized solution that boosted our productivity significantly!",
  },
  {
    role: "Operations Head, FMCG Industry",
    title: "Reliable Machinery, Exceptional Service",
    quote:
      "Vpack has set a benchmark in industrial automation. Their machines are built to last, and the customer support team is always ready to help. A true game-changer!",
  },
];

export default function AboutUsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-orange-100">
      {/* 1. Hero Section with top1.png */}
      <section className="relative w-full h-[350px] md:h-[350px] flex items-center justify-center overflow-hidden bg-slate-900">
        <Image
          src="/images/about/top1.png"
          alt="About Us Banner"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          className="object-cover object-custom opacity-90"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            About Us
          </h1>
        </motion.div>
      </section>

      {/* 2. Main Intro Section using i1.png and i2.png */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-6"
        >
          {/* i1.png small image or heading context */}

          <span className="text-orange-600 font-semibold uppercase tracking-wider text-sm md:text-[16px]">
            About Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            We Are a Powerful Modern Team in Redefining Industry Standards
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
            At Vpack Machine Pvt. Ltd., we don’t just manufacture machines—we
            revolutionize industries. From mineral water plants to CSD plants,
            beer plants, and pharmaceutical & cosmetics machinery, our
            cutting-edge solutions power businesses worldwide.
          </p>
          <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
            Headquartered in Bawana, Delhi, we have built a reputation for
            precision engineering, innovation, and quality. Every machine we
            craft is a fusion of technology, efficiency, and durability, backed
            by ISO certification.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3.5 rounded-lg shadow-md transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* i2.png main content image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[230px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-slate-200"
        >
          <Image
            src="/images/about/i1.png"
            alt="Modern Team and Machinery"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            className="object-contain"
          />
        </motion.div>
      </section>

      {/* 3. Banner Section */}
      <section
        className="relative w-full min-h-[650px] py-24 px-4 md:px-12 flex items-center justify-center overflow-hidden bg-slate-900 text-white text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about/i2.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/60" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative z-10 max-w-4xl space-y-4 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Precision Manufacturing, Trusted Service, Unmatched Value!
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-200 leading-relaxed">
            At Vpack Machine Pvt. Ltd., we deliver high-quality, ISO-certified
            industrial machinery designed for efficiency and durability. With a
            commitment to innovation and customer satisfaction, we provide
            customized solutions that power industries worldwide.
          </p>
        </motion.div>
      </section>
      {/* 4. Why Choose Us? Section with Animated Counters starting at 0 */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-20 text-center space-y-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-3"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Why Choose Us?
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600">
            At Vpack Machine Pvt. Ltd., we’re not just making machines—we’re{" "}
            <strong className="text-slate-900">
              driving industrial evolution
            </strong>
            .{" "}
            <strong className="text-slate-900">
              Join us in building the future! 🚀
            </strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1: 90% */}
          <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="#FBD7CE"
                  strokeWidth="12"
                  fill="transparent"
                />
                <motion.circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="#FD3101"
                  strokeWidth="12"
                  strokeDasharray="377"
                  initial={{ strokeDashoffset: 377 }}
                  whileInView={{ strokeDashoffset: 377 - (377 * 90) / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-slate-900">
                  <AnimatedCounter value="90" /> %
                </span>
              </div>
            </div>
            <h4 className="text-[16px] lg:text-[18px] font-bold text-slate-800 mt-4">
              Innovative Technology
            </h4>
          </div>

          {/* Stat 2: 40% */}
          <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="#FBD7CE"
                  strokeWidth="12"
                  fill="transparent"
                />
                <motion.circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="#FD3101"
                  strokeWidth="12"
                  strokeDasharray="377"
                  initial={{ strokeDashoffset: 377 }}
                  whileInView={{ strokeDashoffset: 377 - (377 * 40) / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-slate-900">
                  <AnimatedCounter value="40" /> %
                </span>
              </div>
            </div>
            <h4 className="text-[16px] lg:text-[18px] font-bold text-slate-800 mt-4">
              Customization
            </h4>
          </div>

          {/* Stat 3: 100% */}
          <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="#FBD7CE"
                  strokeWidth="12"
                  fill="transparent"
                />
                <motion.circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="#FD3101"
                  strokeWidth="12"
                  strokeDasharray="377"
                  initial={{ strokeDashoffset: 377 }}
                  whileInView={{ strokeDashoffset: 377 - (377 * 100) / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-slate-900">
                  <AnimatedCounter value="100" /> %
                </span>
              </div>
            </div>
            <h4 className="text-[16px] lg:text-[18px] font-bold text-slate-800 mt-4">
              Reliability
            </h4>
          </div>

          {/* Stat 4: 85% */}
          <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="#FBD7CE"
                  strokeWidth="12"
                  fill="transparent"
                />
                <motion.circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="#FD3101"
                  strokeWidth="12"
                  strokeDasharray="377"
                  initial={{ strokeDashoffset: 377 }}
                  whileInView={{ strokeDashoffset: 377 - (377 * 85) / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-slate-900">
                  <AnimatedCounter value="85" /> %
                </span>
              </div>
            </div>
            <h4 className="text-[16px] lg:text-[18px] font-bold text-slate-800 mt-4">
              Expert Support
            </h4>
          </div>
        </div>
      </section>

      {/* 5. What Our Clients Say Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-12 py-16 text-center space-y-8 mb-16">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            What Our Clients Say 🌟
          </h2>
          <p className="text-[16px] lg:text-[18px] font-medium text-[#FD3101] max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold">Vpack Machine Pvt. Ltd. </span>,
            customer satisfaction is at the heart of everything we do. Here’s
            what our clients have to say about our machines, service, and
            commitment to excellence:
          </p>
        </div>

        <div className="min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-3 max-w-2xl mx-auto"
            >
              <h4 className="text-[18px] lg:text-[20px] font-semibold text-slate-900">
                {testimonials[currentTestimonial].role}
              </h4>
              <h5 className="text-[16px] lg:text-[18px] font-bold text-orange-600">
                {testimonials[currentTestimonial].title}
              </h5>
              <p className="text-[16px] lg:text-[18px] text-slate-600 italic">
                “{testimonials[currentTestimonial].quote}”
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2.5 rounded-full transition-all ${
                currentTestimonial === index
                  ? "w-8 bg-orange-600"
                  : "w-2.5 bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
