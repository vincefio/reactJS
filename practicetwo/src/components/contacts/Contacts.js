import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {
    constructor(props) {
        super(props);
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

    render() {
        const { contacts } = this.state;
        console.log('triggered')
        return (
            <div>
                <Contact name={contacts.name} email={contacts.email} />
            </div>
        )
    }
}
