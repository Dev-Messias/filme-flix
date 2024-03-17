import { useEffect, useState } from 'react'
import api from '../services/api';


function Hero() {

    const [movie, setMovie] = useState({})

    useEffect(() => {

        api.get(import.meta.env.VITE_POPULAR)
            .then((response) => {
                const movies = response.data.results;
                const randomMovie = movies[Math.floor(Math.random() * movies.length)]

                setMovie(randomMovie);
            })

    }, [])

    const { title, backdrop_path, release_date, overview } = movie;
    //console.log(backdrop_path)
    if (!movie) {
        return (
            <>
                <p>Loanding...</p>
            </>
        )
    }

    return (
        <div className='w-full h-[550px] lg:h-[850px]' >
            <div className='w-full h-full' >
                <div className='absolute  w-full  h-[550px] lg:h-[650px] 2xl:h-[850px] bg-gradient-to-r from-black' >
                    <img
                        className='w-full h-full object-cover object-top opacity-30 '
                        src={`${import.meta.env.VITE_IMG_BASE_URL}${backdrop_path}`}
                        alt={title} />

                    <div className='absolute w-full top-[45%] md:top-[35%]  lg:top-[50%] p-4 md:p-8 ' >
                        <h1 className='w-full text-3xl md:text-6xl font-bold ' >{title}</h1>
                        <div className='mt-8 mb-4' >
                            <button className='capitalize border rounded-[3px] bg-gray-300 text-black font-semibold py-2 px-5 hover:scale-95 duration-300 ' >Favoritos</button>
                            <button className='capitalize border rounded-[3px] border-gray-300 font-semibold py-2 px-5 ml-4 hover:scale-95 duration-300 ' >Detalhes</button>
                        </div>
                        <p className='text-gray-400 text-sm font-medium ' >{release_date}</p>
                        <p className=' w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] line-clamp-3 md:line-clamp-3' >{overview}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero;