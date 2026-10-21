import React from "react";
import BlogPage from "./Blog";

export const metadata = {
  title: "",
  description: "",
  keywords: ["", ""],

  alternates: {
    canonical: "/blog",
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
