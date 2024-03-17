import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className='absolute w-full px-4 py-4 flex flex-row items-center justify-between z-50' >
            <Link to="/" >
                <h1 className='uppercase text-red-600 font-bold text-3xl cursor-pointer' >Filme-Flix</h1>
            </Link>

            <div>
                <Link to="/favoritos" >
                    <button className='capitalize pr-4' >Favoritos</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;