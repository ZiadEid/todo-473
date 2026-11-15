import { createContext, useState } from "react";

export const GlobalStore = createContext();

export default function MainStore({ children }) {
  // Vars
  const base_url = "http://localhost:1337/api";

  // State
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")))

  // Function

  const data = {
    base_url,
    token,
    setToken,
    userData,
    setUserData
  };
  return <GlobalStore.Provider value={data}>{children}</GlobalStore.Provider>;
}
