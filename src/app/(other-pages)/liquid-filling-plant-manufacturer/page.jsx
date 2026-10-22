import React from "react";
import LiquidFillingPlantPage from "./Liquid";
import { faqs } from "./faqs";

export const metadata = {
  title: "Liquid Filling Plant Manufacturer in Delhi | Vpack Machine",
  description:
    "Liquid filling plant manufacturer in Delhi for water, oil, juice, pharma & cosmetics. 5 ml–5 L, up to 60 BPM, ±2% accuracy, SS 304/316. Get a quote.",
  keywords: [
    "liquid filling plant manufacturer",
    "liquid filling plant manufacturer in Delhi",
  ],

  alternates: {
    canonical: "/liquid-filling-plant-manufacturer",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LiquidFillingPlantPage />
    </>
  );
}

export default page;
