import { INCREMENT, ADD, DECREMENT, SUB } from "../actions";

const initialState = {
    counter: 55
};

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case SUB:
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            return state;
    }
};

export default counterReducer;
