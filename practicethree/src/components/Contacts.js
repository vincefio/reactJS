import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../context'

export default class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {context => (

                    <React.Fragment>
                        {context.contacts.map(contact =>
                            <Contact />

                        )}
                    </React.Fragment>

                )}
            </Consumer>
        )
    }
}
