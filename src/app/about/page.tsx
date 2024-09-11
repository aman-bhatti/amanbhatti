import React from "react";
import Image from "next/image";
import "../styles/about.css";
import { Reveal } from "../../../lib/fade";

const tech_stack = [
  { name: "Typescript", icon: "/icons/typescript.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "React.js", icon: "/icons/reactjs.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Golang", icon: "/icons/go.svg" },
  { name: "Javascript", icon: "/icons/javascript.svg" },
];

const one = (
  <p>
    Hi, my name is Aman Bhatti and I am passionate about software development.
    As a recent graduate in computer science, I am eager to bring my passion for
    software engineering and my strong technical skills to a dynamic and
    innovative organization. Throughout my studies, I have honed my abilities in
    programming languages such as Java, Python, and C++, as well as my
    understanding of databases, web development, and DevOps.
  </p>
);

const two = <p id="paboutme"></p>;

export default function AboutMePage() {
  return (
    <Reveal>
      <div id="about">
        <div className="section-header">
          <span className="section-title"> &#123;about me&#125; </span>
        </div>
        <div className="break"></div>
        <div className="about-content">
          <div className="about-image">
            <Image
              className="image"
              alt="Aman Bhatti"
              src="/images/pfp.jpeg"
              width={500}
              height={500}
              loading="lazy"
            />
            <div className="middle">
              <div className="text">Aman Bhatti</div>
            </div>
          </div>
          <div className="about-description">
            {one}
            <p>Here are some technologies I have been working with:</p>
            <div className="tech-stack">
              {tech_stack.map((tech_item, i) => (
                <div key={i} className="tech-card">
                  <Image
                    src={tech_item.icon}
                    alt={`${tech_item.name} icon`}
                    width={50}
                    height={50}
                    className="tech-icon"
                  />
                  <span className="techName">{tech_item.name}</span>
                </div>
              ))}
            </div>
            {two}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
