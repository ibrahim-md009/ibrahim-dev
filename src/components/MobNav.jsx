import { navItems, sectionIds } from "../constants/nav";
import useActiveSection from "../hooks/useActiveSection";

const MobNav = () => {
  const active = useActiveSection(sectionIds);

  return (
    <nav
      aria-label="Mobile navigation"
      className="bg-card-bg/80 border-main-border fixed bottom-3 left-1/2 z-50 flex w-[92%] max-w-sm -translate-x-1/2 items-center justify-between gap-1 rounded-2xl border p-1.5 shadow-2xl backdrop-blur-md md:hidden"
    >
      {navItems.map(({ id, href, icon: Icon, label }) => {
        const isActive = active === id;

        return (
          <a
            key={id}
            href={href}
            aria-label={label}
            aria-current={isActive ? "true" : undefined}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-300 ${
              isActive
                ? "bg-accent text-card-bg flex-[1.7] shadow-[0_0_14px] shadow-accent/40"
                : "text-sub-text hover:text-main-text"
            }`}
          >
            <Icon size={22} />
            <span
              className={`overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                isActive ? "max-w-20 opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};

export default MobNav;
