import { Reveal } from "../../../lib/fade";
import ProjectCard from "../components/projectinfo";

export default function Projects() {
  return (
    <Reveal>
      <div className="text-sm">
        <div className="section-header">
          <span className="section-title"> &#123;projects&#125; </span>
        </div>
        <div className="break"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-x-12 gap-y-8 pl-4">
          <ProjectCard
            url="taskware"
            title="Taskware"
            description="A task management site specifically catered to college students to get their tasks in order."
            // tech={['TypeScript', 'Next.js', 'Tailwind', 'tRPC', 'Prisma', 'Supabase', 'NextAuth', 'Playwright']}
          />
          <ProjectCard
            url="algorithms"
            title="Sorting Algorithm Visualizer"
            description="A python project that allows you to visualize numerous sorting algorithms in real time."
            // tech={['TypeScript', 'Next.js', 'Tailwind', 'tRPC', 'Prisma', 'Supabase', 'NextAuth', 'Playwright']}
          />
          <ProjectCard
            url="infinitecats"
            title="Infinite Cats"
            description="A pet project involving the use of The Cat API to fetch and display images with a button press."
            // tech={['TypeScript', 'Next.js', 'Tailwind', 'Convex', 'Clerk']}
          />
          <ProjectCard
            url="cryptography"
            title="Cryptography Project"
            description="A cryptography project using a key encapsulation mechanism that combines asymmetric and symmetric systems to produce an efficient public key."
            // tech={['JavaScript', 'Next.js', 'Tailwind', 'MongoDB']}
          />
          <ProjectCard
            url="templateportfolio"
            title="Portfolio Template"
            description="A portfolio template inspired by Bartosz Jarocki's Next.js/shadcn CV."
            // tech={['HTML', 'CSS', 'JavaScript']}
          />
          {/* <ProjectCard
                    url='personalportfolio'
                    title='knlrvr.dev'
                    description='This portfolio. Minimal. Very nice. Please sign the guestbook!'
                    // tech={['TypeScript', 'Next.js', 'Tailwind', 'Framer Motion', 'Convex']}
                /> */}
        </div>
      </div>
    </Reveal>
  );
}
