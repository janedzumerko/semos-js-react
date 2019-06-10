import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import classes from './Navigation.module.css';

class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
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
								<NavLink
									className={classes.link}
									exact
									activeClassName={classes.activePage}
									to="/"
								>
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className={classes.link}
									activeClassName={classes.activePage}
									to="/store"
								>
									Store
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className={classes.link}
									activeClassName={classes.activePage}
									to="/my-cart"
								>
									My Cart
									<span className={classes.circle}>
										{this.props.cartCounter}
									</span>
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cartCounter: state.myCart.length,
	};
};

export default connect(mapStateToProps)(Navigation);
