import React, { Component } from 'react'

export default class Contact extends Component {

    render() {

        // const { name, id, email, phone } = this.props
        console.log('triggered Contact')
        return (
            <div>

                <h4>{this.props.name}</h4>
                <h4>{this.props.email}</h4>
            </div>
        )
    }
}
