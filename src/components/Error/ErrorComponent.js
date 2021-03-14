import React from "react";
import "./err-container.scss";

const ErrrorComponent = () => {
  return (
    <div className="error-container">
      <div className="alert alert-danger" role="alert">
        This user does not exist!
      </div>
    </div>
  );
};
export default ErrrorComponent;
