import React, { Component } from 'react'
import { Row, Input, Button, Icon } from 'react-materialize'
const uuid = require('uuid')

export default class AddContact extends Component {
    state = {
        firstName: '',
        lastName: '',
        phone: ''
    }

    onSubmit = (e) => {
        e.preventDefault();

        //create new person object

        const newPerson = {
            id: uuid(),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone
        }
        console.log(newPerson)
    }

    formInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {

        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <Row>
                        <Input name="firstName" s={12} label="First Name" onChange={this.formInput.bind(this)} />
                        <Input name="lastName" s={12} label="Last Name" onChange={this.formInput} />
                        <Input name="phone" validate type='tel' label="Phone" s={12} onChange={this.formInput}><Icon>phone</Icon></Input>
                        <Button type="submit" waves='light'>Submit</Button>
                    </Row>
                </form>
            </React.Fragment>
        )
    }
}
