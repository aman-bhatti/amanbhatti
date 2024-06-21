import Image from "next/image";
import About from "./about/page";
import { ModeToggle } from "./components/theme-toggle";
export default function Home() {
  return (
    <main className="space-y-20">
      <About />
    </main>
  );
}
