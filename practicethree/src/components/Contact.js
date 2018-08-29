import React, { Component } from 'react'
import { Consumer } from '../context'
//const Context = React.createContext();

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1>yo</h1>
                <Consumer>
                    {context => (
                        <p>im a contact</p>
                    )}
                </Consumer>
            </div>
        )
    }
}
