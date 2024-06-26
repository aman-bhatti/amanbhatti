import Link from "next/link";
import Image from "next/image";
import { Reveal } from "../../../../lib/fade";

import type { Metadata } from "next";

import { RxArrowTopRight } from "react-icons/rx";

interface Work {
  url: string;
  brand?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  };
  git?: string;
  live?: string;
  title: string;
  category: string;
  overview: string;
  more: string;
  tags?: string[];
  year: string;
  next: string;
  nextTitle: string;
}

export default async function WorksPage({
  params,
}: {
  params: {
    url: string;
  };
}) {
  const projects = fetchWorksData(params.url);

  const paragraphs = projects?.more.split("\n");

  return (
    <div className="">
      <Link href={"/"} className="hover:underline text-neutral-500">
        ↵ back
      </Link>
      {projects?.brand && (
        <Reveal>
          <div className={`flex justify-center`}>
            <Image
              src={projects?.brand.src}
              alt={projects?.brand.alt}
              width={projects?.brand.width}
              height={projects?.brand.height}
              className={projects?.brand.className}
            />
          </div>
        </Reveal>
      )}

      <Reveal>
        <div className="mt-4 mb-8">
          <Reveal>
            <div className="flex flex-col">
              <span className="my-2 text-3xl sm:text-4xl tracking-tight">
                {projects?.title}
              </span>
              <div className="flex flex-col justify-between items-start">
                <span className="w-fit font-light tracking-widest text-neutral-400 text-xs rounded-full border px-4 py-1 border-neutral-400">
                  {projects?.category}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-col space-y-12 mb-12">
          <div className="font-light">
            <span className="font-medium tracking-wide text-xl">Overview</span>
            <p key={projects?.title} className="blog text-sm mt-4">
              {projects?.overview}
            </p>
          </div>

          <div className="text-sm grid grid-cols-1 sm:grid-cols-3 gap-y-6">
            <div className="w-full flex flex-col">
              <span className="font-light tracking-wider text-xs mb-1 text-neutral-400">
                Year
              </span>
              <span className="border-t border-neutral-500 w-full pt-2 font-light">
                {projects?.year}
              </span>
            </div>
            <div className="w-full flex flex-col">
              <span className="font-light tracking-wider text-xs mb-1 text-neutral-400">
                Tech
              </span>
              <span className="border-t border-neutral-500 w-full pt-2 flex flex-col space-y-1.5">
                {projects?.tags &&
                  projects?.tags.map((tag, index) => (
                    <span key={index} className="text-sm flex font-light">
                      {tag}
                    </span>
                  ))}
              </span>
            </div>
            <div className="w-full flex flex-col text-sm">
              <span className="font-light tracking-wider text-xs mb-1 text-neutral-400">
                View
              </span>
              <span className="border-t border-neutral-500 w-full pt-2 flex flex-col space-y-1.5">
                {projects?.git && (
                  <Link
                    href={`${projects?.git}`}
                    target="_blank"
                    className="flex items-center group"
                  >
                    <span className="font-light group-hover:underline underline-offset-4 transition duration-100">
                      Open Code
                    </span>
                    <RxArrowTopRight className="ml-3 text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-100" />
                  </Link>
                )}
                {projects?.live && (
                  <Link
                    href={`${projects?.live}`}
                    target="_blank"
                    className="flex items-center group"
                  >
                    <span className="font-light group-hover:underline underline-offset-4 transition duration-100">
                      Open Live
                    </span>
                    <RxArrowTopRight className="ml-[1.17rem] text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-200" />
                  </Link>
                )}
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { url: "taskware" },
    { url: "algorithms" },
    { url: "infinitecats" },
    { url: "cryptography" },
    { url: "templateportfolio" },
    { url: "personalportfolio" },
  ];
}

