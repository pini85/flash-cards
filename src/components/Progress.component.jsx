import React from "react";

const Progress = ({ completed, total }) => {
  return (
    <div>
      <h4>Completed</h4>
      <h5>
        {completed} / {total}
      </h5>
    </div>
  );
};
export default Progress;
