import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog() {
  return (
    <Layout title="Blog">
      <p>안녕 내 블로그에 온 걸 환영해!</p>
    </Layout>
  );
}

export const Head = () => <Seo title="Blog" />;
