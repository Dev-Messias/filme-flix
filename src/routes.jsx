import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Details from './pages/Details';

import Error from './pages/Error';


function RouteApp(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route  path='/' element={<Home/>} />
                <Route  path='/details/:id' element={<Details/>} />
                <Route  path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;