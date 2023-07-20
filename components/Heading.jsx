import React from "react";

export default function Heading({ title }) {
  return (
    <div className="heading fleStart">
      <h1 className="globHeading fontRob">{title}</h1>
      <span className="line"></span>
    </div>
  );
}
