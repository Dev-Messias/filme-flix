
import {Link} from 'react-router-dom'
import img from '../assets/erro1.png'

function Error(){
    return(
        <div className="w-full h-screen flex px-4" >
                <div className="w-full md:max-w-[850px] flex flex-col items-center justify-center m-auto" >
                        <img src={img} alt="Error" sizes={20} />
                        <Link to="/" className='bg-blue-800 p-4 rounded-lg hover:scale-95 duration-300' >
                          Voltar
                        </Link>
                        
                </div>
        </div>
    )
}

export default Error;