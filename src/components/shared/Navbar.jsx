import { User } from "lucide-react";
import { Link, useLocation } from "react-router";
import Button from "./Button";
import { useContext } from "react";
import { GlobalStore } from "../../stores/MainStore";

const Navbar = () => {
  // Hooks
  const { token, setToken } = useContext(GlobalStore);
  const location = useLocation();

  // Logout
  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }
  return (
    <header className="shadow-2xl py-3 rounded-lg mt-5">
      <div className="container flex items-center justify-between">
        <Link to={"/"} className="text-2xl font-bold">
          Home
        </Link>

        <div className="flex gap-2">
          {token ? (
            <>
              <Link to={"/profile"}>
                <User className="border-4 border-gray-300 hover:border-indigo-500 duration-300 rounded-full w-12 h-12 p-2 " />
              </Link>

              <Button handleClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              {location.pathname == "/register" && (
                <Link to={"/login"}>
                  <Button>login</Button>
                </Link>
              )}
              {location.pathname == "/login" && (
                <Link to={"/register"}>
                  <Button>Register</Button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
