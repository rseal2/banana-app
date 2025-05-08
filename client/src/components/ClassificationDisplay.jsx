import React from "react";

const ClassificationDisplay = ({ classification }) => {
  if (!classification) return null;

  const [className, { confidence }] = classification;

  return (
    <div className="Classification">
      <h1 className="Title">Classification Result</h1>
      <h2 className="Result">
        {className} ({(confidence * 100).toFixed(1)}% confidence)
      </h2>
    </div>
  );
};

export default ClassificationDisplay;
