import React, { Component } from 'react'

class Contact extends Component {

    render() {

        const { name, id, email, phone } = this.props
        //console.log('triggered Contact')
        return (
            <div>
                <h4>{name}</h4>
                <h4>{email}</h4>
            </div>
        )
    }
}

export default Contact;
