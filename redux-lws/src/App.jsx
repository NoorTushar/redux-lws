import "./App.css";
import CounterLesson from "./CounterLesson/CounterLesson";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
   return (
      <>
         <Provider store={store}>
            <CounterLesson />
         </Provider>
      </>
   );
}

export default App;
