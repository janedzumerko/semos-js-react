import {
	ADD_TO_CART,
	CLEAR_CURRENT,
	INIT_GLOBAL_STATE,
	REMOVE_FROM_CART,
	UPDATE_CURRENT_PRODUCT,
} from './actionTypes';

const initialState = {
	products: [],
	cartProducts: [],
	cartIds: {},
	currentProduct: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_GLOBAL_STATE:
			return {
				...state,
				products: action.products,
			};
		case ADD_TO_CART:
			const mapById = { ...state.cartIds };
			if (mapById.hasOwnProperty(action.payload.id)) {
				let idNums = mapById[action.payload.id];
				idNums++;
				mapById[action.payload.id] = idNums;
			} else {
				mapById[action.payload.id] = 1;
			}

			const addCartProducts = [];

			for (let i = 0; i < state.products.length; i++) {
				if (mapById.hasOwnProperty(state.products[i].id)) {
					addCartProducts.push({
						...state.products[i],
						quantity: mapById[state.products[i].id],
					});
				}
			}

			return {
				...state,
				cartIds: mapById,
				cartProducts: addCartProducts,
			};
		case REMOVE_FROM_CART:
			const removeMapById = { ...state.cartIds };
			let idNumsRemove = removeMapById[action.payload];

			idNumsRemove--;

			if (idNumsRemove === 0) {
				delete removeMapById[action.payload];
			} else {
				removeMapById[action.payload] = idNumsRemove;
			}

			const removeCartProducts = [];

			for (let i = 0; i < state.products.length; i++) {
				if (removeMapById.hasOwnProperty(state.products[i].id)) {
					removeCartProducts.push({
						...state.products[i],
						quantity: removeMapById[state.products[i].id],
					});
				}
			}

			return {
				...state,
				cartIds: removeMapById,
				cartProducts: removeCartProducts,
			};
		case UPDATE_CURRENT_PRODUCT:
			return {
				...state,
				currentProduct: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				currentProduct: {},
			};
		default:
			return state;
	}
};

export default reducer;
