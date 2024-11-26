const Button = ({
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
