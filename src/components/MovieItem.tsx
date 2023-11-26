import { IMovieDataSingle } from "@/interfaces/interface";
import Head from "next/head"
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import raiting_dog from "../../public/raiting_dog.png"

const MovieItem: FC<IMovieDataSingle> = ({ movie }) => {

    console.log(movie)
    return (
        <div>
            <Head>
                <title>Movie</title>
            </Head>
            <Link href={`film/${movie.title}/${movie.id}`} className="flex items-center w-100 h-72 m-5 p-5 space-x-4 bg-yellow-100 rounded-3xl shadow-xl hover:brightness-75 duration-300">
                <img className='h-64 rounded-3xl' src={movie.medium_cover_image} alt={movie.title} />
                <div className="flex flex-col h-64 justify-between">
                    <div>
                        <p>{movie.title}</p>
                        <p className="text-xl">{movie.year}</p>
                    </div>
                    <div className="flex items-center">
                        <Image src={raiting_dog} width={80} height={80} alt='raiting_dog' placeholder='blur'></Image>
                        <div className="text-lg flex flex-wrap justify-center items-center">
                        <div>Rating:</div>
                        
                        <div className="flex justify-center items-center w-10 h-10 bg-amber-800 text-amber-100 rounded-3xl">
                            <p>{movie.rating}</p>
                        </div>
                        </div>                 
                    </div>
                </div>  
            </Link>
        </div>

    )
}

export default MovieItem