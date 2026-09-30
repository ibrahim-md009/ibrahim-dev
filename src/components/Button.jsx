const variants = {
  primary:
    "bg-accent text-card-bg shadow-lg shadow-accent-dark/40 hover:-translate-y-0.5 hover:shadow-accent/60",
  secondary:
    "border border-main-border bg-card-bg/40 text-main-text backdrop-blur hover:border-main-text",
};

const Button = ({
  text,
  href,
  onClick,
  icon: Icon,
  variant = "primary",
  external = false,
  className = "",
}) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 font-semibold transition-all duration-300 active:scale-95 md:text-lg ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={18} aria-hidden />}
      {text}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
