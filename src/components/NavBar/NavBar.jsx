import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import navStyle from "./NavBar.module.css";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <link
              href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
              rel="stylesheet"
            />
            <img
              alt=""
              src="/maze.svg"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />
            {"  "}
            <span className={navStyle.navBar}>PATH FINDING VISUALISER </span>
            <small style={{ color: "#ggg" }}> </small>{" "}
            <Navbar.Text>Developed By: Arnav</Navbar.Text>
            <span>&nbsp;&nbsp;</span> Red Node is the Start
            <span>&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;</span> Green Node is the Target
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
