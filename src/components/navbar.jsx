import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          <span className="badge badge-pill badge-secondary m-2">0 </span>
          Appointments
        </span>
      </nav>
    );
  }
}

export default Navbar;
