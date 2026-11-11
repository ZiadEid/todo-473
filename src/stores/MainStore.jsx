import { createContext, useState } from "react";

export const GlobalStore = createContext();

export default function MainStore({ children }) {
  // Vars
  const base_url = "http://localhost:1337/api";

  // State
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Function

  const data = {
    base_url,
    token,
    setToken,
  };
  return <GlobalStore.Provider value={data}>{children}</GlobalStore.Provider>;
}
