import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
          <li>email: {this.props.email}</li>
          <li>phone: 9393939393</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
