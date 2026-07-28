import falafelProjectImg from "../../assets/Screenshot 2026-07-21 193304.png";
import jsGamesProjectImg from "../../assets/Screenshot 2026-07-21 190709.png";
import ProjectCard from "./Project";

const projects = [
  {
    src: falafelProjectImg,
    pName: "Falafel Store",
    desc: [
      <>• A responsive, modern e-commerce</>,
      <>
        • Cart System powered by
        <span className="text-main-text font-medium"> Context</span> and
        <span className="text-main-text font-medium"> useReducer</span>
      </>,
      <>
        • <span className="text-main-text font-medium">Axios</span> integration
        to handle API requests
      </>,
      <>• Real-time product search functionality.</>,
      <>• Persistent user authentication login using localStorage.</>,
    ],
    technologies: ["React", "Tailwind CSS"],
    gitHub: "https://github.com/ibrahim-md009/Falafel",
    demo: " https://ibrahim-md009.github.io/Falafel/",
  },
  {
    src: jsGamesProjectImg,
    pName: "JS Games",
    desc: [
      <>
        • A responsive, modern games hub including games created with
        <span className="text-accent font-medium"> JavaScript</span>.
      </>,
      <>
        • Hangman game featuring{" "}
        <span className="text-main-text font-medium">
          word-fetching from API{" "}
        </span>
        and error handling.
      </>,
      <>• Score tracking and multiplayer support.</>,
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    gitHub: "https://github.com/ibrahim-md009/JS-Games",
    demo: " https://ibrahim-md009.github.io/JS-Games/",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="mx-4 my-20 flex scroll-mt-20 flex-col items-center gap-5"
    >
      <p className="text-main-text mb-12 text-4xl font-bold md:mb-20 md:text-5xl">
        My Projects
      </p>

      <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
