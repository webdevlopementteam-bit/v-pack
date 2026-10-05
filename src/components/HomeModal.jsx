"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { z } from "zod";

const homeFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required."),

  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .min(1, "Mobile number is required.")
    .regex(/^[0-9]+$/, "Mobile number must contain only digits.")
    .length(10, "Mobile number must be exactly 10 digits."),

  service: z.string().trim().min(1, "Please select a service."),

  message: z.string().trim().min(1, "Message is required."),

  isRobot: z.boolean().refine((val) => val === true, {
    message: "Please confirm that you are not a robot.",
  }),
});

export default function HomeModal() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Soft Drink Plant",
    message: "",
  });

  const [isRobot, setIsRobot] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setStatusMessage("");
    setStatusType("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));

    if (errors.phone) {
      setErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }

    setStatusMessage("");
    setStatusType("");
  };

  const handleRobotChange = (e) => {
    const checked = e.target.checked;

    setIsRobot(checked);

    if (checked) {
      setStatusMessage("");
      setStatusType("");
    }

    if (errors.isRobot) {
      setErrors((prev) => ({
        ...prev,
        isRobot: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatusMessage("");
    setStatusType("");
    setErrors({});

    const validationResult = homeFormSchema.safeParse({
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
      /*
       * Split full name into first name and last name
       * without changing the Home Form design.
       */
      const nameParts = formData.fullName.trim().split(/\s+/);

      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const form = new FormData();

      // Web3Forms Access Key
      form.append("access_key", "123456");

      // Form Data
      form.append("first_name", firstName);
      form.append("last_name", lastName);
      form.append("name", formData.fullName.trim());
      form.append("email", formData.email.trim());
      form.append("phone", formData.phone.trim());
      form.append("service", formData.service.trim());
      form.append("message", formData.message.trim());

      // Email Subject
      form.append("subject", "New Home Form Submission - VPack");

      // From Name
      form.append("from_name", "VPack Website - Home Form");

      // Optional redirect prevention
      form.append("redirect", "false");

      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage(
          "Thank you! Your enquiry has been submitted successfully.",
        );
        setStatusType("success");

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "Soft Drink Plant",
          message: "",
        });

        setIsRobot(false);
        setErrors({});

        // Redirect after successful submission
        setTimeout(() => {
          setIsOpen(false);
          router.push("/thank-you");
        }, 800);
      } else {
        setStatusMessage(
          result.message || "Something went wrong. Please try again.",
        );
        setStatusType("error");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);

      setStatusMessage("Something went wrong. Please try again.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-3 py-4 backdrop-blur-[3px] sm:px-5 lg:px-6">
      <div className="relative flex max-h-[94vh] w-full max-w-[1050px] flex-col overflow-y-auto rounded-2xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.35)] animate-modalIn lg:max-h-[90vh] lg:overflow-y-hidden lg:rounded-[22px]">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
          className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#315b78] text-xl leading-none text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-[#24465d] sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        >
          ×
        </button>

        {/* Orange Header */}
        <div className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-7 lg:pt-7">
          <div className="rounded-[20px] bg-gradient-to-r from-[#ed6508] via-[#f36b08] to-[#e86a0a] px-5 py-4 pr-12 shadow-[0_8px_25px_rgba(237,101,8,0.22)] sm:rounded-[24px] sm:px-6 sm:py-5 lg:px-7 lg:py-5">
            <h2 className="text-[16px] font-bold leading-[1.3] text-white sm:text-[16px]">
              A Leading and Trusted Name in Mineral Water Plant and Water
              Treatment Plant Manufacturing, Delivering Advanced,
              High-Performance Solutions.
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col px-4 pb-5 sm:px-6 md:grid md:grid-cols-[1.08fr_0.92fr] md:gap-0 lg:px-7 lg:pb-7">
          {/* RIGHT SIDE - FIRST ON MOBILE */}
          <div className="order-1 flex flex-col items-center justify-center border-t border-gray-100 py-6 text-center md:order-2 md:border-l md:border-t-0 md:pl-7 lg:py-6 lg:pl-8">
            {/* Heading */}
            <div className="max-w-[400px]">
              <div className="mb-2 inline-flex rounded-full bg-[#ed6508]/10 px-4 py-1.5">
                <span className="text-[12px] font-bold uppercase tracking-wide text-[#ed6508]">
                  Quick Assistance
                </span>
              </div>

              <h3 className="text-[20px] font-extrabold leading-tight text-[#303030] sm:text-[23px] lg:text-[22px]">
                Sir, I can save your time!
              </h3>

              <p className="mt-3 text-[14px] font-semibold leading-[1.45] text-[#303030] sm:text-[16px]">
                We give you the best price & options for the machine you need.
                Let’s discuss over chat... We are waiting for your reply.
              </p>
            </div>

            {/* Representative Image */}
            <div className="relative mt-5 h-[230px] w-[230px] overflow-hidden rounded-full border-[6px] border-white bg-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.16)] ring-2 ring-[#ed6508]/20 sm:h-[255px] sm:w-[255px] lg:mt-5 lg:h-[250px] lg:w-[250px]">
              <Image
                src="/images/home-form.png"
                alt="Representative"
                fill
                priority
                sizes="(max-width: 640px) 230px, (max-width: 1024px) 255px, 250px"
                className="object-contain"
              />
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919289589654?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-w-[190px] items-center justify-center rounded-full bg-[#25D366] px-7 py-3 text-[16px] font-bold text-white shadow-[0_8px_20px_rgba(37,211,102,0.28)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#20bd5b] hover:shadow-[0_12px_25px_rgba(37,211,102,0.35)]"
            >
              Chat With Us
            </a>

            <p className="mt-2 text-[11px] text-gray-400">
              Get a quick response on WhatsApp
            </p>
          </div>

          {/* LEFT SIDE - FORM / SECOND ON MOBILE */}
          <div className="order-2 py-6 md:order-1 md:pr-7 lg:py-6 lg:pr-8">
            {/* Form Header */}
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <div className="h-7 w-1 rounded-full bg-[#ed6508] sm:h-8" />

                <h3 className="text-xl font-extrabold text-[#252525] sm:text-[23px]">
                  Get in Touch
                </h3>
              </div>

              <p className="mt-1.5 pl-3 text-[13px] leading-5 text-gray-500 sm:text-sm">
                Fill out the form and our team will get back to you shortly.
              </p>
            </div>

            {/* Form Card */}
            <div className="rounded-xl border border-gray-100 bg-[#fafafa] p-4 shadow-[0_5px_20px_rgba(0,0,0,0.05)] sm:p-5 lg:p-4">
              <form onSubmit={handleSubmit} noValidate className="space-y-3">
                {/* Full Name */}
                <div>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`h-[48px] w-full rounded-lg border bg-white px-4 text-[15px] text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400 focus:border-[#ed6508] focus:ring-2 focus:ring-[#ed6508]/15 ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                  />

                  {errors.fullName && (
                    <span className="mt-1 block text-xs text-red-600">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Email + Phone - Same Row on MD and LG */}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {/* Email */}
                  <div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`h-[48px] w-full rounded-lg border bg-white px-4 text-[15px] text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400 focus:border-[#ed6508] focus:ring-2 focus:ring-[#ed6508]/15 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />

                    {errors.email && (
                      <span className="mt-1 block text-xs text-red-600">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      id="phone"
                      type="text"
                      inputMode="numeric"
                      name="phone"
                      maxLength={10}
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`h-[48px] w-full rounded-lg border bg-white px-4 text-[15px] text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400 focus:border-[#ed6508] focus:ring-2 focus:ring-[#ed6508]/15 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />

                    {errors.phone && (
                      <span className="mt-1 block text-xs text-red-600">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`h-[48px] w-full appearance-none rounded-lg border bg-white px-4 pr-10 text-[15px] text-gray-600 outline-none transition-all duration-200 hover:border-gray-400 focus:border-[#ed6508] focus:ring-2 focus:ring-[#ed6508]/15 ${
                        errors.service ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="Soft Drink Plant">Soft Drink Plant</option>

                      <option value="Mineral Water Plant">
                        Mineral Water Plant
                      </option>

                      <option value="Juice Processing Plant">
                        Juice Processing Plant
                      </option>

                      <option value="Fruit Juice Plant">
                        Fruit Juice Plant
                      </option>

                      <option value="Pet Blow Moulding">
                        Pet Blow Moulding
                      </option>
                    </select>

                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                      ▼
                    </div>
                  </div>

                  {errors.service && (
                    <span className="mt-1 block text-xs text-red-600">
                      {errors.service}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`min-h-[88px] w-full resize-none rounded-lg border bg-white px-4 py-3 text-[15px] text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400 focus:border-[#ed6508] focus:ring-2 focus:ring-[#ed6508]/15 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />

                  {errors.message && (
                    <span className="mt-1 block text-xs text-red-600">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* I am not a robot */}
                <div>
                  <label className="flex w-fit cursor-pointer select-none items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isRobot}
                      onChange={handleRobotChange}
                      className="sr-only peer"
                    />

                    <div className="flex h-7 w-7 items-center justify-center rounded-md border-2 border-gray-300 transition-all duration-200 peer-checked:border-orange-600 peer-checked:bg-orange-600 md:h-9 md:w-9">
                      {isRobot && (
                        <svg
                          className="h-4 w-4 text-white"
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

                    <span className="text-sm font-medium text-gray-700 md:text-[16px]">
                      I am not a robot
                    </span>

                    <Image
                      src="/icons/robot.png"
                      alt="Robot verification"
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded object-contain md:h-19 md:w-19"
                    />
                  </label>

                  {errors.isRobot && (
                    <span className="mt-1 block text-xs text-red-600">
                      {errors.isRobot}
                    </span>
                  )}
                </div>

                {/* Status Message */}
                {statusMessage && (
                  <div
                    className={`rounded-md border p-3 text-sm ${
                      statusType === "success"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-1 w-full rounded-lg bg-gradient-to-r from-[#0877bd] to-[#075f99] px-6 py-3 text-[16px] font-bold text-white shadow-[0_6px_16px_rgba(8,119,189,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_9px_20px_rgba(8,119,189,0.35)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
