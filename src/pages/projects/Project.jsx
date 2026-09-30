import { ExternalLink } from "lucide-react";
import Button from "../../components/Button";
import Github from "../../assets/icons/GitHub";

const Project = ({ p }) => {
  return (
    <article className="group bg-card-bg/80 border-main-border hover:border-accent/50 hover:shadow-accent/10 flex flex-col overflow-hidden rounded-3xl border shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={p.src}
          alt={`${p.pName} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="from-card-bg absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <h3 className="text-main-text text-2xl font-bold md:text-3xl">
          {p.pName}
        </h3>

        {p.collaborators?.length > 0 && (
          <p className="text-sub-text text-sm">
            Co-developed with{" "}
            {p.collaborators.map((c, i) => (
              <span key={c.name}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium hover:underline"
                >
                  {c.name}
                </a>
                {i < p.collaborators.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}

        <ul className="text-sub-text flex flex-col gap-2 text-sm leading-relaxed md:text-[15px]">
          {p.desc.map((item, i) => (
            <li key={i} className="flex gap-2.5">
              <span
                aria-hidden
                className="bg-accent mt-2 size-1.5 shrink-0 rounded-full"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-2">
          {p.technologies.map((tech) => (
            <li
              key={tech}
              className="bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-medium tracking-wide"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="border-main-border/50 mt-auto flex flex-wrap gap-3 border-t pt-4">
          <Button
            text="GitHub"
            href={p.gitHub}
            icon={Github}
            variant="secondary"
            external
            className="md:text-base"
          />
          <Button
            text="Live Demo"
            href={p.demo}
            icon={ExternalLink}
            external
            className="md:text-base"
          />
        </div>
      </div>
    </article>
  );
};

export default Project;
