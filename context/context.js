import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

export const MyContextData = createContext(null);

export const MyUserContext = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`/api/user/1`);
        setCurrentUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  return (
    <MyContextData.Provider
      value={currentUser} // value of the context
    >
      {props.children}
    </MyContextData.Provider>
  );
};
