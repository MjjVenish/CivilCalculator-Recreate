import React, { createContext, useEffect, useState } from "react";
export const userContext = createContext();
const initialHistory = [
  // {
  //   id: 1,
  //   roomtype: "badroom",
  //   lengthFeet: 0,
  //   lengthInches: 0,
  //   widthFeet: 0,
  //   widthInches: 0,
  //   sum: 0,
  // },
];
const UserContextProvider = ({ children }) => {
  const [history, setHistory] = useState(initialHistory);
  const [total, setTotal] = useState({
    CarpetArea: 0,
    BuiltUpArea: 0,
    SuperBuiltUpArea: 0,
  });

  useEffect(() => {
    const CarpetArea = history
      .map((his) => his.sum)
      .reduce((acc, cur) => acc + cur, 0);
    const BuiltUpArea = CarpetArea + 0.2 * CarpetArea;
    const SuperBuiltUpArea = BuiltUpArea;
    setTotal({ CarpetArea, BuiltUpArea, SuperBuiltUpArea });
  }, [history]);

  const addHistory = (money) => {
    setHistory([...history, money]);
  };
  const handledelete = (id) => {
    setHistory([...history.filter((his) => his.id !== id)]);
  };
  return (
    <userContext.Provider value={{ total, history, addHistory, handledelete }}>
      {children}
    </userContext.Provider>
  );
};
export default UserContextProvider;
