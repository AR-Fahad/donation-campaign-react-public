import { NavLink, Outlet } from "react-router-dom";
import "../../assets/style.css";

const NavBar = () => {
  return (
    <>
      <div className="md:flex md:justify-between p-8 items-center">
        <div>
          <img src="https://i.ibb.co/k318CT2/Logo.png" alt="" />
        </div>
        <div className="flex gap-12 text-black">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/donation">Donation</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default NavBar;
