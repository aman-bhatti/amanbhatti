import Link from "next/link";
import { Reveal } from "../../../lib/fade";

import { RxArrowTopRight } from "react-icons/rx";

interface ProjectCardProps {
  url: string;
  title: string;
  description: string;
  // tech: string[];
}

export default function ProjectCard({
  url,
  title,
  description,
}: ProjectCardProps) {
  return (
    <Reveal>
      <div className=" rounded-lg  hover:shadow-lg transition duration-300">
        {/* href = {url} */}
        <Link
          href={`/proj/${url}`}
          className="flex items-center justify-between group"
        >
          <span className="text-lg font-medium  group-hover:underline">
            {title}{" "}
          </span>
          <RxArrowTopRight className="text-neutral-500 ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
        </Link>
        <p className="proj-desc text-neutral-500">{description}</p>
      </div>
    </Reveal>
  );
}
