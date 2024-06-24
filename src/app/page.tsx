import Image from "next/image";
import About from "./about/page";
import { ModeToggle } from "./components/theme-toggle";
import Experience from "./components/experience";
import Info from "./components/intro";

export default function Home() {
  return (
    <main className="space-y-20">
      <Info />
      <About />
      <Experience />
    </main>
  );
}
