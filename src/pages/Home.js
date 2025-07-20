import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 pb-24">
      <section className="mb-24">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        <p className="mb-16">
          I’ve worked across industries and problem spaces — from helping
          government teams improve access to digital services, to enabling
          global music editors to localize content at scale. Whether I'm
          building from 0–1 or scaling a system, I focus on clarity,
          collaboration, and designing for real-world complexity.
        </p>

        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.h2>

        <div className="space-y-16">
          <CaseStudy
            title="Digital Landscapes Redesign"
            company="Walmart · 2024–2025"
            link="/case-studies/digital-landscapes"
          />
          <CaseStudy
            title="Playlist Localization Tool"
            company="Spotify · 2021–2022"
            link="/case-studies/playlist-localization"
          />
          <CaseStudy
            title="WebVerify i18n Expansion"
            company="CLEAR · 2021"
            link="/case-studies/webverify-expansion"
          />
          <CaseStudy
            title="Unified Authentication"
            company="CLEAR · 2023–2024"
            link="/case-studies/unified-auth"
          />
        </div>
      </section>
    </main>
  );
}

function CaseStudy({ title, company, link }) {
  return (
    <motion.div
      className="border border-gray-300 p-6 rounded-2xl hover:bg-gray-100 hover:text-black transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Link to={link}>
        <h3 className="text-2xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{company}</p>
      </Link>
    </motion.div>
  );
}
