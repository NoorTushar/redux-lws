import "./App.css";
import CounterLesson from "./CounterLesson/CounterLesson";

import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/Counter";
import HooksCounter from "./components/HooksCounter";
import DynamicCounter from "./components/DynamicCounter";

function App() {
   return (
      <>
         <Provider store={store}>
            {/* <CounterLesson /> */}
            {/* <Counter /> */}
            <HooksCounter />
            <DynamicCounter />
         </Provider>
      </>
   );
}

export default App;
