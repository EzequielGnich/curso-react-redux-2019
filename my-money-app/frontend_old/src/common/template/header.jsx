import React from "react";
import Navbar from "./navbar";

export default props => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span className="logo-mini">
        <b>My</b>M
      </span>
      <span className="logo-lg">
        <i className="fa fa-money" />
        <b> My</b>Money
      </span>
    </a>
    <nav className="navbar navbar-static-top" role="navigation">
      <a className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <Navbar />
    </nav>
  </header>
);
