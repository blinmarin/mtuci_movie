import { IMovieData} from "@/interfaces/interface";
import Head from "next/head"
import {FC} from 'react'
import MovieItem from "../MovieItem";

const Movies: FC<IMovieData> = ({movies}) =>{
    return(
    <>
        <Head>
            <title>Home</title>
        </Head>
        {/* <h1>{page}</h1> */}
        <div className="flex justify-center"> 
            <div className='flex flex-wrap justify-center 2xl:w-screen xl:w-1180 lg:w-924'>
                {movies.map(movie => <MovieItem movie={movie}/>)}
            </div> 
        </div>
                 
    </>

)
  }

export default Movies