import { navItems, sectionIds } from "../../constants/nav";
import useActiveSection from "../../hooks/useActiveSection";

const MdNavbar = () => {
  const active = useActiveSection(sectionIds);

  return (
    <nav aria-label="Main navigation" className="hidden md:block">
      <ul className="flex gap-1 text-lg">
        {navItems.map(({ id, href, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={href}
                aria-current={isActive ? "true" : undefined}
                className={`block rounded-xl px-4 py-2 font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-sub-text hover:text-main-text"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MdNavbar;
