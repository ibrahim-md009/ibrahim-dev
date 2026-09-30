import falafelProjectImg from "../../assets/falafel.png";
import jsGamesProjectImg from "../../js-games.png";
import keoStudioImg from "../../assets/keo-project.png";
import waterElabaladImg from "../../assets/water-elbalad.png";
import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "./Project";

const projects = [
  {
    src: keoStudioImg,
    pName: "KEO-Studio",
    desc: [],
    collaborators: [
      { name: "Mahmoud", url: "https://mhmod-hazem-portfolio.vercel.app/" },
    ],
    technologies: ["React", "CSS"],
    gitHub: "https://github.com/ibrahim-md009/KEO-Studio",
    demo: "https://keo-studio.vercel.app/",
  },
  {
    src: waterElabaladImg,
    pName: "Water-Elbalad",
    desc: [],
    collaborators: [
      { name: "Mahmoud", url: "https://mhmod-hazem-portfolio.vercel.app/" },
    ],
    technologies: ["React", "CSS"],
    gitHub: "https://github.com/ibrahim-md009/elbalad-water",
    demo: "https://elbalad-water.vercel.app/",
  },
  {
    src: falafelProjectImg,
    pName: "Falafel Store",
    desc: [
      <>A responsive, modern e-commerce store</>,
      <>
        Cart system powered by
        <span className="text-main-text font-medium"> Context</span> and
        <span className="text-main-text font-medium"> useReducer</span>
      </>,
      <>
        <span className="text-main-text font-medium">Axios</span> integration to
        handle API requests
      </>,
      <>Real-time product search</>,
      <>Persistent user login using localStorage</>,
    ],
    technologies: ["React", "Tailwind CSS"],
    gitHub: "https://github.com/ibrahim-md009/Falafel",
    demo: "https://ibrahim-md009.github.io/Falafel/",
  },
  {
    src: jsGamesProjectImg,
    pName: "JS Games",
    desc: [
      <>
        A responsive, modern games hub built with
        <span className="text-accent font-medium"> JavaScript</span>
      </>,
      <>
        Hangman game featuring{" "}
        <span className="text-main-text font-medium">
          word-fetching from an API
        </span>{" "}
        and error handling
      </>,
      <>Score tracking and multiplayer support</>,
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    gitHub: "https://github.com/ibrahim-md009/JS-Games",
    demo: "https://ibrahim-md009.github.io/JS-Games/",
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto my-20 max-w-6xl scroll-mt-20 px-4"
    >
      <SectionTitle>My Projects</SectionTitle>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.pName} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
