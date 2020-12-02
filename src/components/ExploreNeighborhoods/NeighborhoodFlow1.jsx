import React from "react";

import "./NeighborhoodFlow.css";

const NeighborhoodFlow1 = (props) => {
    
  const options = [
    {text: "1-5",handler: props.actionProvider.handleNeighborhoodFlow2,id: 1},
    { text: "5-20", handler: props.actionProvider.handleNeighborhoodFlow2, id: 2 },
    { text: "20-50", handler: props.actionProvider.handleNeighborhoodFlow2, id: 3 },
    { text: "50+", handler: props.actionProvider.handleNeighborhoodFlow2, id: 4 },
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

export default NeighborhoodFlow1;
