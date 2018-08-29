import React, { Component } from 'react'
import { Row, Input, Button, Icon } from 'react-materialize'
import { Consumer } from '../context'
const uuid = require('uuid')

export default class AddContact extends Component {
    state = {
        firstName: '',
        lastName: '',
        phone: ''
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        //create new person object

        const newPerson = {
            id: uuid(),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone
        }

        console.log(newPerson)
        console.log(dispatch)

        dispatch({ type: 'ADD_USER', payload: newPerson })

    }

    formInput = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {

        return (
            <Consumer>
                {value =>
                    <React.Fragment>
                        <form onSubmit={this.onSubmit.bind(this, value.dispatch)} action="">
                            <Row>
                                <Input name="firstName" s={12} label="First Name" onChange={this.formInput.bind(this)} />
                                <Input name="lastName" s={12} label="Last Name" onChange={this.formInput} />
                                <Input name="phone" validate type='tel' label="Phone" s={12} onChange={this.formInput}><Icon>phone</Icon></Input>
                                <Button type="submit" waves='light'>Submit</Button>
                            </Row>
                        </form>
                    </React.Fragment>
                }

            </Consumer>
        )
    }
}
