// eslint-disable-next-line react/prop-types
export default function Bouton({ name, className }) {
  return (
    <div>
      <button type="button" className={className}>
        {" "}
        {name}{" "}
      </button>
    </div>
  );
}
