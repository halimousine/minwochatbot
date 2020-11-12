import React from "react";

import "./HelpOptions.css";

const HelpOptions = (props) => {
  const options = [
    {
      text: "Explore Neighborhoods",
      handler: () => {},
      id: 1,
    },
    { text: "Work with Experts", handler: () => {}, id: 2 },
    { text: "Discover Resources", handler: () => {}, id: 3 },
    { text: "Meet Other Members", handler: () => {}, id: 4 },
    { text: "Find Events", handler: () => {}, id: 5 },
    { text: "Browse Posts", handler: () => {}, id: 6 },
    { text: "Purchase Services", handler: () => {}, id: 7 },
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

export default HelpOptions;
