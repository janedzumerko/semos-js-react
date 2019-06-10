import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartProduct from '../../component/CartProduct/CartProduct';
import { removeFromCart } from '../../store/actionTypes';
import classes from './MyCart.module.css';

class MyCart extends Component {
	componentDidMount() {
		// console.log(this.props.myCart);
	}

	handleRemoveProduct = id => {
		// console.log('Remove product with id : ', id);
		this.props.removeFromCart(id);
	};

	render() {
		return (
			<div className={classes.wrapper}>
				<div className={classes.myCart}>
					{this.props.myCart.map(product => (
						<CartProduct
							product={product}
							key={product.id}
							click={() => this.handleRemoveProduct(product.id)}
						/>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		myCart: state.myCart,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeFromCart: id => dispatch(removeFromCart(id)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyCart);
