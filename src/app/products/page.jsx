import React from "react";
import ProductsPage from "./Product";

export const metadata = {
  title: "",
  description: "",
  keywords: ["", ""],

  alternates: {
    canonical: "/products",
  },
};

function page() {
  return (
    <>
      <ProductsPage />
    </>
  );
}

export default page;
