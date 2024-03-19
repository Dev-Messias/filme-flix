import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { createImageUrl } from '../services/movieServices';
import { toast } from 'react-toastify';

function Details() {

    const { id } = useParams();
    const navigation = useNavigate();

    const [filme, setFilme] = useState({});

    useEffect(() => {
        async function loadFilme() {
            await api.get(`movie/${id}`)
                .then((response) => {
                    setFilme(response.data)
                })
                .catch(() => {
                    console.log("Filme não encontrado!!")
                    navigation("/", { replace: true })
                    return
                })
        }

        loadFilme()

    }, [])


    function salvarFilme(){{
        //pegando filmes da lista
        const minhaLista = localStorage.getItem("@filmeflix");
    
        //convertendo a lista, se existir itens adicionar a variavel se não começar vazio array
        let filmesSalvos = JSON.parse(minhaLista) || [];
    
        //verificando se o filme já esta salvo
        const hasFilmes = filmesSalvos.some((filmesSalvo)=> filmesSalvo.id === filme.id);
    
        if(hasFilmes){
         // alert("Esse filme já esta na lista");
            toast.warn("Esse filme já esta na lista")
          return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('@filmeflix', JSON.stringify(filmesSalvos))
        //alert("Filme salvo com sucesso")
        toast.success("Filme salvo com sucesso!")
    
      }}

    return (
        <div className='w-full h-screen px-4 flex flex-col mb-40' >

            <div className='w-full h-full flex flex-col  items-center  w-max-[850px] m-auto py-40' >

                <img className=' '   src={createImageUrl(filme.backdrop_path ?? filme.poster_path, "w500")} alt="" />
                <h1 className='font-semibold mt-6 text-2xl lg:text-3xl' >{filme.title}</h1>
                <p className='mt-4 mb-8 md:w-2/5 ' >{filme.overview}</p>

                <div className=' w-full flex flex-row p-2 gap-6 items-center justify-center ' >
                    <button className='bg-slate-200 p-2 text-sm text-black font-semibold mb-10 rounded-xl hover:bg-slate-400 duration-200 cursor-pointer ' onClick={salvarFilme} >Favoritos</button>
                    <button className='bg-slate-200 p-2 text-sm text-black font-semibold mb-10 rounded-xl hover:bg-slate-400 duration-200 cursor-pointer '  ><a className='p-2' href={`https://youtube.com/results?search_query=${filme.title} Trailer` } target="blank" rel='external'>Trailer</a></button>
                </div>

            </div>
        </div>
    )
}

export default Details;