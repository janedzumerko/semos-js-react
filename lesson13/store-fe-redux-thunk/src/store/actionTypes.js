export const INIT_GLOBAL_STATE = 'INIT_GLOBAL_STATE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CURRENT_PRODUCT = 'UPDATE_CURRENT_PRODUCT';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';

const initGlobalState = payload => {
	return {
		type: INIT_GLOBAL_STATE,
		products: payload,
	};
};

export const addToCart = payload => {
	return {
		type: ADD_TO_CART,
		payload: payload,
	};
};

export const removeFromCart = payload => {
	return {
		type: REMOVE_FROM_CART,
		payload: payload,
	};
};

export const fetchProducts = () => {
	return dispatch => {
		fetch('http://localhost:8080/products')
			.then(response => response.json())
			.then(data => {
				dispatch(initGlobalState(data.products))
			});
	}
}

const updateCurrentProduct = payload => {
	return {
		type: UPDATE_CURRENT_PRODUCT,
		payload
	}
}

export const fetchCurrentProduct = id => {
	return dispatch => {
		fetch(`http://localhost:8080/products/${id}`)
			.then(response => response.json())
			.then(data => dispatch(updateCurrentProduct(data)));
	}
}

export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT
	}
}