import React, { Component } from 'react';
import classes from './CartProduct.module.css';

class CartProduct extends Component {
	state = {
		isHovering: false,
	};

	handleMouseEnter = () => {
		this.setState({ isHovering: true });
	};

	handleMouseLeave = () => {
		this.setState({ isHovering: false });
	};

	render() {
		const { product, click } = this.props;

		return (
			<div
				className={classes.wrapper}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				{this.state.isHovering ? (
					<div onClick={click} className={classes.removeIcon}>
						X
					</div>
				) : null}

				<img
					className={classes.cartImg}
					src={product.imgUrl}
					alt={product.title}
				/>
				<div className={classes.info}>
					<h3>{product.title}</h3>
					<p>{product.style}</p>
				</div>
				<p className={classes.price}>
					{product.price} {product.currencyId}
				</p>
				<p>Quantity: {product.quantity}</p>
			</div>
		);
	}
}

export default CartProduct;
