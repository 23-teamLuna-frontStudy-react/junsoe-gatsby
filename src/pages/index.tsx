import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <div>
      <Layout title="Devstickers에 온걸 환영해😋">
        <div></div>
      </Layout>
    </div>
  );
}

export const Head = () => <Seo title="Home" />;
