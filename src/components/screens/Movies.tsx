import { IFilm, IMovieData} from "@/interfaces/interface";
import Head from "next/head"
import {FC} from 'react'
import MovieItem from "../MovieItem";
import Pagination from "../Pagination";

const Movies: FC<IMovieData> = ({movies, page}) =>{

    return(
    <>
        <Head>
            <title>Home</title>
        </Head>
        <div className="flex justify-center min-h-screen"> 
            <div className='flex flex-wrap justify-center 2xl:w-screen xl:w-1280 lg:w-1020'>
                {movies.map(movie => <MovieItem key={movie?.id} movie={movie}/>)}
            </div> 
        </div>
        
        {page != -1? <Pagination page_number={page}/> : <></>}
        
                 
    </>

)
  }

export default Movies