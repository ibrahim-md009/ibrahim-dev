import { useState, useEffect } from "react";
import Contact from "./pages/Contact";
import MobNav from "./components/MobNav";
import Footer from "./components/Footer";
import Header from "./pages/header";
import Hero from "./pages/Hero";
import Projects from "./pages/projects";

const App = () => {
  // default to dark when nothing is saved yet
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="pb-24 md:pb-0">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <MobNav />
    </div>
  );
};

export default App;
