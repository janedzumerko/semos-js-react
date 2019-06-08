import { INCREMENT } from "./actions";

const initialState = {
	sites: ['wired', 'time', 'hacker-news', 'cnn', 'fox-news'],
	currentNews: {
		articles: [],
	},
	counter: 0
};

const reducer = (state = initialState, action) => {
	if (action.type === 'SAVE_NEWS') {
		return {
			...state,
			currentNews: action.payload,
		};
	}
	if (action.type === INCREMENT) {
		return {
			...state,
			counter: state.counter + 1
		}
	}

	return state;
};

export default reducer;
