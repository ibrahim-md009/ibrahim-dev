const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-12 flex flex-col items-center gap-3 text-center md:mb-16">
    <h2 className="text-main-text text-4xl font-bold tracking-tight md:text-5xl">
      {children}
    </h2>
    <span className="from-accent to-accent/0 h-1 w-20 rounded-full bg-linear-to-r" />
    {subtitle && (
      <p className="text-sub-text max-w-md text-sm md:text-lg">{subtitle}</p>
    )}
  </div>
);

export default SectionTitle;
