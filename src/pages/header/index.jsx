import { Sun, Moon } from "lucide-react";
import Navbar from "./Navbar";

const Header = ({ theme, setTheme }) => {
  return (
    <div className="bg-card-bg/70 border-main-border/60 fixed top-0 left-0 z-100 flex w-full items-center justify-between border-b px-4 py-3 shadow-sm backdrop-blur-md">
      <div className="flex items-center gap-20">
        <a
          href="#home"
          className="group text-main-text flex items-center text-3xl font-bold tracking-wider md:text-5xl"
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
        className="hover:text-accent text-main-text rounded-2xl transition-colors"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun size={25} className="md:size-8" />
        ) : (
          <Moon size={25} />
        )}
      </button>
    </div>
  );
};

export default Header;
