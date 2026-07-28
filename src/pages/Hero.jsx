import Button from "../components/Button";
import portfolioImg from "../assets/e6b954ec-24c2-4515-8431-6483693dc4a2-removebg-preview.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="mx-4 my-20 flex scroll-mt-20 flex-col items-center gap-10 rounded-2xl px-1.5 py-2 md:my-25 md:flex-row md:items-start md:justify-between md:px-4 md:py-15"
    >
      <div className="flex flex-col items-center gap-7 md:w-1/2 md:gap-12">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-accent mt-2 text-3xl font-extrabold md:text-5xl">
            <span className="text-main-text">Ibrahim</span> Mohamed
          </h2>
          <h3 className="text-xl font-bold md:text-3xl">
            <span className="text-accent">&lt;</span>
            <span className="text-main-text">Frontend Developer</span>
            <span className="text-accent"> /&gt;</span>
          </h3>
        </div>

        <p className="text-sub-text text-center text-sm leading-5 md:text-xl md:leading-6">
          I build responsive web apps using{" "}
          <span className="text-accent">React</span> and
          <span className="text-accent"> Tailwind CSS</span>, focusing on
          <span className="text-main-text"> clean code</span> and
          <span className="text-main-text"> scalable structure</span>.
        </p>
        <div className="flex w-full justify-center gap-2">
          <Button
            text="View My Projects"
            href="#projects"
            className="bg-accent hover:shadow-accent/60 text-card-bg shadow-accent-dark/40 flex items-center justify-center rounded-2xl p-2 text-center font-semibold shadow-lg duration-250 hover:-translate-y-0.5 md:px-3 md:text-xl"
          />
          <Button
            text="contact"
            href="#contact"
            className="text-main-text hover:border-main-text border-main-border flex items-center justify-center rounded-2xl border p-2 text-lg font-semibold transition-all duration-300 md:px-3 md:text-xl"
          />
        </div>
      </div>

      <div className="border-accent-dark shadow-accent-dark/30 aspect-square w-3/4 max-w-xs overflow-hidden rounded-2xl border-3 shadow-2xl md:w-1/3">
        <img className="h-full w-full object-cover" src={portfolioImg} />
      </div>
    </div>
  );
};

export default Hero;
