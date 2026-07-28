const Project = ({ p }) => {
  return (
    <div className="bg-card-bg/80 border-main-border flex max-w-80 flex-col justify-between rounded-2xl border-3 shadow-lg">
      <div className="h-30 w-full">
        <img
          src={p.src}
          className="h-full w-full rounded-tl-2xl rounded-tr-2xl object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-2 px-1.5 py-4">
        <h2 className="text-main-text text-3xl font-bold">{p.pName}</h2>
        <ul className="text-sub-text text-[13px]">
          {p.desc.map((item, i) => (
            <li key={i}> {item} </li>
          ))}
        </ul>
        <div className="flex gap-2">
          {p.technologies.map((tech, i) => {
            return (
              <span
                key={i}
                className="bg-accent/10 text-accent rounded-3xl p-1.5 text-center text-[12px] tracking-widest md:my-1"
              >
                {tech}
              </span>
            );
          })}
        </div>
        <hr className="border-main-border/50" />
        <div className="flex gap-5 font-semibold">
          <a
            href={p.gitHub}
            className="text-main-text hover:border-main-text border-main-border flex items-center rounded-2xl border p-2 text-center transition-all duration-300"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href={p.demo}
            className="bg-accent hover:shadow-accent/60 text-card-bg shadow-accent-dark/40 flex items-center rounded-2xl p-2 text-center shadow-lg duration-250 hover:-translate-y-0.5"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
