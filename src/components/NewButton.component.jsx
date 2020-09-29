import React from "react";
const NewButton = (props) => {
  const newCard = () => {
    props.newCard();
  };
  return (
    <div>
      <button onClick={newCard}>New card</button>
    </div>
  );
};

export default NewButton;
