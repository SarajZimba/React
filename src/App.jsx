
import Myroutes from "./Myroutes"
import "./assets/mystyle.css"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GlobalContextProvider } from "./Hooks/GlobalContext";
import { createStore } from "redux"
import counterReducer from "./redux/counterReducer";
import {Provider} from "react-redux"

function App() {


  let myStore = createStore(counterReducer)

  return (
    <>

      <Provider store={myStore}>
        <GlobalContextProvider>
          <Myroutes />
        </GlobalContextProvider>
      </Provider>

    </>
  )
}

export default App
