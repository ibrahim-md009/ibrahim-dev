import { Sun, Moon } from "lucide-react";
import Navbar from "./Navbar";

const Header = ({ theme, setTheme }) => {
  const isDark = theme === "dark";

  return (
    <header className="bg-card-bg/70 border-main-border/60 fixed top-0 left-0 z-100 w-full border-b shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-10 md:gap-16">
          <a
            href="#home"
            aria-label="Ibrahim - home"
            className="group text-main-text flex items-center text-3xl font-bold tracking-wider md:text-4xl"
          >
            I
            <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-700 ease-in-out group-hover:max-w-xs group-hover:opacity-100">
              BR
              <span>A</span>
              <span className="text-accent">HI</span>
            </span>
            <span className="text-accent">M</span>
          </a>
          <Navbar />
        </div>

        <button
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          className="border-main-border text-main-text hover:border-accent hover:text-accent grid size-10 place-items-center rounded-xl border transition-colors duration-300 active:scale-90"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
