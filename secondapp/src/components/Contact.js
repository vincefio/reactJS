import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { contact } = this.props;

    return (
      <div className="card card-body mb-3">
        <h4>
          {contact.name}
          <i
            onClick={() => console.log("hello")}
            className="fas fa-sort-down"
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">email: {contact.email}</li>
          <li className="list-group-item">phone: {contact.phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
