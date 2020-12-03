import React from "react";

import "./NeighborhoodFlow.css";

const NeighborhoodFlow2 = (props) => {
    
  const options = [
    {text: "Yes",handler: props.actionProvider.handleNeighborhoodFlow3,id: 1},
    { text: "No", handler: props.actionProvider.handleNeighborhoodFlow3, id: 2 },
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

export default NeighborhoodFlow2;










