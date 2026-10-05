"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { z } from "zod";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Zod validation schema
const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),

  lastName: z.string().trim().min(1, "Last name is required."),

  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address."),

  numbers: z
    .string()
    .trim()
    .min(1, "Mobile number is required.")
    .regex(/^[0-9]+$/, "Mobile number must contain only digits.")
    .min(10, "Mobile number must be at least 10 digits.")
    .max(12, "Mobile number must not exceed 12 digits."),

  message: z.string().trim().min(1, "Message is required."),

  isRobot: z.boolean().refine((val) => val === true, {
    message: "Please confirm that you are not a robot.",
  }),
});

export default function ContactUsPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    numbers: "",
    message: "",
  });

  const [isRobot, setIsRobot] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatusMessage("");
    setStatusType("");
    setErrors({});

    const validationResult = contactSchema.safeParse({
      ...formData,
      isRobot,
    });

    if (!validationResult.success) {
      const fieldErrors = {};

      validationResult.error.issues.forEach((err) => {
        const path = err.path[0];

        if (path && !fieldErrors[path]) {
          fieldErrors[path] = err.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const form = new FormData();

      // Web3Forms Access Key
      form.append("access_key", "60ca872b-d91c-40f9-b0ca-c61a9b94096c");

      // Form data
      form.append("first_name", formData.firstName.trim());
      form.append("last_name", formData.lastName.trim());
      form.append("email", formData.email.trim());
      form.append("phone", formData.numbers.trim());
      form.append("message", formData.message.trim());

      // Email subject
      form.append("subject", "New Contact Form Submission - VPack");

      // From name
      form.append("from_name", "VPack Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        router.push("/thank-you");
      } else {
        setStatusMessage(
          result.message || "Something went wrong. Please try again.",
        );
        setStatusType("error");
      }
    } catch (error) {
      setStatusMessage("Something went wrong. Please try again.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      title: "Premium Quality Solutions",
      desc: "Discover the highest standards in industrial machinery and equipment, engineered for optimal performance and reliability.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.121 2.121 0 0020.25 18l-5.83-5.83m-3.01 3.01l-4.24-4.24a3 3 0 114.24-4.24l4.24 4.24M7.5 10.5L4.5 7.5a2.121 2.121 0 013-3l3 3"
        />
      ),
    },
    {
      title: "Secure & Reliable Equipment",
      desc: "Stay updated on the latest industry trends and product advancements to keep your production line ahead of the curve.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      ),
    },
    {
      title: "Comprehensive Support",
      desc: "Get personalized assistance and timely updates to optimize your machinery, ensuring your business stays efficient and productive.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 013 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v4.5m0 0h-12"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans overflow-x-hidden">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative w-full h-[280px] md:h-[430px] overflow-hidden bg-slate-950">
        <Image
          src="/images/contact/t1.png"
          alt="Contact Us Header"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-orange-950/40" />

        {/* Decorative glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              VPack Machine
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-2xl text-white/80 text-sm sm:text-base md:text-lg"
          >
            Let&apos;s discuss your industrial machinery requirements and build
            the right solution for your production needs.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-orange-500 rounded-full mt-6"
          />
        </div>
      </section>

      {/* =========================================================
          INTRO + FEATURES
      ========================================================= */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"
      >
        {/* Decorative background */}
        <div className="absolute top-20 left-0 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-80 pointer-events-none" />

        {/* Section Header */}
        <div className="relative text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-orange-600 font-bold uppercase tracking-[0.18em] text-xs sm:text-sm"
          >
            <span className="w-8 h-[2px] bg-orange-600" />
            Contact Us
            <span className="w-8 h-[2px] bg-orange-600" />
          </motion.span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch with{" "}
            <span className="text-orange-600">VPack Machine</span>
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We&apos;re here to provide you with the best industrial machinery
            solutions, tailored support, and the highest quality standards for
            your business. Reach out to us for expert advice and services!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="relative group overflow-hidden bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Top orange line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Background hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50 group-hover:from-orange-50/80 group-hover:to-white transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-300">
                  <svg
                    className="w-9 h-9 text-orange-600 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    viewBox="0 0 24 24"
                  >
                    {card.icon}
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-slate-900 text-center mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>

      {/* =========================================================
          CONTACT FORM SECTION
      ========================================================= */}
      <section className="relative w-full pt-[180px] md:pt-[260px] pb-20 md:pb-28 bg-white overflow-hidden">
        {/* Background Banner */}
        <div className="absolute top-0 left-0 right-0 h-[260px] md:h-[400px] overflow-hidden">
          <Image
            src="/images/contact/contact.jpg"
            alt="Background Banner"
            fill
            sizes="100vw"
            className="w-full h-full object-cover object-[center_30%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-orange-950/50" />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-white" />
        </div>

        {/* Dark background fallback */}
        <div className="absolute top-0 left-0 right-0 h-[260px] md:h-[400px] bg-slate-950 -z-10" />

        {/* Main Card */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative bg-white rounded-3xl shadow-[0_25px_70px_rgba(15,23,42,0.18)] overflow-hidden border border-slate-100"
          >
            {/* Orange accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500" />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* =================================================
                  FORM COLUMN
              ================================================= */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="mb-8">
                  <span className="text-orange-600 font-bold uppercase tracking-[0.15em] text-xs">
                    Send a Message
                  </span>

                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Tell Us What You Need
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    Fill out the form below and our team will get back to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* First + Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        First Name <span className="text-orange-600">*</span>
                      </label>

                      <div className="relative">
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            });

                            if (errors.firstName) {
                              setErrors({
                                ...errors,
                                firstName: "",
                              });
                            }
                          }}
                          className={`w-full bg-slate-50 border ${
                            errors.firstName
                              ? "border-red-400 ring-2 ring-red-100"
                              : "border-slate-200"
                          } rounded-xl px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-200`}
                          placeholder="First Name"
                        />
                      </div>

                      <span className="text-xs text-gray-400 mt-1.5 block">
                        First
                      </span>

                      {errors.firstName && (
                        <span className="text-xs text-red-600 mt-1 block">
                          {errors.firstName}
                        </span>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Last Name <span className="text-orange-600">*</span>
                      </label>

                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          });

                          if (errors.lastName) {
                            setErrors({
                              ...errors,
                              lastName: "",
                            });
                          }
                        }}
                        className={`w-full bg-slate-50 border ${
                          errors.lastName
                            ? "border-red-400 ring-2 ring-red-100"
                            : "border-slate-200"
                        } rounded-xl px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-200`}
                        placeholder="Last Name"
                      />

                      <span className="text-xs text-gray-400 mt-1.5 block">
                        Last
                      </span>

                      {errors.lastName && (
                        <span className="text-xs text-red-600 mt-1 block">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email <span className="text-orange-600">*</span>
                    </label>

                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });

                        if (errors.email) {
                          setErrors({
                            ...errors,
                            email: "",
                          });
                        }
                      }}
                      className={`w-full bg-slate-50 border ${
                        errors.email
                          ? "border-red-400 ring-2 ring-red-100"
                          : "border-slate-200"
                      } rounded-xl px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-200`}
                      placeholder="Enter your email"
                    />

                    {errors.email && (
                      <span className="text-xs text-red-600 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Mobile Number <span className="text-orange-600">*</span>
                    </label>

                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500 pointer-events-none">
                        +91
                      </div>

                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={10}
                        value={formData.numbers}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);

                          setFormData({
                            ...formData,
                            numbers: value,
                          });

                          if (errors.numbers) {
                            setErrors({
                              ...errors,
                              numbers: "",
                            });
                          }
                        }}
                        className={`w-full bg-slate-50 border ${
                          errors.numbers
                            ? "border-red-400 ring-2 ring-red-100"
                            : "border-slate-200"
                        } rounded-xl pl-14 pr-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-200`}
                        placeholder="Enter 10-digit mobile number"
                      />
                    </div>

                    <span className="text-xs text-gray-400 mt-1.5 block">
                      Enter exactly 10 digits
                    </span>

                    {errors.numbers && (
                      <span className="text-xs text-red-600 mt-1 block">
                        {errors.numbers}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Comment or Message{" "}
                      <span className="text-orange-600">*</span>
                    </label>

                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        });

                        if (errors.message) {
                          setErrors({
                            ...errors,
                            message: "",
                          });
                        }
                      }}
                      className={`w-full bg-slate-50 border ${
                        errors.message
                          ? "border-red-400 ring-2 ring-red-100"
                          : "border-slate-200"
                      } rounded-xl px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-200 resize-y`}
                      placeholder="Tell us about your requirement..."
                    />

                    {errors.message && (
                      <span className="text-xs text-red-600 mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Robot Verification */}
                  <div>
                    <div className="inline-flex items-center gap-4 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={isRobot}
                          onChange={(e) => {
                            setIsRobot(e.target.checked);

                            if (e.target.checked) {
                              setStatusMessage("");
                              setStatusType("");
                            }

                            if (errors.isRobot) {
                              setErrors({
                                ...errors,
                                isRobot: "",
                              });
                            }
                          }}
                          className="sr-only peer"
                        />

                        <div className="w-7 h-7 border-2 border-slate-300 rounded-lg bg-white flex items-center justify-center peer-checked:bg-orange-600 peer-checked:border-orange-600 transition-all duration-200 shadow-sm">
                          {isRobot && (
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>

                        <span className="text-sm font-semibold text-slate-700">
                          I am not a robot
                        </span>
                      </label>

                      <Image
                        src="/icons/robot.png"
                        alt="Robot verification"
                        width={64}
                        height={64}
                        className="w-12 h-12 object-contain rounded-lg"
                      />
                    </div>

                    {errors.isRobot && (
                      <span className="text-xs text-red-600 mt-1 block">
                        {errors.isRobot}
                      </span>
                    )}
                  </div>

                  {/* Status Message */}
                  {statusMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl text-sm ${
                        statusType === "success"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {statusMessage}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full sm:w-auto min-w-[180px] overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-base shadow-lg shadow-orange-600/20 hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-0.5"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="w-5 h-5 animate-spin"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Send Enquiry
                            <svg
                              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14m-6-6l6 6-6 6"
                              />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              {/* =================================================
                  RIGHT INFORMATION COLUMN
              ================================================= */}
              <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-7 sm:p-9 md:p-12 text-white overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-600/20 rounded-full blur-2xl" />

                <div className="absolute -bottom-28 -left-28 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-[0.15em] text-xs">
                    <span className="w-8 h-[2px] bg-orange-500" />
                    Let&apos;s Connect
                  </span>

                  <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                    For More Details{" "}
                    <span className="text-orange-500">Contact Us!</span>
                  </h2>

                  <div className="w-16 h-1 bg-orange-500 rounded-full mt-6" />

                  <p className="mt-7 text-white/70 text-base md:text-lg leading-relaxed">
                    Efficiency and innovation are key to the perfect industrial
                    setup. Here, we provide expert insights to optimize your
                    production line with cutting-edge solutions. Transform your
                    operations with VPack—where quality meets precision. 🚀
                  </p>

                  {/* Contact Details */}
                  <div className="mt-10 space-y-4 md:space-y-8">
                    {/* Email */}
                    <a
                      href="mailto:suman@vermaprocesspack.com"
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-orange-600/15 hover:border-orange-500/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-orange-600/15 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-all duration-300">
                        <svg
                          className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-white/45 uppercase tracking-wider font-semibold">
                          Email
                        </p>

                        <p className="text-sm sm:text-base font-semibold text-white group-hover:text-orange-300 transition-colors break-all">
                          suman@vermaprocesspack.com
                        </p>
                      </div>
                    </a>

                    {/* Phone 1 */}
                    <a
                      href="tel:+919135636541"
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-orange-600/15 hover:border-orange-500/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-orange-600/15 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-all duration-300">
                        <svg
                          className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-.988a1.125 1.125 0 00-1.173.417l-.97 1.293c-.106.141-.269.216-.446.216a12.75 12.75 0 01-10.683-10.683c0-.177.075-.34.216-.446l1.293-.97c.357-.268.51-.728.417-1.173L4.852 2.852A1.125 1.125 0 003.762 2H2.25A2.25 2.25 0 000 4.25v2.5z"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="text-xs text-white/45 uppercase tracking-wider font-semibold">
                          Phone
                        </p>

                        <p className="text-base sm:text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                          +91 91356 36541
                        </p>
                      </div>
                    </a>

                    {/* Phone 2 */}
                    <a
                      href="tel:+918448868851"
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-orange-600/15 hover:border-orange-500/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-orange-600/15 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-all duration-300">
                        <svg
                          className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-.988a1.125 1.125 0 00-1.173.417l-.97 1.293c-.106.141-.269.216-.446.216a12.75 12.75 0 01-10.683-10.683c0-.177.075-.34.216-.446l1.293-.97c.357-.268.51-.728.417-1.173L4.852 2.852A1.125 1.125 0 003.762 2H2.25A2.25 2.25 0 000 4.25v2.5z"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="text-xs text-white/45 uppercase tracking-wider font-semibold">
                          Phone
                        </p>

                        <p className="text-base sm:text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                          +91 84488 68851
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
