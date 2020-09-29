import React from "react";
import "./card.styles.css";

const Card = (props) => {
  const reveal = () => {
    if (props.reveal) {
      return {
        transform: "rotateY(180deg)",
        transition: "all 0.4s ease-in-out",
      };
    } else {
      return null;
    }
  };
  return (
    <div className="card-container">
      <div style={reveal()} className="card">
        <div className="front">
          <div className="question">{props.question}</div>
        </div>
        <div className="back">
          <div className="answer">{props.reveal ? props.answer : null}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
