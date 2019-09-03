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
      <button className="sidebar-toggle" data-toggle="offcanvas">
        <span className="sr-only">Toggle navigation</span>
      </button>
      <Navbar />
    </nav>
  </header>
);
