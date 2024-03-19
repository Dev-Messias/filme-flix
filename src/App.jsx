import RouteApp from "./routes";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>
     <ToastContainer autoClose={3000} position='top-center' />
     <RouteApp/>
    </>
  )
}

export default App
