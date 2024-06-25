"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Tech Company A",
    duration: "Jan 2020 - Present",
    description:
      "Worked on developing scalable web applications using React and Node.js. Led a team of 5 developers to build a customer relationship management system that increased efficiency by 30%.",
  },
  {
    title: "Frontend Developer",
    company: "Web Solutions B",
    duration: "Jun 2018 - Dec 2019",
    description:
      "Developed and maintained user interfaces for e-commerce websites. Collaborated with designers to create a seamless user experience, resulting in a 20% increase in user engagement.",
  },
  {
    title: "Intern",
    company: "Startup C",
    duration: "Jan 2018 - May 2018",
    description:
      "Assisted in the development of a mobile application using React Native. Gained hands-on experience with Agile methodologies and version control systems.",
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
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
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

