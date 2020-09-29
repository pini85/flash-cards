import React from "react";

const RevealButton = (props) => {
  const revealCard = () => {
    props.revealCard();
  };
  return (
    <div>
      <button onClick={revealCard}>Reveal Answer</button>
    </div>
  );
};
export default RevealButton;
