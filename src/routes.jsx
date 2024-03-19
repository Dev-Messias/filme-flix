import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

import Error from './pages/Error';
import Footer from './components/Footer';


function RouteApp(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route  path='/' element={<Home/>} />
                <Route  path='/details/:id' element={<Details/>} />
                <Route  path='/favorites' element={<Favorites/>} />
                <Route  path='*' element={<Error/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RouteApp;