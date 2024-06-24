"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Info: React.FC = () => {
  return (
    <div className="position:relative;width:full;overflow:visible">
      <div className="opacity: 1; transform: none;">
        <div className="flex items-center gap-4 mt-2">
        <img
    alt="Profile picture"
    loading="lazy"
    width="1000"
    height="1000"
    decoding="async"
    className="h-12 w-12 rounded-full"
    src="/images/IMG_0681.jpg"
  />
          <div className="flex flex-col">
            <p className="font-black text-base tracking-wide">Aman Bhatti</p>
            <div className="text-1xl text-gray-600 dark:text-gray-400 text-left">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Fullstack Developer",
                    "Tech Enthusiast",
                    "Learner"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
