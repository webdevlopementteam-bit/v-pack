import React from "react";
import BlogPage from "./Blog";

export const metadata = {
  title: "",
  description: "",
  keywords: ["", ""],

  alternates: {
    canonical: "",
  },
};

function page() {
  return (
    <>
      <BlogPage />
    </>
  );
}

export default page;
