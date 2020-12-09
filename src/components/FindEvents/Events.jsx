import React from "react";

import "./Events.css";

const Events1 = (props) => {
    
  const options = [
    {text: "Information Technology ",handler: props.actionProvider.handleEvents2,id: 1},
    { text: "Healthcare", handler: props.actionProvider.handleEvents2, id: 2 },
    { text: "Commerce Technology", handler: props.actionProvider.handleEvents2, id: 3 },
    { text: "Cybersecurity", handler: props.actionProvider.handleEvents2, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="help-option-button" key={option.id} onClick={option.handler}>
      {option.text} </button> ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

const Events2 = (props) => {
    
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
    Events1,
    Events2
}