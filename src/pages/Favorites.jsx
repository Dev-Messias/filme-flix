import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TbListDetails } from "react-icons/tb";
import { IoTrashBinOutline } from "react-icons/io5";



function Favorites(){


    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@filmeflix")
        setFilmes(JSON.parse(minhaLista) || []);
    },[])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@filmeflix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso");
    }

    return(
        <div className="w-full px-4 py-20" >
            
            <div className="w-full h-screen max-w-[850px] m-auto flex flex-col items-center" >
                <h1 className="font-semibold text-2xl mt-5 mb-8 " >Favoritos</h1>
                {filmes.length === 0 && <span>Você não tem nenhum filme salvo🥲</span>}

                <div className="w-full  flex flex-col items-center justify-center " >
                    <ul className="w-full flex flex-col justify-center items-center"  >
                        {filmes.map((item)=>{
                            return(
                                <li className="w-full flex items-center justify-center"  key={item.id}>
                                    <div className="flex flex-1 items-center justify-center mb-4  " >
                                    <span className="line-clamp-1 " >{item.title}</span>
                                    </div>

                                    
                                        <div className="flex flex-1 gap-4 items-center justify-center mb-4" >
                                        <Link className="text-xl bg-emerald-800 p-3 rounded-full hover:scale-95 duration-200 " to={`/details/${item.id}`} ><TbListDetails/></Link>
                                        <button className="text-xl bg-red-800 p-3 rounded-full hover:scale-95 duration-200 " onClick={() => excluirFilme(item.id)} >
                                            <IoTrashBinOutline/>
                                        </button>
                                        </div>
                                    
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

           

        </div>
    )
}

export default Favorites;