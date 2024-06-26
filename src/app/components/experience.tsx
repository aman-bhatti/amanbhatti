"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string | JSX.Element;
}

const experiences: ExperienceItem[] = [
  {
    title: "Test/Research Engineer",
    company: "Early Startup Company",
    duration: "Jan 2024 - May 2024",
    description: (
      <ul>
        <li>
          • Part of a research project on identifying early presence of
          Alzheimer’s disease using machine learning techniques.
        </li>
        <li>
          • Played a pivotal role in securing vital research information on
          patients with AD in regards to analyzing data, identifying patterns
          and refining and testing algorithms for the optimal performance.
        </li>
        <li>
          • Mainly focused on research initiatives that explored applications of
          AI and machine learning in terms of healthcare.
        </li>
      </ul>
    ),
  },
  {
    title: "Data Analyst Intern",
    company: "Nuasin Charter School ",
    duration: "Oct 2020 - May 2021",
    description: (
      <ul>
        <li>
          • Managed and analyzed the educational system database, extracting
          insights on student behaviors and usage patterns with school-issued
          Chromebooks; methodically documented anomalies and trends for informed
          decision-making.
        </li>
        <li>
          • Provided data-driven recommendations to address technical issues
          faced by students and staff, leveraging analytical tools to diagnose
          and predict recurrent problems, optimizing the educational experience
          through proactive measures.
        </li>
      </ul>
    ),
  },
];

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null);
  const [highlightTop, setHighlightTop] = useState(0);
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Ensure refs are set before trying to calculate highlight position
    const timeoutId = setTimeout(() => {
      setSelectedExperience(experiences[0]);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (selectedExperience && listItemRefs.current.length) {
      const index = experiences.findIndex(
        (experience) => experience.title === selectedExperience.title,
      );
      const selectedItem = listItemRefs.current[index];
      if (selectedItem) {
        setHighlightTop(selectedItem.offsetTop);
      }
    }
  }, [selectedExperience, listItemRefs.current]);

  const springProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    reset: true,
  });

  return (
    <div id="experience" className="py-12">
      <div className="section-header">
        <span className="section-title"> &#123;experience&#125; </span>
      </div>
      <div className="break"></div>

      <div className="container mx-auto px-4 flex">
        <aside className="w-1/4 pr-4 relative sidebar">
          <ul className="space-y-4">
            {experiences.map((experience, index) => (
              <li
                key={index}
                ref={(el) => {
                  listItemRefs.current[index] = el;
                }}
                onClick={() => setSelectedExperience(experience)}
                className={`cursor-pointer p-4 rounded-lg ripple ${
                  selectedExperience?.title === experience.title
                    ? " text-white"
                    : "text-gray-800 dark:text-gray-100"
                }`}
              >
                {experience.title}
              </li>
            ))}
          </ul>
          <div
            className="highlight-line"
            style={{
              height: `${listItemRefs.current[0]?.clientHeight || 0}px`,
              top: `${highlightTop}px`,
            }}
          ></div>
        </aside>
        <main className="w-3/4 pl-4">
          {selectedExperience && (
            <animated.div
              key={selectedExperience.title}
              style={springProps}
              className="experience-container p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {selectedExperience.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedExperience.company}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedExperience.duration}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                {selectedExperience.description}
              </p>
            </animated.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Experience;
