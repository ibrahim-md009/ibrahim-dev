const Button = ({ text, href, className, onClick }) => {
  if (href) {
    return (
      <a href={href} className={`${className}`}>
        {text}
      </a>
    );
  }

  return (
    <button className={`${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
