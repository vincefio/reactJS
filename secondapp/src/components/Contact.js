import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from '../context'

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  }


  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-3">
              <h4>
                {contact.name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i className="fas fa-times" style={{
                  cursor: 'pointer', float: 'right', color: 'red'
                }}
                  onClick={this.onDeleteClick}
                ></i>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">email: {contact.email}</li>
                  <li className="list-group-item">phone: {contact.phone}</li>
                </ul>
              ) : null}

            </div>
          )
        }}
      </Consumer>


    );
  }
}

export default Contact;
