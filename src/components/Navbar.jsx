import React from "react";
import Logo from "./Logo";
import { Button } from "./Button";
import { NavLink } from "react-router";

const Navbar = () => {
  const functName = () => console.log("Hello World");
  const styleName = {
    borderRadius: "4px",
  };
  return (
    <div className="navbar">
      <Logo />

      <div>
        <ul>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-green-500"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/domain">Domain</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/admin">Admin</NavLink>
          <NavLink to="/signup">signUp</NavLink>
        </ul>

        <Button text="Get Started" customBorder={styleName.borderRadius} />
      </div>
    </div>
  );
};

export default Navbar;
