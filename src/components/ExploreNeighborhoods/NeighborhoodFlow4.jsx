import React from "react";

import "./NeighborhoodFlow.css";

const NeighborhoodFlow4 = (props) => {
    
  const options = [
    {text: "Business Development",handler: props.actionProvider.handleNeighborhoodFlow5,id: 1},
    { text: "Product Design", handler: props.actionProvider.handleNeighborhoodFlow5, id: 2 },
    { text: "Product Development", handler: props.actionProvider.handleNeighborhoodFlow5, id: 3 },
    { text: "Information Technology", handler: props.actionProvider.handleNeighborhoodFlow5, id: 4 },
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

export default NeighborhoodFlow4;
