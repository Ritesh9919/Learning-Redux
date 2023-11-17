const redux = require("redux");

//Actionss
const INCREAGE = "Increage COUNTER";
const DECREAGE = "Decreage COUNTER";

// Action creator
const increageCounter = () => ({ type: INCREAGE });
const decreageCounter = () => ({ type: DECREAGE });

// InitalState
const initialState = {
  counter: 0,
};

// Reducer
// They must return updated state
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAGE:
      return {
        ...state,
        counter: (state.counter += 1),
      };
    case DECREAGE:
      return {
        ...state,
        counter: (state.counter -= 1),
      };
    default:
      return state;
  }
};

// Creating Store
const store = redux.createStore(counterReducer);

// Dispatch actions
store.dispatch(increageCounter());
store.dispatch(increageCounter());
store.dispatch(increageCounter());
store.dispatch(increageCounter());
store.dispatch(decreageCounter());

// Read data from store
console.log(store.getState());
