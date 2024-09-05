const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");

// initial state
const initialState = { value: 0 };

const INCREMENT = "increment";
const DECREMENT = "decrement";

// reducer function
const counterReducer = (state = initialState, action) => {
   if (action.type === INCREMENT) {
      return { ...state, value: state.value + action.payload };
   } else if (action.type === DECREMENT) {
      return { ...state, value: state.value - action.payload };
   } else {
      return { ...state };
   }
};

// create store
const store = Redux.createStore(counterReducer);

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

// action buttons
incrementEl.addEventListener("click", () => {
   store.dispatch(increment(10));
});

// action buttons
decrementEl.addEventListener("click", () => {
   store.dispatch(decrement(8));
});

// show on UI after state is updated
const render = () => {
   const state = store.getState();
   counterEl.innerText = state.value.toString();
};

store.subscribe(render);

render();
