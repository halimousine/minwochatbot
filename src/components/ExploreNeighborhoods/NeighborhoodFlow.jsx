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
    <button className="help-option-button" key={option.id} onClick={option.handler}>
      {option.text} </button> ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

const NeighborhoodFlow2 = (props) => {
    
  const options = [
    {text: "Yes",handler: props.actionProvider.handleNeighborhoodFlow3,id: 1},
    { text: "No", handler: props.actionProvider.handleNeighborhoodFlow3, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="help-option-button" key={option.id} onClick={option.handler}>
      {option.text} </button> ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

const NeighborhoodFlow3 = (props) => {
    
  const options = [
    {text: "0-100",handler: props.actionProvider.handleNeighborhoodFlow4,id: 1},
    { text: "100-200", handler: props.actionProvider.handleNeighborhoodFlow4, id: 2 },
    { text: "200-500", handler: props.actionProvider.handleNeighborhoodFlow4, id: 3 },
    { text: "500+", handler: props.actionProvider.handleNeighborhoodFlow4, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="help-option-button" key={option.id} onClick={option.handler}>
      {option.text} </button> ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

const NeighborhoodFlow4 = (props) => {
    
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
  NeighborhoodFlow1,
  NeighborhoodFlow2,
  NeighborhoodFlow3,
  NeighborhoodFlow4,
}

