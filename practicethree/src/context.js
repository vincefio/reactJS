import React, { Component } from 'react'

export const Context = React.createContext({
    themeColor: '#4F6D7A'
});

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
    }

    render() {
        return (
            <Context.Provider value='im the value!'>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer