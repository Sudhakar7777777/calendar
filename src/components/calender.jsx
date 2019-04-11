import React, { Component } from "react";
import Navbar from "./navbar";
import Appointments from "./appointment";

class Calander extends Component {
  state = {
    appointments: []
  };
  render() {
    return (
      <div>
        <span className="navbar-brand mb-0 h1">Calander App</span>
        <Navbar />
        <main className="container">
          <Appointments />
        </main>
      </div>
    );
  }
}

export default Calander;
