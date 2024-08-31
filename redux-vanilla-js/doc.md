1. import CDN

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/5.0.1/redux.legacy-esm.js" integrity="sha512-VCbwlmqXz5fKpvO/4l55lYqYZ4K3fi2xUnXp5pzH4YdFEWOrHwO00sXUFg20gtadJf1lzz/ZZjSNjCEOZWDJjg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

2. initial state

```js
const initialState = { value: 0 };
```

3. make reducer function - remember, it takes two arguments, action and state, when an action is fired, then the state updates.

-  🔥 action -> this must be an object which will have `type` as a property. We will pass it later but know this. Example,

```js
action = { type: "increment" };
```

so if action.type is 'increment' we will do sth, if action.type is 'decrement' we will do sth.

ok so back to making our reducer function:

```js
function counterReducer(state = initialState, action) {
   if (action.type === "increment") {
      // note here, we must not mutate the initial state directly
      return {
         ...state,
         value: state.value + 1,
      };
   } else if (action.type === "decrement") {
      // note here, we must not mutate the initial state directly
      return {
         ...state,
         value: state.value - 1,
      };
   } else {
      // we must return a default case. we will return the initial state
      return state;
   }
}
```

4. make store - store will call Redux.createStore( ) function and will take a reducer function as the argument.

```js
const store = Redux.createStore(counterReducer);
```

5. Create the action buttons - and remember, we will 🔥 `dispatch` the `actions`.

```js
const incrementEl = document.getElementById("increment");
const deccrementEl = document.getElementById("decrement");
```

Logic/ Theory: `Action` will happen through `dispatch`. And remember `action` is an object which will contain the `type` property.

So, where will this dispatch take place? How do we know on which store? So we write our code like this:

```js
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
```

6. updating the UI - Ok, so now we are successfully updating the state inside our store. Now what about updating the UI? This is where the `subscribe` will come in handy. Remember, components which are subscribed to the store will only be updated with the state.

🔥 Subscribe is a method/ function which takes a call back function. Now this call back function will be called whenever the state of the store is updated.

```js
const render = () => {
   // first when we need to renber, we need the current state right?
   const state = store.getState();
   // after getting the current state we will show it in the UI
   const counterEl = document.getElementById("counter");
   counterEl.innerText = state.value.toString();
};

store.subscribe(render);
```

7. Showing the initial state - Alright our app is almost done. But there is one thing left. At the beginning the UI is not showing the initial state value which is 0. So how to do that? Simply call the render function initially when the JS loads. It will render the current state value.

```js
// update UI initially
render();
```
