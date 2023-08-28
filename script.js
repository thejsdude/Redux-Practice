// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Action creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// initial State
const initialState = {
  count: 0,
};

// Create a counter Reducer function
const countReducer = (state = initialState, action) => {
  const ToDoAction = action.type;
  const payload = action.payload;

  if (ToDoAction === "increment") {
    return {
      ...state,
      count: state.count + payload,
    };
  } else if (ToDoAction === "decrement") {
    if (state.count > 0) {
      return {
        ...state,
        count: state.count - payload,
      };
    } else {
      return state;
    }
  } else {
    return state;
  }
};

// Create Redux store to store value and pass countReducer as a parameter
const store = Redux.createStore(countReducer);

// Get stored value/state from store
const getAndSetValue = () => {
  const state = store.getState();
  counterEl.innerText = state.count;
};
getAndSetValue();

// Subscribe to store to get value. Cause subscription means the function or component's are authorized to get value
store.subscribe(getAndSetValue);

// Add listener to button
// Add action payload
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});
decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(3));
});
