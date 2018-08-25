import React, { Component } from 'react'
import { Button, Icon, Navbar, NavItem } from 'react-materialize'

export default class Header extends Component {

    render() {
        const { name } = this.props


        return (

            < div >

                <Navbar brand={name} right>
                    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                    <NavItem href='components.html'>Components</NavItem>
                </Navbar>


            </div >
        )
    }
}
