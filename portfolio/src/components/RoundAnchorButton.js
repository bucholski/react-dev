import React from "react";

const RoundAnchorButton = ({ icon, text, link, aria }) => {
  return (
    <a href={link} target="_blank" className="round-a-btn" aria-label={aria}>
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default RoundAnchorButton;
