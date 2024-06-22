import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import "../styles/navbar.css";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blogs",
  },
  "/bookshelf": {
    name: "bookshelf",
  },
  "/about": {
    name: "about",
  },
  "/guestbook": {
    name: "guestbook",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-12 mt-10 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <ModeToggle />
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-600 focus:text-neutral-600 dark:hover:text-stone-500 dark:focus:text-stone-500 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
