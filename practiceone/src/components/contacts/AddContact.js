import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'
import { Consumer } from '../../context'
import uuid from 'uuid'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault()

        const { name, email, phone } = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({ type: 'ADD_CONTACT', payload: newContact })
    }

    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <Row >
                                <form onSubmit={this.onSubmit.bind(this, dispatch)} action="">
                                    <Input placeholder="First Name" s={12} name="name" label="First Name" value={name} onChange={this.onChange} />

                                    <Input type="email" label="Email" name="email" s={12} value={email} onChange={this.onChange} />
                                    <Input placeholder="Phone Number" s={12} name="phone" label="Last Name" value={phone} onChange={this.onChange} />

                                    <Button type="submit" value="Add Contact" waves='light'>Submit Contact</Button>
                                </form>
                            </Row>
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default AddContact;
