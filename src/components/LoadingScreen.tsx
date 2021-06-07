import React from "react";
import { ImSpinner9 } from "react-icons/im";

const LoadingScreen: React.FC = () => {
  return (
    <>
      <div className="LoadingScreen">
        <ImSpinner9 />
      </div>
    </>
  );
};
export default LoadingScreen;
