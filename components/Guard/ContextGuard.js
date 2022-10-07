import React, { useContext } from "react";
import { MyContextData } from "../../context/context";

const ContextGuard = ({ children }) => {
  const context = useContext(MyContextData);

  if (!context) {
    // TODO add loading indicator
    return;
  } else {
    return children;
  }
};

export default ContextGuard;
