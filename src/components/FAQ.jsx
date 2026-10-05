import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 0,
    q: "1. Do you offer customization for your machines or tanks?",
    a: "Yes, we provide complete customization based on your requirements — from size and capacity to specific materials, fittings, and features. Our engineering team works closely with clients to deliver tailored solutions.",
  },
  {
    id: 1,
    q: "2. What material do you use in your manufacturing process?",
    a: "We primarily use high-grade SS 304 or SS 316 stainless steel, depending on the application. All materials are food-grade and corrosion-resistant to ensure durability and safety.",
  },
  {
    id: 2,
    q: "3. Can I get installation support after delivery?",
    a: "Absolutely! Vpack offers installation guidance, operational training, and after-sales support to ensure your equipment runs smoothly from day one.",
  },
  {
    id: 3,
    q: "4. How long does it take to deliver the product?",
    a: "Delivery timelines vary depending on customization and order quantity. Standard models are usually delivered within 3 to 4 weeks. We’ll provide a clear delivery schedule at the time of order confirmation.",
  },
  {
    id: 4,
    q: "5. Do your products come with a warranty?",
    a: "Yes. All our products are backed by a standard 12-month warranty against manufacturing defects. Extended warranty and Annual Maintenance Contracts (AMC) are also available upon request.",
  },
  {
    id: 5,
    q: "6. What industries do you cater to?",
    a: "We serve a wide range of industries including food & beverage, pharmaceutical, cosmetic, chemical, and confectionery sectors. Our machines are designed to meet both domestic and international compliance standards.",
  },
  {
    id: 6,
    q: "7. Can I schedule a factory visit before placing an order?",
    a: "Definitely! We welcome factory visits. It’s a great opportunity to see our manufacturing process, quality checks, and meet the team. Please contact us to schedule a visit.",
  },
  {
    id: 7,
    q: "8. Do you ship internationally?",
    a: "Yes, we export our products worldwide. We ensure secure packaging and provide all necessary export documentation and support for hassle-free shipping.",
  },
  {
    id: 8,
    q: "9. Is technical support available after purchase?",
    a: "Yes, our team is just a call or email away. We provide lifetime technical support for all our products and are committed to keeping your operations running smoothly.",
  },
  {
    id: 9,
    q: "10. How do I place an order or get a quote?",
    a: "Simply visit our Contact Page, fill out the form, or call us directly. We’ll respond promptly with pricing, availability, and further guidance.",
  },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8"
    >
      {/* Heading */}
      <h3 className="text-2xl font-extrabold text-[#102a43] mb-2">FAQ</h3>
      <p className="text-[16px] md:text-[18px] text-slate-500 mb-6">
        Find quick answers to the most common questions about our products and
        services.
      </p>

      {/* FAQ Items */}
      <div className="space-y-3">
        {faqs.map((faq) => {
          const isOpen = openFaq === faq.id;

          return (
            <div
              key={faq.id}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-blue-50/60 border-blue-200 shadow-sm"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                className="w-full py-4 px-5 text-left flex items-center justify-between font-medium text-slate-800 focus:outline-none cursor-pointer"
              >
                <span className="text-[16px] md:text-[18px]">{faq.q}</span>

                <span
                  className={`transform transition-transform duration-200 text-xs ${
                    isOpen ? "rotate-180 text-blue-600" : "text-slate-500"
                  }`}
                >
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-4 text-[16px] md:text-[18px] text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.id === 1 ? (
                        <span>
                          We primarily use high-grade{" "}
                          <strong>SS 304 or SS 316 stainless steel</strong>,
                          depending on the application. All materials are
                          food-grade and corrosion-resistant to ensure
                          durability and safety.
                        </span>
                      ) : (
                        <span>{faq.a}</span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom Call Now button */}
      <div className="mt-8 max-w-[180px] md:max-w-[200px]">
        <a
          href="tel:+919135636541"
          className="py-3 px-8 bg-white hover:bg-orange-50 text-slate-800 font-medium rounded-xl border border-orange-400 shadow-sm transition-all duration-200 flex items-center gap-2 group cursor-pointer"
        >
          <span>Call Now</span>
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default FAQ;
