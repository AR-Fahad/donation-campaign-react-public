import { NavLink, Outlet } from "react-router-dom";
import "../../assets/style.css";
import { Helmet } from "react-helmet-async";

const NavBar = () => {
  return (
    <>
      <Helmet>
        <title>Donation Campaign | Home</title>
      </Helmet>
      <div className="md:flex md:justify-between p-8 items-center">
        <div>
          <img src="https://i.ibb.co/k318CT2/Logo.png" alt="" />
        </div>
        <div className="flex gap-12 text-black">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/donations">Donation</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default NavBar;
