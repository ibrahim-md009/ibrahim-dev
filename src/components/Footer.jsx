const Footer = () => (
  <footer className="border-main-border/60 text-sub-text border-t px-4 py-8 text-center text-sm">
    © {new Date().getFullYear()}{" "}
    <span className="text-main-text font-semibold">Ibrahim Mohamed</span>.
    Built with <span className="text-accent">React</span> and{" "}
    <span className="text-accent">Tailwind CSS</span>.
  </footer>
);

export default Footer;
