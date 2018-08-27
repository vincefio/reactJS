import React, { Component } from 'react'

class Contact extends Component {

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }

    render() {


        const { name, id, email, phone } = this.props
        //console.log('triggered Contact')
        return (
            <div className="nameContainer">
                <i className="fas fa-times" onClick={this.onDeleteClick} style={{ cursor: 'pointer', float: 'right' }} />
                <h4>{name}</h4>
                <h4>{email}</h4>

            </div>
        )
    }
}

export default Contact;
