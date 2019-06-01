import { STORE_COUNTER } from "../actions";

const initialState = {
    counters: []
}

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
            counters: state.counters.concat(action.payload)
        }
    }


    return state;
}

export default storeCounter;