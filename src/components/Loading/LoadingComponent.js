import React from "react";
import "./loading.scss";

const LoadingComponent = () => {
  return (
    <>
      <div className="loading-container">
        <div className="lds-hourglass"></div>
      </div>
    </>
  );
};
export default LoadingComponent;
