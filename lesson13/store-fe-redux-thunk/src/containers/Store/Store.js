import React from 'react';
import SizeFilter from '../../component/SizeFilter/SizeFilter';
import Products from '../../component/Products/Products';
import { connect } from 'react-redux';
// import { INIT_GLOBAL_STATE } from '../../store/actionTypes';
import * as actionTypes from '../../store/actionTypes';

class Store extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [],
			currentSelected: new Set(),
			filtered: [],
		};
	}

	componentDidMount() {
		if (this.props.prods.length === 0) {
			this.props.fetchProducts();
		} else {
			this.setState({ products: this.props.prods, filtered: this.props.prods });
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.prods !== prevProps.prods) {
			this.setState({ products: this.props.prods, filtered: this.props.prods });
		}
	}

	updateFiltered = () => {
		if (this.state.currentSelected.size === 0) {
			this.setState((prevState, props) => ({ filtered: prevState.products }));
		} else {
			const filtered = [];
			for (let i = 0; i < this.state.products.length; i++) {
				for (let j = 0; j < this.state.products[i].availableSizes.length; j++) {
					if (
						this.state.currentSelected.has(
							this.state.products[i].availableSizes[j]
						)
					) {
						filtered.push(this.state.products[i]);
						break;
					}
				}
			}
			this.setState({ filtered });
		}
	};

	handleProductClick = id => {
		this.props.history.push(`/store/${id}`);
	};

	handleSelectedFilter = size => {
		const tmpSet = this.state.currentSelected;
		if (tmpSet.has(size)) {
			tmpSet.delete(size);
		} else {
			tmpSet.add(size);
		}

		this.setState({ currentSelected: tmpSet });
		this.updateFiltered();
	};

	addToCartHandler = (event, id) => {
		event.stopPropagation();

		const found = this.state.products.find(element => {
			return element.id === id;
		});
		this.props.addToCart(found);
	};

	render() {
		return (
			<>
				<SizeFilter
					click={this.handleSelectedFilter}
					selected={this.state.currentSelected}
				/>

				<p>
					{this.state.filtered.length} item
					{this.state.filtered.length !== 1 ? 's' : ''}
				</p>

				<Products
					addToCart={this.addToCartHandler}
					click={this.handleProductClick}
					filtered={this.state.filtered}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		prods: state.products,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchProducts: () => dispatch(actionTypes.fetchProducts()),
		addToCart: selectedProduct => dispatch(actionTypes.addToCart(selectedProduct)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Store);
