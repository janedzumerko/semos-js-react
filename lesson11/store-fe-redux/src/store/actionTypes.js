export const INIT_GLOBAL_STATE = 'INIT_GLOBAL_STATE';

export const ADD_TO_CART = 'ADD_TO_CART';

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const initGlobalState = payload => {
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
