import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

import Home from "./pages/Home";
import DigitalLandscapes from "./pages/DigitalLandscapes";
import PlaylistLocalization from "./pages/PlaylistLocalization";
import WebVerifyExpansion from "./pages/WebVerifyExpansion";
import UnifiedAuth from "./pages/UnifiedAuth";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Create separate springs for each blob with different characteristics
  const pinkSpringX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const pinkSpringY = useSpring(mouseY, { stiffness: 80, damping: 25 });
  const blueSpringX = useSpring(mouseX, { stiffness: 90, damping: 35 });
  const blueSpringY = useSpring(mouseY, { stiffness: 90, damping: 35 });
  const purpleSpringX = useSpring(mouseX, { stiffness: 70, damping: 20 });
  const purpleSpringY = useSpring(mouseY, { stiffness: 70, damping: 20 });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rawX = (e.clientX - rect.left - centerX) * 0.15;
    const rawY = (e.clientY - rect.top - centerY) * 0.15;

    // Restrict Y movement to prevent going too far down
    const clampedY = Math.max(rawY, -30); // Prevents moving more than 30px down

    mouseX.set(rawX);
    mouseY.set(clampedY);
  };

  const [flippedCards, setFlippedCards] = useState({
    "digital-landscapes": false,
    "playlist-localization": false,
    "webverify-expansion": false,
    "unified-auth": false,
  });

  const handleCardFlip = (card) => {
    setFlippedCards((prevState) => {
      // Close all other cards first
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      // Then toggle the clicked card
      newState[card] = !prevState[card];
      return newState;
    });
  };

  const caseStudyData = {
    "digital-landscapes": {
      title: "Digital Landscapes Redesign",
      company: "Walmart · 2024–2025",
      summary:
        "Redesigned a key internal tool for supplier performance data, improving navigation and user experience with scalable components.",
      details: {
        context:
          "Walmart needed a more efficient way to manage supplier performance data.",
        challenges: [
          "Improving navigation and user experience",
          "Scalability for future growth",
        ],
        solution: [
          "Redesigned the interface with intuitive navigation",
          "Implemented scalable components for data visualization",
        ],
        impact: [
          "+10.8% adoption increase",
          "Improved data accessibility and usability",
        ],
      },
    },
    "playlist-localization": {
      title: "Playlist Localization Tool",
      company: "Spotify · 2021–2022",
      summary: "Global content scaling for playlists.",
      details: {
        context: "Spotify needed to support multiple languages for playlists.",
        challenges: [
          "Handling diverse language requirements",
          "Maintaining consistency across languages",
        ],
        solution: [
          "Developed a localization tool for playlist content",
          "Implemented language-specific design adjustments",
        ],
        impact: [
          "Global content scaling",
          "Enhanced user experience for multilingual users",
        ],
      },
    },
    "webverify-expansion": {
      title: "WebVerify i18n Expansion",
      company: "CLEAR · 2021",
      summary: "98.8% error reduction in internationalization.",
      details: {
        context: "CLEAR needed to expand WebVerify for international use.",
        challenges: [
          "Handling multiple languages",
          "Ensuring accuracy in translations",
        ],
        solution: [
          "Implemented i18n support for WebVerify",
          "Conducted thorough testing for accuracy",
        ],
        impact: [
          "98.8% error reduction",
          "Improved international user experience",
        ],
      },
    },
    "unified-auth": {
      title: "Unified Authentication",
      company: "CLEAR · 2023–2024",
      summary:
        "Streamlined authentication across multiple platforms and user types.",
      details: {
        context:
          "CLEAR aimed to unify authentication processes for various platforms.",
        challenges: [
          "Consistency across platforms",
          "Handling different user types",
        ],
        solution: [
          "Designed a unified authentication system",
          "Implemented across multiple platforms",
        ],
        impact: [
          "Cross-platform unification",
          "Enhanced security and user experience",
        ],
      },
    },
  };

  return (
    <div
      className={`min-h-screen overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Dark mode toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full border border-current flex items-center justify-center hover:bg-current hover:text-white transition-all duration-300"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Abstract shapes */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Yellow blob */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "linear-gradient(135deg, #f3e8a6 0%, #e6d875 100%)",
            top: "-20%",
            left: "-20%",
            x: springX,
            y: springY,
          }}
          animate={{
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 10, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pink blob with offset motion */}
        <motion.div
          className="absolute w-[500px] h-[700px]"
          style={{
            background: "linear-gradient(45deg, #f4c2c2 0%, #e8a5a5 100%)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            top: "10%",
            left: "-15%",
          }}
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "70% 30% 60% 40% / 40% 70% 60% 30%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
            x: [-60, 40, -20, -60],
            y: [30, -50, 10, 30],
            rotate: [0, -8, 12, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blue blob with different flow */}
        <motion.div
          className="absolute w-[550px] h-[600px]"
          style={{
            background: "linear-gradient(225deg, #b8d4f0 0%, #8bb5d9 100%)",
            borderRadius: "40% 60% 60% 40% / 60% 30% 70% 40%",
            bottom: "-10%",
            right: "-20%",
          }}
          animate={{
            borderRadius: [
              "40% 60% 60% 40% / 60% 30% 70% 40%",
              "60% 40% 40% 60% / 40% 60% 30% 70%",
              "50% 50% 50% 50% / 50% 50% 50% 50%",
              "40% 60% 60% 40% / 60% 30% 70% 40%",
            ],
            x: [80, -20, 60, 80],
            y: [-60, 40, -30, -60],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple blob */}
        <motion.div
          className="absolute w-[400px] h-[500px]"
          style={{
            background: "linear-gradient(180deg, #c8b8e8 0%, #b5a3d9 100%)",
            borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%",
            top: "40%",
            right: "10%",
          }}
          animate={{
            borderRadius: [
              "70% 30% 50% 50% / 40% 60% 40% 60%",
              "30% 70% 40% 60% / 60% 40% 60% 40%",
              "50% 50% 70% 30% / 50% 50% 30% 70%",
              "70% 30% 50% 50% / 40% 60% 40% 60%",
            ],
            x: [-40, 60, -10, -40],
            y: [50, -30, 20, 50],
            rotate: [0, 15, -10, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Illustration blob */}
        <motion.div
          className="fixed w-[350px] h-[350px] overflow-hidden z-10"
          style={{
            top: "10%",
            right: "5%",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          }}
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -20, 12, 0],
            rotate: [0, -3, 5, 0],
            scale: [1, 1.02, 0.98, 1],
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "70% 30% 60% 40% / 40% 70% 60% 30%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/illustration.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Mouse-reactive overlay blobs */}
        <motion.div
          className="absolute w-[500px] h-[700px] opacity-30"
          style={{
            background: "linear-gradient(45deg, #f4c2c2 0%, #e8a5a5 100%)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            top: "10%",
            left: "-15%",
            x: pinkSpringX,
            y: pinkSpringY,
            scale: 0.8,
          }}
        />

        <motion.div
          className="absolute w-[550px] h-[600px] opacity-30"
          style={{
            background: "linear-gradient(225deg, #b8d4f0 0%, #8bb5d9 100%)",
            borderRadius: "40% 60% 60% 40% / 60% 30% 70% 40%",
            bottom: "-10%",
            right: "-20%",
            x: blueSpringX,
            y: blueSpringY,
            scale: 0.7,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
        <div className="max-w-2xl">
          <motion.h1
            className={`text-6xl md:text-7xl font-light mb-8 ${
              darkMode ? "text-blue-200" : "text-blue-300"
            }`}
            style={{
              x: springX,
              y: springY,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hi, I'm Yazhen.
          </motion.h1>

          <motion.div
            className={`space-y-4 text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <p>
              I'm currently a Sr product designer at{" "}
              <a href="#" className="underline hover:no-underline">
                CLEAR
              </a>{" "}
              working on a B2B console and the end user identity verification
              experiences. I have previously worked at Spotify, where I focused
              on building internal tooling, and at ICF Next in gov-tech.
            </p>
            <p>
              I love designing delightful experiences that can improve people's
              lives.
            </p>
            <a
              href="/resume.pdf"
              download
              className={`inline-block mt-6 ${
                darkMode ? "text-blue-300" : "text-blue-400"
              } underline hover:no-underline`}
            >
              Download my resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="relative z-10 px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className={`text-4xl font-light mb-12 text-center ${
              darkMode ? "text-blue-200" : "text-blue-300"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Case Studies
          </motion.h2>

          <AnimatePresence mode="wait">
            {Object.values(flippedCards).some(Boolean) ? (
              /* Single flipped card view */
              <motion.div
                key="detailed-view"
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <AnimatePresence>
                  {flippedCards["digital-landscapes"] && (
                    <motion.div
                      key="digital-landscapes-detail"
                      className={`rounded-2xl border p-8 ${
                        darkMode
                          ? "bg-gray-800/50 border-gray-700"
                          : "bg-white/50 border-gray-200"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, delay: 0.1 }}
                      >
                        <div>
                          <h3
                            className={`text-3xl font-semibold mb-2 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {caseStudyData["digital-landscapes"].title}
                          </h3>
                          <p
                            className={`text-lg mb-4 ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {caseStudyData["digital-landscapes"].company}
                          </p>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Context
                          </h4>
                          <p
                            className={`text-base leading-relaxed ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {
                              caseStudyData["digital-landscapes"].details
                                .context
                            }
                          </p>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Challenges
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData[
                              "digital-landscapes"
                            ].details.challenges.map((challenge, i) => (
                              <li key={i}>{challenge}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Solution
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData[
                              "digital-landscapes"
                            ].details.solution.map((solution, i) => (
                              <li key={i}>{solution}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Impact
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData[
                              "digital-landscapes"
                            ].details.impact.map((impact, i) => (
                              <li key={i}>{impact}</li>
                            ))}
                          </ul>
                        </div>

                        <button
                          className={`text-base font-medium ${
                            darkMode ? "text-blue-300" : "text-blue-500"
                          } hover:underline`}
                          onClick={() => handleCardFlip("digital-landscapes")}
                        >
                          ← Back to all case studies
                        </button>
                      </motion.div>
                    </motion.div>
                  )}

                  {flippedCards["playlist-localization"] && (
                    <motion.div
                      key="playlist-localization-detail"
                      className={`rounded-2xl border p-8 ${
                        darkMode
                          ? "bg-gray-800/50 border-gray-700"
                          : "bg-white/50 border-gray-200"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, delay: 0.1 }}
                      >
                        {/* Similar structure for other cards */}
                        <div>
                          <h3
                            className={`text-3xl font-semibold mb-2 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {caseStudyData["playlist-localization"].title}
                          </h3>
                          <p
                            className={`text-lg mb-4 ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {caseStudyData["playlist-localization"].company}
                          </p>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Context
                          </h4>
                          <p
                            className={`text-base leading-relaxed ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {
                              caseStudyData["playlist-localization"].details
                                .context
                            }
                          </p>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Challenges
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData[
                              "playlist-localization"
                            ].details.challenges.map((challenge, i) => (
                              <li key={i}>{challenge}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Solution
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData[
                              "playlist-localization"
                            ].details.solution.map((solution, i) => (
                              <li key={i}>{solution}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Impact
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData[
                              "playlist-localization"
                            ].details.impact.map((impact, i) => (
                              <li key={i}>{impact}</li>
                            ))}
                          </ul>
                        </div>

                        <button
                          className={`text-base font-medium ${
                            darkMode ? "text-blue-300" : "text-blue-500"
                          } hover:underline`}
                          onClick={() =>
                            handleCardFlip("playlist-localization")
                          }
                        >
                          ← Back to all case studies
                        </button>
                      </motion.div>
                    </motion.div>
                  )}

                  {flippedCards["webverify-expansion"] && (
                    <motion.div
                      key="webverify-expansion-detail"
                      className={`rounded-2xl border p-8 ${
                        darkMode
                          ? "bg-gray-800/50 border-gray-700"
                          : "bg-white/50 border-gray-200"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, delay: 0.1 }}
                      >
                        <div>
                          <h3
                            className={`text-3xl font-semibold mb-2 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {caseStudyData["webverify-expansion"].title}
                          </h3>
                          <p
                            className={`text-lg mb-4 ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {caseStudyData["webverify-expansion"].company}
                          </p>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Context
                          </h4>
                          <p
                            className={`text-base leading-relaxed ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {
                              caseStudyData["webverify-expansion"].details
                                .context
                            }
                          </p>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Challenges
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData[
                              "webverify-expansion"
                            ].details.challenges.map((challenge, i) => (
                              <li key={i}>{challenge}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Solution
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData[
                              "webverify-expansion"
                            ].details.solution.map((solution, i) => (
                              <li key={i}>{solution}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Impact
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData[
                              "webverify-expansion"
                            ].details.impact.map((impact, i) => (
                              <li key={i}>{impact}</li>
                            ))}
                          </ul>
                        </div>

                        <button
                          className={`text-base font-medium ${
                            darkMode ? "text-blue-300" : "text-blue-500"
                          } hover:underline`}
                          onClick={() => handleCardFlip("webverify-expansion")}
                        >
                          ← Back to all case studies
                        </button>
                      </motion.div>
                    </motion.div>
                  )}

                  {flippedCards["unified-auth"] && (
                    <motion.div
                      key="unified-auth-detail"
                      className={`rounded-2xl border p-8 ${
                        darkMode
                          ? "bg-gray-800/50 border-gray-700"
                          : "bg-white/50 border-gray-200"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, delay: 0.1 }}
                      >
                        <div>
                          <h3
                            className={`text-3xl font-semibold mb-2 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {caseStudyData["unified-auth"].title}
                          </h3>
                          <p
                            className={`text-lg mb-4 ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {caseStudyData["unified-auth"].company}
                          </p>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Context
                          </h4>
                          <p
                            className={`text-base leading-relaxed ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData["unified-auth"].details.context}
                          </p>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Challenges
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData[
                              "unified-auth"
                            ].details.challenges.map((challenge, i) => (
                              <li key={i}>{challenge}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Solution
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData["unified-auth"].details.solution.map(
                              (solution, i) => (
                                <li key={i}>{solution}</li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4
                            className={`text-xl font-semibold mb-3 ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Impact
                          </h4>
                          <ul
                            className={`list-disc pl-6 space-y-2 text-base ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {caseStudyData["unified-auth"].details.impact.map(
                              (impact, i) => (
                                <li key={i}>{impact}</li>
                              )
                            )}
                          </ul>
                        </div>

                        <button
                          className={`text-base font-medium ${
                            darkMode ? "text-blue-300" : "text-blue-500"
                          } hover:underline`}
                          onClick={() => handleCardFlip("unified-auth")}
                        >
                          ← Back to all case studies
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* Bento Grid - Default view */
              <motion.div
                key="grid-view"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]"
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -180 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Digital Landscapes - Large */}
                <motion.div
                  className={`md:col-span-2 lg:row-span-2 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
                      : "bg-white/50 border-gray-200 hover:bg-white/70"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  onClick={() => handleCardFlip("digital-landscapes")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layoutId="digital-landscapes-card"
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3
                        className={`text-2xl font-semibold mb-2 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {caseStudyData["digital-landscapes"].title}
                      </h3>
                      <p
                        className={`text-sm mb-4 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {caseStudyData["digital-landscapes"].company}
                      </p>
                      <p
                        className={`text-sm leading-relaxed ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {caseStudyData["digital-landscapes"].summary}
                      </p>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        darkMode ? "text-blue-300" : "text-blue-500"
                      }`}
                    >
                      Read more →
                    </div>
                  </div>
                </motion.div>

                {/* Other cards with similar layoutId props */}
                <motion.div
                  className={`rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
                      : "bg-white/50 border-gray-200 hover:bg-white/70"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  onClick={() => handleCardFlip("playlist-localization")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layoutId="playlist-localization-card"
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3
                        className={`text-xl font-semibold mb-2 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {caseStudyData["playlist-localization"].title}
                      </h3>
                      <p
                        className={`text-sm mb-3 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {caseStudyData["playlist-localization"].company}
                      </p>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        darkMode ? "text-blue-300" : "text-blue-500"
                      }`}
                    >
                      Read more →
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className={`rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
                      : "bg-white/50 border-gray-200 hover:bg-white/70"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  onClick={() => handleCardFlip("webverify-expansion")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layoutId="webverify-expansion-card"
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3
                        className={`text-xl font-semibold mb-2 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {caseStudyData["webverify-expansion"].title}
                      </h3>
                      <p
                        className={`text-sm mb-3 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {caseStudyData["webverify-expansion"].company}
                      </p>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        darkMode ? "text-blue-300" : "text-blue-500"
                      }`}
                    >
                      Read more →
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className={`md:col-span-2 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
                      : "bg-white/50 border-gray-200 hover:bg-white/70"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  onClick={() => handleCardFlip("unified-auth")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layoutId="unified-auth-card"
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3
                        className={`text-2xl font-semibold mb-2 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {caseStudyData["unified-auth"].title}
                      </h3>
                      <p
                        className={`text-sm mb-4 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {caseStudyData["unified-auth"].company}
                      </p>
                      <p
                        className={`text-sm leading-relaxed ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {caseStudyData["unified-auth"].summary}
                      </p>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        darkMode ? "text-blue-300" : "text-blue-500"
                      }`}
                    >
                      Read more →
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
