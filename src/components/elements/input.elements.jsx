const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  icon,
  ...rest
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="grow"
        {...rest}
      />
    </label>
  );
};

export default Input;
