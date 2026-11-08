import { User } from "lucide-react";
import { Link, NavLink } from "react-router";
import Button from "./shared/Button";

const Navbar = () => {
  return (
    <header className="shadow-2xl py-3 rounded-lg mt-5">
      <div className="container flex items-center justify-between">
        <Link to={"/"} className="text-2xl font-bold">
          Home
        </Link>

        <div className="flex gap-2">
          <Link to={"/profile"}>
            <User className="border-4 border-gray-300 hover:border-indigo-500 duration-300 rounded-full w-12 h-12 p-2 " />
          </Link>

          <Link to={"/login"}>
            <Button>login</Button>
          </Link>
          <Link to={"/register"}>
            <Button>register</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
