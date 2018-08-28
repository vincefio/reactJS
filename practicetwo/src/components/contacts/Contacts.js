import React, { Component } from 'react'
import Contact from './Contact'
import Addcontact from './Addcontact'
import { Consumer } from '../../context'


export default class Contacts extends Component {
    constructor() {
        super();
        this.state = {
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
        }

    }

    deleteContact = (id) => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact =>
            contact.id !== id
        )

        this.setState({ contacts: newContacts })
    }

    render() {
        const { contacts } = this.state;
        //console.log('triggered')
        return (
            <Consumer>
                <div>
                    {value => {
                        const { contacts } = value;
                        return (
                            <div>
                                <p>yoooooo</p>
                            </div>
                        )
                    }}


                    {/*{contacts.map((contact, i) => (
                        <Contact key={i} name={contact.name} email={contact.email} phone={contact.phone} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
                    ))}*/}

                </div>
            </Consumer>
        )
    }
}
