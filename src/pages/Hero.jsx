import Button from "../components/Button";
import portfolioImg from "../assets/portfolio-img.png";

const stack = ["React", "Tailwind CSS", "JavaScript"];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate scroll-mt-20 overflow-hidden px-4 pt-32 pb-16 md:pt-44 md:pb-28"
    >
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="bg-accent/15 absolute top-16 left-1/2 -z-10 size-80 -translate-x-1/2 rounded-full blur-3xl md:left-3/4 md:size-112"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 md:flex-row md:justify-between md:gap-10">
        <div className="flex flex-col items-center gap-7 text-center md:w-3/5 md:items-start md:gap-9 md:text-left">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h1
              className="rise text-5xl leading-[1.05] font-extrabold tracking-tight md:text-7xl"
              style={{ "--i": 0 }}
            >
              <span className="text-main-text block">Ibrahim</span>
              <span className="text-accent block">Mohamed</span>
            </h1>
            <h2
              className="rise text-xl font-bold md:text-3xl"
              style={{ "--i": 1 }}
            >
              <span className="text-accent">&lt;</span>
              <span className="text-main-text">Frontend Developer</span>
              <span className="text-accent"> /&gt;</span>
            </h2>
          </div>

          <p
            className="rise text-sub-text max-w-xl text-base leading-7 md:text-xl md:leading-8"
            style={{ "--i": 2 }}
          >
            I build responsive web apps using{" "}
            <span className="text-accent font-medium">React</span> and{" "}
            <span className="text-accent font-medium">Tailwind CSS</span>,
            focusing on <span className="text-main-text">clean code</span> and{" "}
            <span className="text-main-text">scalable structure</span>.
          </p>

          <ul
            className="rise flex flex-wrap justify-center gap-2 md:justify-start"
            style={{ "--i": 3 }}
          >
            {stack.map((tech) => (
              <li
                key={tech}
                className="border-main-border bg-card-bg/60 text-sub-text rounded-full border px-3 py-1 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div
            className="rise flex flex-wrap justify-center gap-3 md:justify-start"
            style={{ "--i": 4 }}
          >
            <Button text="View my projects" href="#projects" />
            <Button text="Contact me" href="#contact" variant="secondary" />
          </div>
        </div>

        <div
          className="rise relative w-3/4 max-w-xs md:w-2/5 md:max-w-sm"
          style={{ "--i": 2 }}
        >
          {/* offset frame behind the photo */}
          <div
            aria-hidden
            className="border-accent/50 absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2"
          />
          <div className="border-accent-dark shadow-accent-dark/30 bg-card-bg relative aspect-square overflow-hidden rounded-3xl border-2 shadow-2xl">
            <img
              className="h-full w-full object-cover"
              src={portfolioImg}
              alt="Portrait of Ibrahim Mohamed"
            />
          </div>
          <span
            aria-hidden
            className="bg-card-bg border-main-border text-accent absolute -bottom-5 -left-3 rounded-xl border px-3 py-1.5 text-lg font-bold shadow-lg"
          >
            &lt;/&gt;
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
