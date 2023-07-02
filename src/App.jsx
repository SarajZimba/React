
import Myroutes from "./Myroutes"
import "./assets/mystyle.css"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GlobalContextProvider } from "./Hooks/GlobalContext";



function App() {
  

  return (
    <>

    <GlobalContextProvider>
      <Myroutes/>
    </GlobalContextProvider>
      
    </>
  )
}

export default App
