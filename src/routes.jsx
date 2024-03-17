import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';


function RouteApp(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route  path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;