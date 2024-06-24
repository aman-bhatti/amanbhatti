"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Info: React.FC = () => {
  return (
    <div classw="position:relative;width:full;overflow:visible">
      <div class="opacity: 1; transform: none;">
        <div class="flex items-center gap-4 mt-2">
          <div class="flex flex-col">
            <p class="font-black text-base tracking-wide">Aman Bhatti</p>
            <div className="text-1xl text-gray-600 dark:text-gray-400 text-left">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Frontend Developer",
                    "Tech Enthusiast",
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
