// DOM Element
const countEl = document.getElementById("count");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {
  value: 0,
};

// create reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    if (state.value > 0) {
      return {
        ...state,
        value: state.value - 1,
      };
    }
  } else {
    return state;
  }
};
// create redux store
const store = Redux.createStore(counterReducer);

// renderUI
const render = () => {
  const state = store.getState();
  countEl.innerText = state.value;
};
render();

store.subscribe(render);

// button click listener
incrementEl.addEventListener("click", () => {
  console.log("clicked");
  store.dispatch({
    type: "increment",
  });
});
decrementEl.addEventListener("click", () => {
  console.log("clicked");
  store.dispatch({
    type: "decrement",
  });
});
