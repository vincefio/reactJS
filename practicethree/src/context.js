import React, { Component } from 'react'

export const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            }
        case 'ADD_USER':
            return {
                ...state,
                contacts: [action.payload,
                ...state.contacts]
            }
        default:
            return state;
    }
}

export default class Provider extends Component {
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
        ],
        dispatch: action => {
            this.setState(state =>
                reducer(state, action))
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;