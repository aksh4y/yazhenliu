import React from "react";

export default function WaveBackground({ darkMode }) {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Back wave layer */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute w-[300%] h-[75%] animate-waveMotion opacity-60"
        style={{
          animationDelay: "0s",
          animationDuration: "18s",
          left: "-50%",
          top: "25%",
        }}
      >
        <path
          fill={darkMode ? "#4a0e2b" : "#fce7f3"}
          d="M0,100 C240,40 480,160 720,100 C960,40 1200,160 1440,100 L1440,320 L0,320 Z"
        />
      </svg>

      {/* Middle wave layer */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute w-[300%] h-[70%] animate-waveMotion opacity-75"
        style={{
          animationDelay: "-8s",
          animationDuration: "14s",
          left: "-50%",
          top: "30%",
        }}
      >
        <path
          fill={darkMode ? "#5c1a3a" : "#f3e8ff"}
          d="M0,80 C360,20 720,140 1080,80 C1260,50 1350,110 1440,80 L1440,320 L0,320 Z"
        />
      </svg>

      {/* Front wave layer */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute w-[300%] h-[65%] animate-waveMotion"
        style={{
          animationDelay: "-3s",
          animationDuration: "11s",
          left: "-50%",
          top: "35%",
        }}
      >
        <path
          fill={darkMode ? "#701a47" : "#fdf2f8"}
          d="M0,60 C480,10 600,120 960,60 C1080,30 1260,90 1440,60 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
}
