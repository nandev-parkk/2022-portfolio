export default function TextArea({
  id,
  name,
  value,
  onChange,
  required,
  style,
}) {
  return (
    <textarea
      id={id}
      name={name}
      value={value || ""}
      onChange={onChange}
      required={required}
      css={style}
    ></textarea>
  );
}
