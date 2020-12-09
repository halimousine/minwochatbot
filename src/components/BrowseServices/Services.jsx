import React from "react";

import "./Services.css";

const Services1 = (props) => {
    
  const options = [
    {text: "Information Technology ",handler: props.actionProvider.handleServices2,id: 1},
    { text: "Healthcare", handler: props.actionProvider.handleServices2, id: 2 },
    { text: "Commerce Technology", handler: props.actionProvider.handleServices2, id: 3 },
    { text: "Cybersecurity", handler: props.actionProvider.handleServices2, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="help-option-button" key={option.id} onClick={option.handler}>
      {option.text} </button> ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

const Services2 = (props) => {
    
    const options = [
        {text: "Business Development",handler: props.actionProvider.helpEnd,id: 1},
        { text: "Product Design", handler: props.actionProvider.helpEnd, id: 2 },
        { text: "Product Development", handler: props.actionProvider.helpEnd, id: 3 },
        { text: "Information Technology", handler: props.actionProvider.helpEnd, id: 4 },
    ];
  
    const optionsMarkup = options.map((option) => (
      <button className="help-option-button" key={option.id} onClick={option.handler}>
        {option.text} </button> ));
  
    return <div className="help-options-container">{optionsMarkup}</div>;
  };

export {
    Services1,
    Services2
}