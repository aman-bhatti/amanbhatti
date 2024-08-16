import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import "../styles/navbar.css";

const navItems = {
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
    // Add the Notes section here
    name: "notes",
    external: true, // Mark it as an external link
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-12 mt-10 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between items-center items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link
            href={"/"}
            className="italic pl-2 text-gray-700 dark:text-neutral-400 hover:text-neutral-600 focus:text-neutral-600 dark:hover:text-stone-500 dark:focus:text-stone-500"
          >
            aman
          </Link>
          <div className="flex ms-auto flex-row space-x-0 pr-4">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="text-gray-700 dark:text-neutral-400 transition-all hover:text-neutral-600 focus:text-neutral-600 dark:hover:text-stone-500 dark:focus:text-stone-500 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <ModeToggle />
        </nav>
      </div>
    </aside>
  );
}
