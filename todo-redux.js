const redux = require("redux");

// actions
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// Action creater
const addTodo = (text) => ({ text, type: ADD_TODO });
const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });

// initialstate
const initialstate = {
  todos: [],
};

// Reducer
// they must return updated state
const todoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index == action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};


// Creating Store
const store = redux.createStore(todoReducer);


// despatch action
store.dispatch(addTodo("Study at 8"));
store.dispatch(addTodo("Study at 9"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));


// Read data from store
console.log(store.getState());

