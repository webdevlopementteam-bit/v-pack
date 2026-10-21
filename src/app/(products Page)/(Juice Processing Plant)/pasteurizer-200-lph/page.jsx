import React from "react";
import PasteurizerPage from "./Pasteurizer";

export const metadata = {
  title: "",
  description: "",
  keywords: ["", ""],

  alternates: {
    canonical: "/pasteurizer-200-lph",
  },
};

function page() {
  return (
    <>
      <PasteurizerPage />
    </>
  );
}

export default page;
