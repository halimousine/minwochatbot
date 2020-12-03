import React from "react";

import "./WorkWithExperts.css";

const WWExperts1 = (props) => {
    
  const options = [
    {text: "Information Technology",handler: props.actionProvider.handleWWExperts2,id: 1},
    { text: "Healthcare", handler: props.actionProvider.handleWWExperts2, id: 2 },
    { text: "Commerce Technology", handler: props.actionProvider.handleWWExperts2, id: 3 },
    { text: "Cybersecurity", handler: props.actionProvider.handleWWExperts2, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="help-option-button" key={option.id} onClick={option.handler}>
      {option.text} </button> ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

const WWExperts2 = (props) => {
    
  const options = [
    {text: "In the United States",handler: props.actionProvider.handleWWExperts3,id: 1},
    { text: "International", handler: props.actionProvider.handleWWExperts3, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="help-option-button" key={option.id} onClick={option.handler}>
      {option.text} </button> ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

const WWExperts3 = (props) => {
    
  const options = [
    {text: "Business Development",handler: props.actionProvider.handleWWExperts4,id: 1},
    { text: "Product Design", handler: props.actionProvider.handleWWExperts4, id: 2 },
    { text: "Product Development", handler: props.actionProvider.handleWWExperts4, id: 3 },
    { text: "Other Rialto tags", handler: props.actionProvider.handleWWExperts4, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="help-option-button" key={option.id} onClick={option.handler}>
      {option.text} </button> ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

const WWExperts4 = (props) => {
    
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

const WWExperts5 = (props) => {
    
    const options = [
      {text: "Business Development",handler: props.actionProvider.handleWWExperts6,id: 1},
      { text: "Product Design", handler: props.actionProvider.handleWWExperts6, id: 2 },
      { text: "Product Development", handler: props.actionProvider.handleWWExperts6, id: 3 },
      { text: "Other Rialto tags", handler: props.actionProvider.handleWWExperts6, id: 4 },
    ];
  
    const optionsMarkup = options.map((option) => (
      <button className="help-option-button" key={option.id} onClick={option.handler}>
        {option.text} </button> ));
  
    return <div className="help-options-container">{optionsMarkup}</div>;
  };

  const WWExperts6 = (props) => {
    
    const options = [
      {text: "Business Development",handler: props.actionProvider.handleWWExperts7,id: 1},
      { text: "Product Design", handler: props.actionProvider.handleWWExperts7, id: 2 },
      { text: "Product Development", handler: props.actionProvider.handleWWExperts7, id: 3 },
      { text: "Other Rialto tags", handler: props.actionProvider.handleWWExperts7, id: 4 },
    ];
  
    const optionsMarkup = options.map((option) => (
      <button className="help-option-button" key={option.id} onClick={option.handler}>
        {option.text} </button> ));
  
    return <div className="help-options-container">{optionsMarkup}</div>;
  };

const WWExperts7 = (props) => {
    
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
    WWExperts1,
    WWExperts2,
    WWExperts3,
    WWExperts4,
    WWExperts5,
    WWExperts6,
    WWExperts7,
}

