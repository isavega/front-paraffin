import { useContext } from "react";

import { MyContextData } from "../context/context";

const useCurrentUser = () => {
  const context = useContext(MyContextData);

  return context;
};

export default useCurrentUser;
