import React, { Component } from "react";

class Appointments extends Component {
  state = {
    headers: [
      "Id",
      "Date",
      "Start",
      "End",
      "Invites",
      "Subject",
      "Location",
      "Actions"
    ],
    appointments: [
      {
        Id: 1,
        Date: "2019-04-11",
        Start: "04:00 PM",
        End: "05:00 PM",
        Invites: "Tommy",
        Subject: "new project discussion",
        Location: "My office"
      },
      {
        Id: 2,
        Date: "2019-04-11",
        Start: "06:00 PM",
        End: "06:30 PM",
        Invites: "Robert",
        Subject: "casual discussion",
        Location: "Coffee shop"
      }
    ],
    total: 0
  };
  render() {
    return (
      <div>
        <div className="input-group mb-3 col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              @example.com
            </span>
          </div>
          <div className="col-2">
            <span className="input-group-text" id="basic-addon2">
              Add
            </span>
          </div>
          <div className="col-2">
            <span className="input-group-text" id="basic-addon2">
              Delete
            </span>
          </div>
        </div>
        <table
          className="table table-striped table-hover table-sm table-bordered"
          cellspacing="0"
          width="100%"
        >
          <caption>List of Appointments</caption>
          <thead className="thead-dark">
            <tr>
              <th scope="col">
                <input className="m-2" type="checkbox" /> #
              </th>
              {this.state.headers.map(head => (
                <th scope="col">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.map(app => (
              <tr>
                <td>
                  <input className="m-2" type="checkbox" />
                </td>
                {Object.values(app).map(attrib => (
                  <td>{attrib}</td>
                ))}
                <td>edit; delete</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="thead-dark">
            <tr>
              <th scope="col">
                <input className="m-2" type="checkbox" /> #
              </th>
              {this.state.headers.map(head => (
                <th scope="col">{head}</th>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Appointments;
