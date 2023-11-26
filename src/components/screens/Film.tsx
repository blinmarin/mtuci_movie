import { IFilm, IFilmData, IMovieDataSingle } from "@/interfaces/interface"
import Head from "next/head"
import {FC} from 'react'
import MovieItem from "../MovieItem"

const Film: FC<IFilmData> = ({movie}) => { 
  let data = movie.movie
    return(
        <>
          <Head>
            <title>Film</title>
          </Head>
          <div>{data.id}</div>
      
        </>
        )
    
}

  
export default Film