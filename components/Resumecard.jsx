import React from "react";

export default function Resumecard({ data }) {
  const { bluebg, period, qualification, university } = data;
  return (
    <div>
      <div className="resumCards">
        <div className={bluebg ? " bluBg " : "card"}>
          <p>{period}</p>
          <h2>{qualification}</h2>
          <h3>{university}</h3>
        </div>
      </div>
    </div>
  );
}
