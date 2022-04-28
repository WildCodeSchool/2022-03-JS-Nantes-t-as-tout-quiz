export default function Bouton({ name, className, reponse}) {
  return (
    <div>
      <button
        type="button"
        className={className}
        handleClick={() =>
          name === reponse ? console.warn("ok") : console.warn("non")
        }
      >
        {" "}
        {name}{" "}
      </button>
    </div>
  );
}
