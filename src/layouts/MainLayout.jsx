import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col w-170 mx-auto">
      <Navbar />
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
