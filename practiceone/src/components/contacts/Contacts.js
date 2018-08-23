import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../../context'

export default class Contacts extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>

                            {contacts.map(contact =>
                                <Contact name={contact.name} email={contact.email} id={contact.id} key={contact.id} />

                            )}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}
