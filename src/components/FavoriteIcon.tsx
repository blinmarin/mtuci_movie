import { IFilmData } from '@/interfaces/interface'
import { getLocalStorage, setLocalStorage } from '@/services/storage.service'
import { FC, useEffect, useState } from 'react'


const FavoriteIcon: FC<IFilmData>  = ({ movie }) => {

    let [likes, setLikes] = useState([0])
    
    useEffect(() => {
        setLikes(JSON.parse(String(getLocalStorage('favorites'))))
    }, [])
    
    function createStor() {
        let data = getLocalStorage('favorites')
        
        if (data) {            
            let storSet = new Set<number>(JSON.parse(data))
            if(storSet.has(movie.movie.id)){
                storSet.delete(movie.movie.id)
            }
            else{
                storSet.add(movie.movie.id)
            }
            let aa = Array.from(storSet)
            setLikes(aa)
            return(aa)
        }
        else {
            let stor = [movie.movie.id]
            setLikes(stor)
            return (stor)
        }    
    }

    function setToFavorite(){
        if (typeof window !== 'undefined') {     
            setLocalStorage('favorites', JSON.stringify(createStor()))
        }
    }




    return (
        <>
            <div className="mr-1">Add to favorites</div>
            <button className='hover:scale-125 hover:transition hover:duration-500' onClick={setToFavorite}>
            
              <svg xmlns="http://www.w3.org/2000/svg" fill={likes.includes(movie.movie.id) ? "currentColor" : "none"}viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>

        </>


    )
}

export default FavoriteIcon