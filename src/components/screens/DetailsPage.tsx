import { IFilmData } from "@/interfaces/interface"
import Head from "next/head"
import Image from "next/image"
import { FC } from 'react'
import star_dog from '../../../public/star_dog.png'
import page_dog from '../../../public/page_dog.png'
import Comments from "../Comments"


const DetailsPage: FC<IFilmData> = ({ movie }) => {
  let data = movie.movie
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      
      <div className="flex px-20 pt-20 min-h-500 max-medium:text-xl max-medium:px-10 max-medium:pt-10 max-half:flex-col max-half:items-center">

        <img className='w-500 h-750 rounded-3xl mr-20 shadow-2xl mb-10 max-medium:w-64 max-medium:h-96 max-medium:mr-10 max-half:mr-0' src={data.large_cover_image} alt={data.title} />
          
        <div className="max-half:flex max-half:flex-col max-mini:w-300">

          <div className="text-6xl mb-3 max-medium:text-3xl max-half:text-center">{data.title}</div>

          <div className="mb-4">
            <span >Year: </span>
            <span className="font-medium">{data.year}</span>
          </div>


          <div className="flex items-center mb-4">
            <div className="mr-5">Rating:</div>
            <div className="font-medium mr-4">{data.rating}</div>
            <Image src={star_dog} width={40} height={40} alt='star_dog' className={data.rating >= 1 ? "max-mini:w-7 max-mini:h-7" : 'brightness-50 max-mini:w-7 max-mini:h-7'} placeholder='blur'></Image>
            <Image src={star_dog} width={40} height={40} alt='star_dog' className={data.rating >= 3 ? "max-mini:w-7 max-mini:h-7" : 'brightness-50 max-mini:w-7 max-mini:h-7'} placeholder='blur'></Image>
            <Image src={star_dog} width={40} height={40} alt='star_dog' className={data.rating >= 5 ? "max-mini:w-7 max-mini:h-7" : 'brightness-50 max-mini:w-7 max-mini:h-7'} placeholder='blur'></Image>
            <Image src={star_dog} width={40} height={40} alt='star_dog' className={data.rating >= 7 ? "max-mini:w-7 max-mini:h-7" : 'brightness-50 max-mini:w-7 max-mini:h-7'} placeholder='blur'></Image>
            <Image src={star_dog} width={40} height={40} alt='star_dog' className={data.rating >= 9 ? "max-mini:w-7 max-mini:h-7" : 'brightness-50 max-mini:w-7 max-mini:h-7'} placeholder='blur'></Image>
          </div>


          <div className="flex flex-wrap items-center">
            <div className="mb-4">Genre:</div>
            {data.genres.map((genre: string) => <div className="bg-amber-800 text-amber-100 rounded-xl p-1 ml-3 text-xl font-medium mb-4 max-medium:text-lg">{genre}</div>)}
          </div>

          <div className="mb-5">
            <span className={data.description_full && data.description_intro ? '' : 'hidden'}>Description: </span>
            <span className="font-medium">{data.description_full ? data.description_full : data.description_intro }</span>
          </div>

          <div className="flex items-center mb-10">
            <button className="w-40 h-10 bg-amber-800 text-amber-100 rounded-xl p-1 mr-5 text-xl font-medium  hover:bg-amber-300 hover:text-amber-800 hover:scale-110 hover:transition hover:duration-500 max-medium:text-lg">Watch</button>
            <button className="w-40 h-10 bg-amber-800 text-amber-100 rounded-xl p-1 text-xl font-medium  hover:bg-amber-300 hover:text-amber-800 hover:scale-110 hover:transition hover:duration-500 max-medium:text-lg">Download</button>
            <Image src={page_dog} width={160} height={160} alt='page_dog' className="mx-10 max-mini:w-32 max-mini:mx-5" placeholder='blur'></Image>
          </div>

          <div className="flex flex-row-reverse">
          
          </div>

          
          


        </div>

      </div>

      <Comments movie={movie} />

    </>
  )

}


export default DetailsPage