import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import "@components/Accordeon.css";
import PropTypes from "prop-types";

function AccordeonDetail({ themes, themeName }) {
  const [deplier, setDeplier] = useState(true);
  return (
    <section id="drop">
      <button
        className="thematique"
        type="button"
        onClick={() => setDeplier(!deplier)}
      >
        {themeName}
      </button>
      <div style={{ display: deplier ? "block" : "none" }}>
        {themes.map((theme) => {
          return <div className="quizz">{theme}</div>;
        })}
      </div>
    </section>
  );
}

AccordeonDetail.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.string),
  themeName: PropTypes.string,
};
AccordeonDetail.defaultProps = {
  themes: [],
  themeName: "",
};

export default AccordeonDetail;
