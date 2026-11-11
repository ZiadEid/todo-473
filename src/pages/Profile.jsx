import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { GlobalStore } from "../stores/MainStore";

export default function Profile() {
  // Hooks
  const navigate = useNavigate();
  const { token } = useContext(GlobalStore);
  // Protected Route
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  return <div>Profile</div>;
}
