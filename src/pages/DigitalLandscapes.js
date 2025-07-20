import React from "react";
import { Link } from "react-router-dom";

export default function DigitalLandscapes() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/" className="text-blue-600 underline mb-6 block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-2">Digital Landscapes Redesign</h1>
      <p className="text-gray-600 mb-6">Walmart · 2024–2025</p>

      <Section title="Context">
        Digital Landscapes is a key internal tool for supplier performance data.
        Users struggled to navigate datasets, apply filters, or compare metrics.
        The redesign supported a broader one-platform strategy.
      </Section>

      <Section title="Challenges">
        <ul className="list-disc pl-5 space-y-1">
          <li>Navigation issues hindered dataset discovery</li>
          <li>Limited interactivity for filtering and comparison</li>
          <li>Insights lacked context and clarity</li>
        </ul>
      </Section>

      <Section title="Solution">
        <ul className="list-disc pl-5 space-y-1">
          <li>Scalable information architecture and entry points</li>
          <li>Reusable chart card components with contextual controls</li>
          <li>Design ops innovations for dynamic handoff</li>
        </ul>
      </Section>

      <Section title="Outcome & Impact">
        <ul className="list-disc pl-5 space-y-1">
          <li>+10.8% increase in tool adoption</li>
          <li>9 reusable components, 4 chart types, 2 templates delivered</li>
          <li>Greater stakeholder engagement and trust in design</li>
        </ul>
      </Section>

      <Section title="Reflection">
        This project required platform thinking, cross-functional influence, and
        a shift in design culture. We built not just a tool, but momentum for a
        larger product vision.
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
