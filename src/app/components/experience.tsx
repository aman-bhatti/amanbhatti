"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    useState<ExperienceItem | null>(experiences[0]);

  return (
    <div id="experience" className="py-12 ">
      <div className="section-header">
        <span className="section-title"> &#123;exerpience&#125; </span>
      </div>
      <div className="break"></div>

      <div className="container mx-auto px-4 flex">
        <aside className="w-1/4 pr-4">
          <ul className="space-y-4">
            {experiences.map((experience, index) => (
              <li
                key={index}
                onClick={() => setSelectedExperience(experience)}
                className={`cursor-pointer p-4 rounded-lg ${selectedExperience?.title === experience.title ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"}`}
              >
                {experience.title}
              </li>
            ))}
          </ul>
        </aside>
        <main className="w-3/4 pl-4">
          <AnimatePresence>
            {selectedExperience && (
              <motion.div
                key={selectedExperience.title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
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
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Experience;
