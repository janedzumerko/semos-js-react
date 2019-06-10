import { REMOVE_COUNTER, STORE_COUNTER } from '../actions';

const initialState = {
	counters: [],
};

const storeCounter = (state = initialState, action) => {
	if (action.type === STORE_COUNTER) {
		// const newArr = [...state.counters];
		// newArr.push(action.payload);
		// return {
		//     ...state,
		//     counters: newArr
		// }
		return {
			...state,
			counters: state.counters.concat(action.payload),
		};
	}
    if (action.type === REMOVE_COUNTER) {
		const newCounters = state.counters.filter(el => el.id !== action.payload);
		return {
			...state,
			counters: newCounters,
		};
	}

	return state;
};

export default storeCounter;
