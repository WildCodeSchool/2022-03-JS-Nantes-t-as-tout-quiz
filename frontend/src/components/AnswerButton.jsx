/* eslint-disable react/prop-types */
export default function AnswerButton({
  className,
  setProposition,
  proposition,
}) {
  return (
    <div>
      <button
        type="button"
        className={className}
        onClick={() => setProposition(proposition)}
      >
        {" "}
        {proposition}{" "}
      </button>
    </div>
  );
}
