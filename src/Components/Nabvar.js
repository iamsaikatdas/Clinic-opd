import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, Nav, NavItem, NavLink } from "reactstrap";
import "./Nabvar.css";

const Nabvar = () => {
  return (
    <div>
      <Nav id="navLink">
        <NavItem id="navItem">
          <NavLink active tag={Link} to="/">
            <h3>
              My <span>Blogs</span>
            </h3>
          </NavLink>
        </NavItem>
        <NavItem id="navItem">
          <NavLink tag={Link} to="/about">
            About
          </NavLink>
        </NavItem>
        <NavItem id="navItem">
          <NavLink tag={Link} to="Login">
            Login
          </NavLink>
        </NavItem>
        <NavItem id="navItem">
          <NavLink tag={Link} to="/singup">
            Sing Up
          </NavLink>
        </NavItem>

        <NavItem id="navItem">
          <Input id="searchNav" placeholder="Search Here" />
        </NavItem>

        <NavItem id="navItem">
          <Button>Search</Button>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Nabvar;
