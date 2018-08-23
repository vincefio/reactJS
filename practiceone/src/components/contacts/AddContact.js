import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    render() {
        const { name, email, phone } = this.state;

        return (
            <div>
                <Row>
                    <Input placeholder="First Name" s={12} label="First Name" value={name} />
                    <Input placeholder="Last Name" s={12} label="Last Name" />
                    <Input type="email" label="Email" s={12} />

                    <Button type="submit" value="Add Contact" waves='light'>Submit Contact</Button>

                </Row>
            </div>
        )
    }
}

export default AddContact;
