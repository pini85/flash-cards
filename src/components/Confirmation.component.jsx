import React from "react";

const Confirmation = (props) => {
  return (
    <>
      <h3>Did you get it right?</h3>
      <button onClick={props.removeCard}>Yes</button>
      <button onClick={props.updateCard}>No</button>
    </>
  );
};
export default Confirmation;
