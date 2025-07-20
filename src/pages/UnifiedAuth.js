import React from "react";
import { Link } from "react-router-dom";

export default function UnifiedAuth() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/" className="text-blue-600 underline mb-6 block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-2">
        Unified Authentication Across CLEAR Platforms
      </h1>
      <p className="text-gray-600 mb-6">CLEAR · 2023–2024</p>

      <Section title="Context">
        Authentication was fragmented across CLEAR’s apps, leading to duplicated
        user profiles, friction, and security risks.
      </Section>

      <Section title="Challenges">
        <ul className="list-disc pl-5 space-y-1">
          <li>56% of users lacked passwords, breaking login UX</li>
          <li>Account duplication and poor fraud detection</li>
          <li>No shared identity model across platforms</li>
        </ul>
      </Section>

      <Section title="Solution">
        <ul className="list-disc pl-5 space-y-1">
          <li>Cross-team workshops and aligned auth vision</li>
          <li>Phone-based OTP login for My.CLEARME</li>
          <li>HIPAA-compliant kiosk flow for healthcare partners</li>
        </ul>
      </Section>

      <Section title="Outcome & Impact">
        <ul className="list-disc pl-5 space-y-1">
          <li>99% login success with OTP</li>
          <li>Account duplication reduced to under 1%</li>
          <li>Foundation for scalable identity architecture</li>
        </ul>
      </Section>

      <Section title="Reflection">
        Unifying auth required systems thinking and change management. The
        resulting model strengthened both UX and brand trust across industries.
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
