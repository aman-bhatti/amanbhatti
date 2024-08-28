// src/app/components/navbar.tsx

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { ModeToggle } from "./theme-toggle";
import "../styles/navbar.css";

type NavItem = {
  name: string;
  external?: boolean; // external is optional
};

const navItems: Record<string, NavItem> = {
  "/blog": {
    name: "blogs",
  },
  "/bookshelf": {
    name: "bookshelf",
  },
  "/guestbook": {
    name: "guestbook",
  },
  "https://notes.amannbhatti.com": {
    name: "notes",
    external: true, // Mark it as an external link
  },
};

export function Navbar() {
  const currentPath = usePathname(); // Use usePathname hook

  return (
    <aside className="-ml-[8px] mb-12 mt-10 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between items-center items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link
            href="/"
            className={`italic pl-2 text-gray-700 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-stone-500  ${
              currentPath === "/" ? "active-class" : ""
            }`}
          >
            aman
          </Link>
          <div className="flex ms-auto flex-row space-x-0 pr-4">
            {Object.entries(navItems).map(([path, { name, external }]) => {
              const isActive = currentPath === path; // Check if the current path matches
              const linkClass = `text-gray-700 dark:text-neutral-400 transition-all hover:text-neutral-600 dark:hover:text-stone-500 flex align-middle relative py-1 px-2 ${
                isActive ? "active-class" : ""
              }`; // Apply active-class conditionally

              if (external) {
                return (
                  <a
                    key={path}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {name}
                  </a>
                );
              } else {
                return (
                  <Link key={path} href={path} className={linkClass}>
                    {name}
                  </Link>
                );
              }
            })}
          </div>
          <ModeToggle />
        </nav>
      </div>
    </aside>
  );
}
