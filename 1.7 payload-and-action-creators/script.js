const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");

// 1. declare initial state

const initialState = {
   value: 0,
};

// 2. create the reducer function for handling counter state

function counterReducer(state = initialState, action) {
   if (action.type === "increment") {
      return { ...state, value: state.value + 1 };
   } else if (action.type === "decrement") {
      return { ...state, value: state.value - 1 };
   } else {
      return { ...state };
   }
}

// 3. create a store

const store = Redux.createStore(counterReducer);

// 4. dispatching actions
incrementEl.addEventListener("click", () => {
   store.dispatch({
      type: "increment",
   });
});

decrementEl.addEventListener("click", () => {
   store.dispatch({
      type: "decrement",
   });
});

// 5. display on UI
const render = () => {
   const state = store.getState();
   counterEl.innerText = state.value.toString();
};

store.subscribe(render);

render();
