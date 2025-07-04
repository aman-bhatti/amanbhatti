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
            url="doodlebob"
            title="doodle.bob"
            description="A collaborative whiteboard application that allows multiple users to join via code."
            tech={["vitejs", "Javascript", "React.js"]}
          />
          <ProjectCard
            url="sudokutui"
            title="Sudoku TUI"
            description="A TUI application that allows you to play Sudoku right in your terminal through SSH."
            tech={["Golang"]}
          />
          <ProjectCard
            url="bookrecognition"
            title="Book Recognition App"
            description="A book recognition app that uses your camera to instantly identify a book's title when shown."
            tech={["Python", "Machine Learning"]}
          />
          <ProjectCard
            url="notetaking"
            title="Note Taking App"
            description="A fully functional note taking app that allows users to sign up and save their notes."
            tech={["Typescript", "Javascript", "React.js"]}
          />
          <ProjectCard
            url="portfolio"
            title="Personal Portfolio"
            description="This personal portfolio built on NextJS which includes a blog form as well as a guestbook anyone can freely sign."
            tech={["Typescript", "Next.js"]}
          />
          <ProjectCard
            url="taskware"
            title="Taskware"
            description="A task management site specifically catered to college students to get their tasks in order."
            tech={["Python", "Javascript"]}
          />
          <ProjectCard
            url="algorithms"
            title="Sorting Algorithm Visualizer"
            description="A python project that allows you to visualize numerous sorting algorithms in real time."
            tech={["Python", "Matplotlib", "Seaborn"]}
          />
          <ProjectCard
            url="infinitecats"
            title="Infinite Cats"
            description="A pet project involving the use of The Cat API to fetch and display images with a button press."
            tech={["Javascript", "HTML"]}
          />
          <ProjectCard
            url="cryptography"
            title="Cryptography Project"
            description="A cryptography project using a key encapsulation mechanism that combines asymmetric and symmetric systems to produce an efficient public key."
            tech={["Cryptography"]}
          />
        </div>
      </div>
    </Reveal>
  );
}
