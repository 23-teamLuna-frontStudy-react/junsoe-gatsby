import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <div>
      <Layout title="Devstickers에 온걸 환영해😋">
        <StaticImage
          height={200}
          src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt="Stickers on the wall"
        />
      </Layout>
    </div>
  );
}

export const Head = () => <Seo title="Home" />;
