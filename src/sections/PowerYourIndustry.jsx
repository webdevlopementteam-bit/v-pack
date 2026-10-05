"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PowerYourIndustry() {
  const cardsData = [
    {
      id: 1,
      image: "/images/home/Power-Your-Industry/p1.png",
      icon: "💧",
      title: "Mineral Water Plant",
      description:
        "Complete turnkey solutions for hygienic and efficient bottled water production. From purification to bottling—engineered for precision.",
      subtitle: "",
      items: [
        {
          name: "Bopp Labelor",
          link: "/bopp-labelor",
        },
        {
          name: "Industrial RO Plant",
          link: "/industrial-ro-plant",
        },
        {
          name: "Water Storage Tank (SS 304)",
          link: "/ss-water-storage-tank",
        },
        {
          name: "Shrink Wrapping Machine",
          link: "/semi-automatic-shrink-wrapping-machine",
        },
        {
          name: "Bottle RFC Machine",
          link: "/water-bottling-plant-manufacturer",
        },
        {
          name: "Capper Machine",
          link: "/capper-machine-vpcl-40m",
        },
        {
          name: "Sticker Labeling Machine",
          link: "/sticker-labelor-machine",
        },
      ],
      link: "#",
    },
    {
      id: 2,
      image: "/images/home/Power-Your-Industry/p2.png",
      icon: "🍊",
      title: "Fruit Juice Plant",
      description:
        "Whether you're producing mango, guava, orange, or mixed fruit juices, our machines are designed for seamless, hygienic, and high-capacity processing.",
      subtitle: "Products Under Fruit Juice Plant:",
      items: [
        {
          name: "Agitator Tank",
          link: "/agitator-tank",
        },
        {
          name: "Juice RFC Machine",
          link: "/fruit-juice-plant-manufacturer",
        },
        {
          name: "Cooling Tunnel Machine",
          link: "/cooling-tunnel-machine-manufacturer",
        },
      ],
      link: "#",
    },
    {
      id: 3,
      image: "/images/home/Power-Your-Industry/p3.png",
      icon: "🥤",
      title: "Soft Drink Plant",
      description:
        "Our Soft Drink Plant solutions are built for speed, precision, and hygiene — ensuring perfect carbonation, flavor mixing, and bottle-ready output every time.",
      subtitle: "Products Under Soft Drink Plant:",
      items: [
        {
          name: "Sugar Syrup Preparation Tank",
          link: "/sugar-syrup-preparation-tank",
        },
        {
          name: "Carbonator Machine",
          link: "/carbonator",
        },
        {
          name: "Chilling Plant",
          link: "/industrial-chiller-machine",
        },
        {
          name: "Soft Drink RFC Machine",
          link: "/water-bottling-plant-manufacturer",
        },
        {
          name: "Mixing Tank",
          link: "/mixing-tank-1000-l-capacity",
        },
        {
          name: "Filter Press",
          link: "/filterpress",
        },
      ],
      link: "#",
    },
  ];

  return (
    <>
      <section className="py-10 md:py-15 px-4 md:px-8 md:px-15 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center max-w-6xl mx-auto mb-5 sm:mb-8"
          >
            <h3 className="text-[20px]  md:text-3xl font-bold text-gray-800 tracking-tight">
              Power Your Industry
            </h3>

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-blue-600 mt-2 mb-4 leading-tight">
              Discover Our Machines & Solutions
            </h2>

            <p className="text-gray-600 text-[16px] lg:text-[18px] md:text-base leading-relaxed">
              From beverage and water plants to pharma and cosmetics, our
              machines are engineered for precision, efficiency, and durability.
              Find the perfect solution for your industry today!
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {cardsData.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
                className="bg-[#F9FCFF] shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-6 flex flex-col h-full  md:min-h-[820px] lg:min-h-[720px] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col flex-1">
                  {/* Card Image */}
                  <div className="relative w-full h-47 sm:h-50 mb-6 rounded-xl overflow-hidden flex items-center justify-center">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover  p-2"
                    />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-3 text-yellow-400 text-xl sm:text-2xl">
                    {"★★★★★"}
                  </div>

                  {/* Title with Icon */}
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl">{card.icon}</span>

                    <h3 className="text-xl font-bold text-gray-900">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-[16px] sm:text-[17px] leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Subtitle */}
                  {card.subtitle && (
                    <p className="text-[16px] sm:text-[16px] font-semibold text-gray-800 mb-3 tracking-wide">
                      {card.subtitle}
                    </p>
                  )}

                  {/* Items List */}
                  <ul className="space-y-2 mb-8">
                    {card.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center text-[15px]"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5 shrink-0"></span>

                        <Link
                          href={item.link}
                          className="text-blue-700 hover:text-blue-900 no-underline hover:no-underline transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call Now Button */}
                <div className="mt-auto">
                  <Link
                    href="tel:+919135636541"
                    className="inline-flex items-center justify-center w-full py-3 px-6 border-2 border-orange-400 shadow-5xl hover:border-blue-500 hover:bg-orange-500 text-gray-800 hover:text-white font-medium rounded-xl transition-all duration-200"
                  >
                    Call Now &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-2 mt-6"
          >
            <Link
              href="/products"
              className="px-8 py-3.5 bg-indigo-700 hover:bg-indigo-800 text-white font-medium rounded-lg shadow-md transition-all duration-200"
            >
              All Products
            </Link>

            <Link
              href="/about"
              className="px-8 py-3.5 bg-indigo-700 hover:bg-indigo-800 text-white font-medium rounded-lg shadow-md transition-all duration-200"
            >
              About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Banner Section with Smooth Animation */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="w-full h-56 sm:h-76 bg-[#7F7F7F] flex items-center justify-center px-5 overflow-hidden"
      >
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-wide leading-snug sm:leading-tight">
            Mastering the Process: Unveiling Packaging Solutions for Excellence
          </h2>
        </div>
      </motion.section>
    </>
  );
}
