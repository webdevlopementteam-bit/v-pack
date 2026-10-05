"use client";

import { useState, useEffect } from "react";

export default function HomeBanner() {
  const words = ["Built.", "Backed.", "Delivered."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(75); // Faster deleting speed
      } else {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(150); // Standard typing speed
      }

      if (!isDeleting && currentText === fullWord) {
        // Pause before deleting starts
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        // Move to the next word
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <main className="w-full bg-gray-50 overflow-hidden">
      {/* Banner Section - Tablet par text upar (items-start) aur image fully show karne ke liye bg-contain */}
      <section className="relative w-full h-[550px] sm:h-[500px] md:h-[600px] lg:h-[650px] bg-[url('/images/home/banner/m1.png')] md:bg-[url('/images/home/banner/b1.png')] bg-cover md:bg-contain bg-bottom md:bg-bottom bg-no-repeat flex items-start pt-14 md:items-start md:pt-16 transition-all duration-500">
        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              From Delhi to the World
              <br />
              <span className="whitespace-normal sm:whitespace-nowrap">
                Vpack Leads the Way{" "}
                <span className="text-[#FF1A44] relative inline-block">
                  {currentText}
                  {/* Cursor */}
                  <span
                    className="animate-pulse text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-red-500 align-baseline ml-0.5"
                    style={{ animationDuration: "1.2s" }}
                  >
                    |
                  </span>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-gray-700 text-[16px] md:text-base font-semimedium  leading-relaxed max-w-xl">
              Vpack Machine Pvt. Ltd. is your trusted partner for advanced,
              reliable machinery solutions in the water, beverage, and pharma
              sectors. With a global presence and a commitment to excellence, we
              deliver tailored, high-performance machines to meet your
              industry&apos;s unique needs.
            </p>

            {/* Buttons */}
            <div className="mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a
                href="/products"
                className="bg-[#FF4500] hover:bg-[#4A45D2] text-white font-medium px-5 py-1 sm:px-8 sm:py-3 rounded shadow-md transition duration-300"
              >
                Products
              </a>
              <a
                href="/contact"
                className="bg-[#FF4500] hover:bg-[#4A45D2] text-white font-medium px-5 py-1 sm:px-8 sm:py-3 rounded shadow-md transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
