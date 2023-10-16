import { useEffect, useState } from "react";
import { createContext } from "react";

export const contextUser = createContext(null);

const UserContext = ({ children }) => {
  const [total, setTotal] = useState([]);

  useEffect(() => {
    barCharts({ builtup_area: 1000, approx_cost: 1000 });
  }, []);
  const barCharts = (values) => {
    const value = values.builtup_area * values.approx_cost;
    const firstMonth = {
      name: "1st Month 21.9%",
      datavalue: (value * 21.9) / 100,
    };
    const secondMonth = {
      name: "2st Month 18.4%",
      datavalue: (value * 18.4) / 100,
    };
    const thirdMonth = {
      name: "3st Month 11.1%",
      datavalue: (value * 11.1) / 100,
    };
    const fourthMonth = {
      name: "4st Month 16.9%",
      datavalue: (value * 16.9) / 100,
    };
    const fifthMonth = {
      name: "5st Month 17.8%",
      datavalue: (value * 17.8) / 100,
    };
    const sixMonth = {
      name: "1st Month 13.9%",
      datavalue: (value * 13.9) / 100,
    };
    setTotal([
      firstMonth,
      secondMonth,
      thirdMonth,
      fourthMonth,
      fifthMonth,
      sixMonth,
    ]);
  };
  return (
    <contextUser.Provider value={{ barCharts, total }}>
      {children}
    </contextUser.Provider>
  );
};

export default UserContext;
