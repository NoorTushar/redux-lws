const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");

// action initialization

const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
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

// 1. declare initial state

const initialState = {
   value: 0,
};

// 2. create the reducer function for handling counter state

function counterReducer(state = initialState, action) {
   if (action.type === INCREMENT) {
      return { ...state, value: state.value + action.payload };
   } else if (action.type === DECREMENT) {
      return { ...state, value: state.value - action.payload };
   } else {
      return { ...state };
   }
}

// 3. create a store

const store = Redux.createStore(counterReducer);

// 4. dispatching actions
incrementEl.addEventListener("click", () => {
   store.dispatch(increment(10));
});

decrementEl.addEventListener("click", () => {
   store.dispatch(decrement(7));
});

// 5. display on UI
const render = () => {
   const state = store.getState();
   counterEl.innerText = state.value.toString();
};

store.subscribe(render);

render();
