import { useContext } from "react";
import { contextUser } from "../context/UserContext";

export const useChart = () => useContext(contextUser);
