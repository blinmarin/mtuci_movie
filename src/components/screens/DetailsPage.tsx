import { IFilmData } from "@/interfaces/interface"
import Head from "next/head"
import Image from "next/image"
import { FC } from 'react'
import star_dog from '../../../public/star_dog.png'
import page_dog from '../../../public/page_dog.png'


const DetailsPage: FC<IFilmData> = ({ movie }) => {
  let data = movie.movie
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <div className="flex p-20 min-h-screen">

          <img className='h-big w-500 rounded-3xl mr-20 shadow-2xl' src={data.large_cover_image} alt={data.title} />
          
        <div>

          <div className="text-6xl mb-3">{data.title}</div>

          <div className="mb-4">
            <span >Year: </span>
            <span className="font-medium">{data.year}</span>
          </div>


          <div className="flex items-center mb-4">
            <div className="mr-5">Rating:</div>
            <div className="font-medium mr-4">{data.rating}</div>
            <Image src={star_dog} width={40} height={40} alt='star_dog' className={data.rating >= 1 ? "" : 'brightness-50'} placeholder='blur'></Image>
            <Image src={star_dog} width={40} height={40} alt='star_dog' className={data.rating >= 3 ? "" : 'brightness-50'} placeholder='blur'></Image>
            <Image src={star_dog} width={40} height={40} alt='star_dog' className={data.rating >= 5 ? "" : 'brightness-50'} placeholder='blur'></Image>
            <Image src={star_dog} width={40} height={40} alt='star_dog' className={data.rating >= 7 ? "" : 'brightness-50'} placeholder='blur'></Image>
            <Image src={star_dog} width={40} height={40} alt='star_dog' className={data.rating >= 9 ? "" : 'brightness-50'} placeholder='blur'></Image>
          </div>


          <div className="flex flex-wrap items-center mb-4">
            <div>Genre:</div>
            {data.genres.map((genre: string) => <div className="bg-amber-800 text-amber-100 rounded-xl p-1 ml-3 text-xl font-medium">{genre}</div>)}
          </div>

          <div className="mb-5">
            <span className={data.description_full && data.description_intro ? '' : 'hidden'}>Description: </span>
            <span className="font-medium">{data.description_full ? data.description_full : data.description_intro }</span>
          </div>

          <div className="flex mb-5">
            <button className="w-40 h-10 bg-amber-800 text-amber-100 rounded-xl p-1 mr-5 text-xl font-medium  hover:bg-amber-300 hover:text-amber-800 hover:scale-110 hover:transition hover:duration-500">Watch</button>
            <button className="w-40 h-10 bg-amber-800 text-amber-100 rounded-xl p-1 text-xl font-medium  hover:bg-amber-300 hover:text-amber-800 hover:scale-110 hover:transition hover:duration-500">Download</button>
          </div>

          <div className="flex flex-row-reverse">
          <Image src={page_dog} width={160} height={160} alt='page_dog' className="" placeholder='blur'></Image>
          </div>
          


        </div>

      </div>



    </>
  )

}


export default DetailsPage