import React, { Component } from 'react';
import { Col, Card } from 'react-materialize'
import { Consumer } from '../context'


export default class Contact extends Component {
    state = {
        showContactInfo: false
    }

    onDeleteClick = (id, dispatch) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id })
    }

    onShowClick = () => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })
    }
    render() {
        const { id, name, email, phone } = this.props;
        const { showContactInfo } = this.state

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (

                        <div className="container">
                            <Col s={6}>
                                <Card className='blue-grey darken-1' textClassName='white-text' title='Bang Bang' >
                                    {showContactInfo ? (<div><h3>{this.props.name}</h3>
                                        <h3>{this.props.email}</h3> </div>) : null}
                                    <i onClick={this.onShowClick.bind(this)} className="fas fa-sort-down" />
                                    <i class="fas fa-times" onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{ cursor: 'pointer', float: 'right' }} />
                                </Card>
                            </Col>

                        </div >
                    )
                }}
            </Consumer>

        )
    }
}

