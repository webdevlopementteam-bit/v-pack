import React from "react";
import WaterBottlingPlantPage from "./Water";
import { faqs } from "./faqs";

export const metadata = {
  title: "Best Water Bottling Plant Manufacturer in Delhi | Vpack Machine",
  description:
    "Water bottling plant manufacturer in Delhi: RFC, RO, labeling, packing & PET blow moulding. 24–90 BPM, SS 304. Capacity guide. Get a quote.",
  keywords: [
    "water bottling plant manufacturer",
    "water bottling plant manufacturer in Delhi",
  ],

  alternates: {
    canonical: "/water-bottling-plant",
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
      <WaterBottlingPlantPage />
    </>
  );
}

export default page;
