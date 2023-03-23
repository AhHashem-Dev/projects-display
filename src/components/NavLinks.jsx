import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleSidebar } from "../features/interfaceSlice";
import { useAuth0 } from "@auth0/auth0-react";

const NavLinks = ({ className }) => {
  const dispatch = useDispatch();
  const { logout } = useAuth0();

  return (
    <ul
      className={`nav-links ${className} `}
      onClick={() => {
        dispatch(toggleSidebar());
      }}
    >
      <NavLink
        to="/"
        className={({ isActive }) => {
          return `${isActive ? "active-link nav-link" : "nav-link"}`;
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/local"
        className={({ isActive }) => {
          return `${isActive ? "active-link nav-link" : "nav-link"}`;
        }}
      >
        My Hotion
      </NavLink>
      <NavLink
        to="/global"
        className={({ isActive }) => {
          return `${isActive ? "active-link nav-link" : "nav-link"}`;
        }}
      >
        Global Hotion
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => {
          return `${isActive ? "active-link nav-link" : "nav-link"}`;
        }}
      >
        My Profile
      </NavLink>
      <div className="line"></div>
      <button
        className="logout-btn nav-link"
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        logout
      </button>
    </ul>
  );
};

export default NavLinks;
