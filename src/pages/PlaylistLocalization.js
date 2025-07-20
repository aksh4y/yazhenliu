import React from "react";
import { Link } from "react-router-dom";

export default function PlaylistLocalization() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/" className="text-blue-600 underline mb-6 block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-2">
        Playlist Localization for Global Audiences
      </h1>
      <p className="text-gray-600 mb-6">Spotify · 2021–2022</p>

      <Section title="Context">
        Non-English-speaking Spotify listeners often saw English content,
        limiting performance in emerging markets. Editors used fragmented
        workflows with poor metric visibility.
      </Section>

      <Section title="Challenges">
        <ul className="list-disc pl-5 space-y-1">
          <li>Fragmented playlist variants and duplicated effort</li>
          <li>Disjointed ownership and misaligned metrics</li>
        </ul>
      </Section>

      <Section title="Solution">
        <ul className="list-disc pl-5 space-y-1">
          <li>Mapped and aligned end-to-end editorial workflows</li>
          <li>Centralized interface with built-in translation support</li>
          <li>Mergeable updates to reduce versioning conflicts</li>
        </ul>
      </Section>

      <Section title="Outcome & Impact">
        <ul className="list-disc pl-5 space-y-1">
          <li>+95.6% impression-to-click, +78.7% impression-to-stream</li>
          <li>Localization scaled from 1 to 15 playlists/week</li>
        </ul>
      </Section>

      <Section title="Reflection">
        I introduced async design reviews and clarified team roles, improving
        inclusion and ownership. This unlocked editorial efficiency and
        localized relevance at scale.
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
