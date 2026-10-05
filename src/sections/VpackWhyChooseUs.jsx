"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Wrench } from "lucide-react";

// Helper component for animated counting numbers using Framer Motion
function Counter({ value, duration = 2 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const numericEnd =
      parseInt(value.toString().replace(/[^0-9]/g, ""), 10) || 0;
    const totalDuration = duration * 1000;

    const updateCount = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / totalDuration, 1);
      // Ease out quad for smooth deceleration
      const easeProgress = progress * (2 - progress);

      setDisplayValue(Math.floor(easeProgress * numericEnd));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(numericEnd);
      }
    };

    const animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  const suffix = value.includes("+") ? "+" : value.includes("%") ? "%" : "";

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function VpackWhyChooseUs() {
  const benefits = [
    {
      title: "Industry Leaders in Machinery Manufacturing",
      desc: "Setting benchmarks in quality and production standards.",
    },
    {
      title: "ISO-Certified & Quality Assured",
      desc: "Rigorous quality checks ensuring global compliance.",
    },
    {
      title: "Trusted by Top Brands",
      desc: "Proudly serving DS Group, Paras Dairy, Old Monk, and many more.",
    },
    {
      title: "Global Reach & Export Network",
      desc: "Delivering machines across Dubai, Kenya, Uganda, Sri Lanka, and beyond.",
    },
    {
      title: "Custom-Built Solutions",
      desc: "Tailor-made machinery to fit your industry needs, ensuring seamless operations.",
    },
    {
      title: "Innovation & Reliability",
      desc: "Backed by a skilled team led by Suman Verma, prioritizing cutting-edge tech.",
    },
  ];

  const progressBarsRef = React.useRef(null);
  const isProgressInView = useInView(progressBarsRef, {
    once: true,
    margin: "0px",
  });

  return (
    <div className="bg-white text-gray-900 font-sans py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* ==================================================== */}
        {/* SECTION 1: WHY CHOOSE US?                            */}
        {/* ==================================================== */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Intro & Metric Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                  Why Choose Us?
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  At{" "}
                  <strong className="text-gray-900 font-semibold">
                    Vpack Machine Pvt. Ltd.
                  </strong>
                  , we don’t just build machines—we engineer{" "}
                  <strong className="text-gray-900 font-semibold">
                    efficiency, precision, and reliability
                  </strong>{" "}
                  for industries that demand the best. From{" "}
                  <strong className="text-gray-900 font-semibold">
                    mineral water and CSD plants to beer, pharma, and cosmetics
                    machinery
                  </strong>
                  , our{" "}
                  <strong className="text-gray-900 font-semibold">
                    ISO-certified
                  </strong>{" "}
                  solutions are trusted by leading brands like{" "}
                  <strong className="text-gray-900 font-semibold">
                    DS Group, Paras Dairy, and Old Monk
                  </strong>
                  . With a strong{" "}
                  <strong className="text-gray-900 font-semibold">
                    pan-India presence and global exports
                  </strong>{" "}
                  to{" "}
                  <strong className="text-gray-900 font-semibold">
                    Dubai, Kenya, Uganda, Sri Lanka
                  </strong>
                  , and beyond, we are committed to delivering{" "}
                  <strong className="text-gray-900 font-semibold">
                    customized, high-performance solutions
                  </strong>{" "}
                  that drive business growth.{" "}
                  <strong className="text-gray-900 font-semibold">
                    Led by industry expert Suman Verma
                  </strong>
                  , our team prioritizes{" "}
                  <strong className="text-gray-900 font-semibold">
                    innovation, durability, and customer satisfaction
                  </strong>
                  , making us the{" "}
                  <strong className="text-gray-900 font-semibold">
                    go-to partner for industrial machinery worldwide
                  </strong>
                  .
                </p>
              </div>

              {/* Metric Cards with Counter */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  { value: "10+", label: "Export Countries" },
                  { value: "14+", label: "Experience" },
                  { value: "500+", label: "Clients" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white border-2 border-orange-500 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl sm:text-4xl font-black text-orange-600 mb-1">
                      <Counter value={stat.value} />
                    </div>
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Checkmark Benefit List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6 bg-gray-50/50 p-6 sm:p-8 rounded-3xl border border-gray-100"
            >
              <ul className="space-y-4">
                {benefits.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="flex-shrink-0 mt-1 bg-green-100 text-green-600 p-1 rounded-full">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900 text-base">
                        {item.title}
                      </span>
                      {item.desc && (
                        <span className="text-gray-600 text-sm block mt-0.5">
                          {item.desc}
                        </span>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "Backed by innovation and trusted by industry leaders, we
                  deliver high-performance machinery tailored to your needs.
                  With precision engineering and global expertise, Vpack ensures
                  reliability, efficiency, and excellence in every machine."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* SECTION 2: OUR EXPERTISE                             */}
        {/* ==================================================== */}
        <section
          ref={progressBarsRef}
          className="pt-10 border-t border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Vibrant Orange Feature Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-md h-72 sm:h-96 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl shadow-xl flex items-center justify-center p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-center text-white z-10 space-y-3">
                  <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Vpack Engineering</h3>
                  <p className="text-orange-100 text-sm max-w-xs mx-auto">
                    Cutting edge machinery solutions built with precision and
                    durability.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Content & Animated Progress Bars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <span className="text-orange-600 font-bold uppercase tracking-widest text-sm block mb-2">
                  Our Expertise
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                  Precision Engineering, Tailored Machinery!
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  <strong className="text-gray-900 font-semibold">
                    Unmatched Performance
                  </strong>{" "}
                  – Delivering{" "}
                  <strong className="text-gray-900 font-semibold">
                    high-speed, efficient, and durable machines
                  </strong>{" "}
                  for water, beverage, and pharma industries.
                </p>
              </div>

              {/* Progress Bars */}
              <div className="space-y-6">
                {[
                  {
                    label: "Best Performance",
                    targetValue: "97%",
                    percentage: 97,
                  },
                  { label: "Success Rate", targetValue: "99%", percentage: 99 },
                  {
                    label: "Industry Segments Served",
                    targetValue: "14+",
                    percentage: 90,
                  },
                ].map((bar, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold text-gray-800">
                      <span>{bar.label}</span>
                      <span className="text-orange-600">
                        <Counter value={bar.targetValue} />
                      </span>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isProgressInView
                            ? { width: `${bar.percentage}%` }
                            : { width: 0 }
                        }
                        transition={{
                          duration: 1.2,
                          delay: idx * 0.2,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
