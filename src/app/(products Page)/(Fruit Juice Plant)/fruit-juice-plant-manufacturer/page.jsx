import React from "react";
import FruitJuiceRFCPage from "./Fruit";
import { faqs } from "./faqs";

export const metadata = {
  title: "Best Fruit Juice Plant Manufacturer in Delhi | V-Pack Machine",
  description:
    "Fruit juice plant manufacturer in Delhi: pulper, homogenizer, 200 LPH pasteurizer, 60 BPM juice RFC & cooling tunnel. Mango, orange, guava. Get a quote.",
  keywords: [
    "fruit juice plant manufacturer",
    "fruit juice plant manufacturer in Delhi",
  ],

  alternates: {
    canonical: "/fruit-juice-plant-manufacturer",
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
      <FruitJuiceRFCPage />
    </>
  );
}

export default page;
