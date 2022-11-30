export default function Form({ onSubmit, legend, children }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>{legend}</legend>
        {children}
      </fieldset>
    </form>
  );
}
