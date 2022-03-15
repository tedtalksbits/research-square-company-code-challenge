import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
   return (
      <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/admin">Admin</NavLink>
         <NavLink to="/post">Post New</NavLink>
      </nav>
   );
};

export default Nav;
