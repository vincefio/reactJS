import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'

export default class Addcontact extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phone: ''
        }
    }

    submitFunction = (e) => {
        e.preventDefault();
        console.log(e.target.firstName.value)
    }

    handleChange = (e) => {
        this.setState({ firstName: e.target.value })
    }

    render() {

        return (
            <div>
                <Row>
                    <form onChange={this.handleChange.bind(this)} onSubmit={this.submitFunction.bind(this)}>
                        <Input onChange={this.handleChange.bind(this)} name="firstName" placeholder="firstname" s={12} label="First Name" />
                        <Input name="lastName" placeholder="lastname" s={12} label="Last Name" />
                        <Input name="phone" placeholder="phone number" s={12} label="Phone Number" />
                        <Button type="submit" value="Add Contact" waves='light'>Submit Contact</Button>
                    </form>
                </Row>
            </div>
        )
    }
}
