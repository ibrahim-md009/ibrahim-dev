const MdNavbar = () => {
  const links = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];
  return (
    <nav className="hidden md:flex">
      <ul className="text-main-text flex gap-4 text-xl">
        {links.map((p, i) => {
          return (
            <li key={i}>
              <a
                href={p.href}
                className="hover:text-accent rounded-2xl p-2 duration-300"
              >
                {p.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MdNavbar;
