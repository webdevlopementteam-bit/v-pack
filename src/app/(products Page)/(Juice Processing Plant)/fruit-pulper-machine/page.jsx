import React from "react";
import FruitPulperPage from "./Fruit";

export const metadata = {
  title: "",
  description: "",
  keywords: ["", ""],

  alternates: {
    canonical: "/fruit-pulper-machine",
  },
};

function page() {
  return (
    <>
      <FruitPulperPage />
    </>
  );
}

export default page;
