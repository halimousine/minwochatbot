import React from "react";

import "./NeighborhoodFlow.css";

const NeighborhoodFlow5 = (props) => {
    
  const options = [
    {text: "Yes",handler: () => {},id: 1},
    { text: "No", handler: () => {}, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="help-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

export default NeighborhoodFlow5;

