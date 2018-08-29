import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../context'

export default class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {context => (

                    <React.Fragment>
                        {context.contacts.map((contact, i) =>
                            <Contact id={contact.id} name={contact.name} phone={contact.phone} key={i} />

                        )}
                    </React.Fragment>

                )}
            </Consumer>
        )
    }
}
