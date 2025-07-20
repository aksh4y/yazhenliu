import React from "react";
import { Link } from "react-router-dom";

export default function WebVerifyExpansion() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/" className="text-blue-600 underline mb-6 block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-2">WebVerify i18n Expansion</h1>
      <p className="text-gray-600 mb-6">CLEAR · 2021</p>

      <Section title="Context">
        CLEAR needed to launch verification in Mexico and Canada within 3
        months. Canada had document misuse; Mexico required manual CURP input
        prone to errors.
      </Section>

      <Section title="Challenges">
        <ul className="list-disc pl-5 space-y-1">
          <li>CURP formatting and accuracy issues in Mexico</li>
          <li>High rate of invalid uploads in Canada (e.g. health cards)</li>
        </ul>
      </Section>

      <Section title="Solution">
        <ul className="list-disc pl-5 space-y-1">
          <li>Self-attestation MVP to meet contractual deadline</li>
          <li>Localized doc selector and backend API mapping</li>
          <li>Improved UX around document validity upfront</li>
        </ul>
      </Section>

      <Section title="Outcome & Impact">
        <ul className="list-disc pl-5 space-y-1">
          <li>Reduced Canadian health card uploads by 98.8%</li>
          <li>10% of weekly verification volume from MX & CA</li>
          <li>Better doc routing, fewer API errors and costs</li>
        </ul>
      </Section>

      <Section title="Reflection">
        The project showed how fast-paced, international UX demands flexible
        frameworks. Regional context, not just translation, drove success.
      </Section>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
