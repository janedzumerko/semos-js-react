import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import {
    NavLink
} from 'react-router-dom';

import classes from './Navigation.module.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>

                {/* <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/store">Store</NavLink>
                    </li>
                </ul> */}

                <Navbar color="light" light expand="md">
                    <NavbarBrand>Semos Stores</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className={classes.link} exact activeClassName={classes.activePage} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classes.link} activeClassName={classes.activePage} to="/store">Store</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;