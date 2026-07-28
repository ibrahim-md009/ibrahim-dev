import { Home, Contact, FolderGit2 } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    id: "home",
    href: "#home",
    icon: Home,
    label: "Home",
  },
  {
    id: "projects",
    href: "#projects",
    icon: FolderGit2,
    label: "Projects",
  },
  {
    id: "contact",
    href: "#contact",
    icon: Contact,
    label: "Contact",
  },
];

const MobNav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-card-bg/80 border-main-border/20 fixed bottom-2 left-1/2 z-50 flex w-[96%] max-w-lg -translate-x-1/2 justify-around rounded-2xl border py-2 text-3xl text-black shadow-2xl backdrop-blur-md md:hidden">
      {navItems.map(({ id, href, icon: Icon, label }) => {
        const isActive = active === id;

        return (
          <a
            key={id}
            href={href}
            className={`flex items-center justify-center rounded-xl border border-transparent p-2 transition-all duration-300 ${
              isActive
                ? " text-accent border-accent-dark/30 bg-accent-dark/20 scale-110 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                : "text-sub-text bg-main-border hover:bg-main-border/50 hover:text-main-text"
            }`}
            aria-label={label}
          >
            <Icon />
          </a>
        );
      })}
    </nav>
  );
};

export default MobNav;
