import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;

    return (
      <div className="card card-body mb-3">
        <h4>{this.props.name}</h4>
        <ul class="list-group">
          <li class="list-group-item">email: {this.props.email}</li>
          <li class="list-group-item">phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
