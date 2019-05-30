const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}
// Reducer
const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT_COUNTER') {
        const newState = {...state, counter: state.counter + 1}
        // return {
        //     ...state,
        //     counter: state.counter + 1
        // }
        return newState;
    } 
    if(action.type === 'ADD_VALUE') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}
// Store 
const store = createStore(reducer);

// Subscribe
store.subscribe(() => {
    console.log('[COMPONENT 1] : ', store.getState());
})

store.subscribe(() => {
    console.log('[COMPONENT 2] : ', store.getState());
})

console.log('1 : ', store.getState());

// Action - dispatch
// Component - in React

store.dispatch({ type: 'INCREMENT_COUNTER' });
console.log("Hehe");
store.dispatch({ type: 'ADD_VALUE', value: 5 });

console.log('2 : ', store.getState());