export default function TextField({
  type,
  id,
  name,
  required,
  value,
  autoFocus,
  onChange,
  ref,
  style,
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      value={value || ""}
      autoFocus={autoFocus}
      onChange={onChange}
      ref={ref}
      css={style}
    />
  );
}