const fetchWorksData = (url: string): Work => {
  // Create an object that maps the project URLs to their respective data
  const projectDataMap: { [key: string]: Work } = {
    taskware: {
      url: "taskware",
      brand: {
        src: "/images/taskware.png",
        alt: "",
        width: 1000,
        height: 1000,
        className: "w-full h-full",
      },
      git: "https://github.com/aman-bhatti/taskware",
      live: "",
      title: "Taskware",
      category: "Full Stack",
      overview:
        "Created Taskware, a powerful task management web application, utilizing Python, MySQLdb, Flask, Heroku, HTML, CSS, and Javascript, resulting in an easy-to-use interface for managing tasks, assigning tasks to team members, and tracking progress. Built the core functionality utilizing Python and Flask; designed the database schema and wrote server-side code, leading to a seamless integration of the frontend with the backend for improved application performance.",
      tags: ["Python (Flask)", "MySQL", "HTML", "CSS", "JavaScript", "Heroku"],
      year: "2022 ~",
      more: "",
      next: "",
      nextTitle: "",
    },

    algorithms: {
      url: "algorithms",
      brand: {
        src: "/images/sorting.png",
        alt: "",
        width: 1000,
        height: 1000,
        className: "w-full h-full",
      },
      git: "https://github.com/aman-bhatti/sortingAlgoVisualizer",
      live: "",
      title: "Sorting Algorithms Visualizer",
      category: "Python",
      overview:
        "Python project using the tkinter module that allows you to visualize numerours sorting algoirthms in real time.",
      tags: ["Python", "Tkinter"],
      year: "2023 ~",
      more: "",
      next: "",
      nextTitle: "",
    },

    infinitecats: {
      url: "infinitecats",
      brand: {
        src: "/images/infinitecats.jpg",
        alt: "Infinite Cats",
        width: 1000,
        height: 1000,
        className: "w-full h-full",
      },
      git: "https://github.com/aman-bhatti/cats",
      live: "https://infinitecats.netlify.app/",
      title: "Infinite Cats",
      category: "Web Development",
      overview:
        "A pet project involving the use of The Cat API to fetch and display images with a button press.",
      tags: ["JavaScript", "HTML", "CSS", "API", "Netlify"],
      year: "2023 ~",
      more: "",
      next: "",
      nextTitle: "",
    },

    abstract: {
      url: "abstract",
      brand: {
        src: "/brand/abs-brand-new.png",
        alt: "Abstract Store",
        width: 1000,
        height: 1000,
        className: "w-full h-full",
      },
      git: "https://github.com/knlrvr/abstract",
      live: "https://abstract-eight.vercel.app/",
      title: "Abstract",
      category: "Ecommerce",
      overview:
        "Abstract is an innovative ecommerce store that offers a unique focus on concepts related to consumerism and materialism. Instead of traditional physical products, Abstract specializes in selling these thought-provoking concepts themselves. By challenging conventional notions of commerce, Abstract provides customers with an intellectual and philosophical exploration of consumerism and materialism.",
      tags: ["JavaScript", "React", "Next.js", "Tailwind", "MongoDB"],
      year: "2023",
      more: "",
      next: "/proj/templateportfolio",
      nextTitle: "Portfolio Template",
    },

    templateportfolio: {
      url: "templateportfolio",
      brand: {
        src: "/brand/template.png",
        alt: "Portfolio Template",
        width: 1000,
        height: 1000,
        className: "w-full h-full",
      },
      git: "https://github.com/aman-bhatti/taskware",
      live: "",
      title: "Portfolio Template",
      category: "Portfolio",
      overview:
        "This portfolio template is a clone of Bartosz Jarocki's Next.js + shadcn/ui CV. Anyone who wants to use this can fork the repo and edit the JSON, and they're good to go!",
      tags: ["HTML", "CSS", "JavaScript"],
      year: "2024 ~",
      more: "",
      next: "/proj/studico",
      nextTitle: "Studico",
    },
  };

  // Retrieve the project data based on the provided URL
  const projectData = projectDataMap[url];

  // Return the project data
  return projectData;
};
