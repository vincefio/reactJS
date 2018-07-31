import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Schmaron",
        email: "kdogg@gmail.com",
        phone: "666--666-666"
      },
      {
        id: 3,
        name: "Henry Hardass",
        email: "Henryyyy@gmail.com",
        phone: "111-111-1111"
      }
    ]
  };

  render() {
    //destructuring
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
