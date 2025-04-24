import React from "react";

const ClassificationDisplay = ({ classification }) => {
  if (!classification) return null;

  return (
    <div className="Classification">
      <h2 className="Title">Classification Result</h2>
      <p className="Result">{classification}</p>
    </div>
  );
};

export default ClassificationDisplay;
