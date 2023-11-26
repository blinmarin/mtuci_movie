import { IMovieDataSingle } from "@/interfaces/interface";
import Head from "next/head"
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import raiting_dog from "../../public/raiting_dog.png"
import raiting_dog_norm from "../../public/rating_dog_norm.png"
import raiting_dog_bad from "../../public/rating_dog_bad.png"

const MovieItem: FC<IMovieDataSingle> = ({ movie }) => {
    return (
        <div>
            <Head>
                <title>Movie</title>
            </Head>
            <Link href={`film/${movie.title}/${movie.id}`} className="flex items-center w-100 h-72 m-5 p-5 space-x-4 bg-yellow-100 rounded-3xl shadow-xl hover:brightness-75 duration-300">
                <img className='h-64 rounded-3xl' src={movie.medium_cover_image} alt={movie.title} />
                <div className="flex flex-col h-64 justify-between">
                    <div className="h-40 w-36 overflow-hidden">
                        <p className="">{movie.title}</p>
                        <p className="text-xl">{movie.year}</p>
                    </div>
                    <div className="flex items-center">
                        <Image src={raiting_dog} width={80} height={80} alt='raiting_dog' className={movie.rating>=7  ? '' : 'hidden'} placeholder='blur'></Image>
                        <Image src={raiting_dog_norm} width={50} height={50} alt='raiting_dog_norm' className={movie.rating<7 && movie.rating>=4 ? '' : 'hidden'} placeholder='blur'></Image>
                        <Image src={raiting_dog_bad} width={70} height={70} alt='raiting_dog_bad' className={movie.rating<4 ? '' : 'hidden'} placeholder='blur'></Image>
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