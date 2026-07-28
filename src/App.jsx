import { useState, useEffect } from "react";
import Contact from "./pages/Contact";
import MobNav from "./components/MobNav";
import Header from "./pages/header";
import Hero from "./pages/Hero";
import Projects from "./pages/projects";
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <Projects />
      <Contact />
      <MobNav />
    </div>
  );
};

export default App;
