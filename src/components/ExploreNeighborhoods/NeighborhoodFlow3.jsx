import React from "react";

import "./NeighborhoodFlow.css";

const NeighborhoodFlow3 = (props) => {
    
  const options = [
    {text: "0-100",handler: props.actionProvider.handleNeighborhoodFlow4,id: 1},
    { text: "100-200", handler: props.actionProvider.handleNeighborhoodFlow4, id: 2 },
    { text: "200-500", handler: props.actionProvider.handleNeighborhoodFlow4, id: 3 },
    { text: "500+", handler: props.actionProvider.handleNeighborhoodFlow4, id: 4 },
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

export default NeighborhoodFlow3;

