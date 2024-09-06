import "./App.css";
import CounterLesson from "./CounterLesson/CounterLesson";

import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/Counter";

function App() {
   return (
      <>
         <Provider store={store}>
            {/* <CounterLesson /> */}
            <Counter />
         </Provider>
      </>
   );
}

export default App;
