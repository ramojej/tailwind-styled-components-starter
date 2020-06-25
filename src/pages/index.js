import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { motion } from "framer-motion";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <motion.section
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center"
      >
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        <motion.h2
          animate={{ fontSize: 60, color: "#333" }}
          className="inline-block p-3 mb-4 font-bold bg-yellow-400"
        >
          Hey there! Welcome to your first Gatsby site.
        </motion.h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </motion.section>
    </Layout>
  );
}

export default IndexPage;
