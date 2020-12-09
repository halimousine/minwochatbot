import React from "react";

import "./HelpOptions.css";

const HelpOptions = (props) => {
  const options = [
    {text: "Explore Neighborhoods", handler: props.actionProvider.handleNeighborhoodFlow1 ,id: 1},
    { text: "Work with Experts", handler: props.actionProvider.handleWWExperts1, id: 2 },
    { text: "Discover Resources", handler: props.actionProvider.handleResources1, id: 3 },
    { text: "Meet Other Members", handler: () => {}, id: 4 },
    { text: "Find Events", handler: () => {}, id: 5 },
    { text: "Browse Posts", handler: () => {}, id: 6 },
    { text: "Purchase Services", handler: props.actionProvider.handleServices1, id: 7 },
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

const HelpEnd = (props) => {
  const options = [
    {text: "Yes",handler: props.actionProvider.help,id: 1},
    {text: "No",handler: props.actionProvider.goodbye,id: 2},
      ];

  const optionsMarkup = options.map((option) => (
    <button className="help-option-button" key={option.id} onClick={option.handler}>
      {option.text} </button> ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

const Feedback = (props) => {
  const options = [
    {text: "1",handler: props.actionProvider.thanks,id: 1},
    {text: "2",handler: props.actionProvider.thanks,id: 2},
    {text: "3",handler: props.actionProvider.thanks,id: 3},
    {text: "4",handler: props.actionProvider.thanks,id: 4},
    {text: "5",handler: props.actionProvider.thanks,id: 5},
      ];

  const optionsMarkup = options.map((option) => (
    <button className="help-option-button" key={option.id} onClick={option.handler}>
      {option.text} </button> ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

export {
  HelpOptions, 
  HelpEnd,
  Feedback
}
