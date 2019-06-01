import { AUTH_CHANGE } from "../actions";

const initialState = {
    isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {

    if (action.type === AUTH_CHANGE) {
        return {
            ...state,
            isLoggedIn: !state.isLoggedIn
        }
    }

    return state;

};

export default authReducer;
