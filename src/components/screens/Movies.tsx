import { IMovieData} from "@/interfaces/interface";
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
        <div className="flex justify-center"> 
            <div className='flex flex-wrap justify-center 2xl:w-screen xl:w-1180 lg:w-924'>
                {movies.map(movie => <MovieItem key={movie.id} movie={movie}/>)}
            </div> 
        </div>
        
        <Pagination page_number={page}/>
                 
    </>

)
  }

export default Movies