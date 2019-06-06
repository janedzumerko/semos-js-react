import { ADD_TO_CART, INIT_GLOBAL_STATE, REMOVE_FROM_CART } from './actionTypes';

const initialState = {
	products: [],
	myCart: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_GLOBAL_STATE:
			return {
				...state,
				products: action.products,
			};
		case ADD_TO_CART:
			const newCartProducts = [...state.myCart];
			let isAlreadyPushed = false;
			for (let i = 0; i < newCartProducts.length; i++) {
				if (newCartProducts[i].id === action.payload.id) {
					isAlreadyPushed = true;
					break;
				}
			}
			if (!isAlreadyPushed) {
				newCartProducts.push(action.payload);
			}
			return {
				...state,
				myCart: newCartProducts,
			};
		case REMOVE_FROM_CART:
			const filtered = state.myCart.filter(prod => prod.id !== action.payload);
			return {
				...state,
				myCart: filtered,
			};
		default:
			return state;
	}
};

export default reducer;
