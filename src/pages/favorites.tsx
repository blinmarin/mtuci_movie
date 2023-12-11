import { IFilm } from "@/interfaces/interface"
import { MoviesService } from "@/services/movies"
import { getLocalStorage } from "@/services/storage.service"
import { useEffect, useState } from "react"
import Movies from "@/components/screens/Movies"

const FavoritesPage = () => {

    let [MoviesData, setMovies] = useState<IFilm[]>([])

    useEffect(() => {
        let likes = JSON.parse(String(getLocalStorage('favorites')))
        getFilms(likes)
    }, [])

    async function getFilms(likes: [number]) {
        let MovieMass: IFilm[] = []
        for (let i = 0; i < likes?.length; i++) {
            let movie = await MoviesService.getFilm(likes[i])
            MovieMass.push(movie?.movie)

        }
        setMovies(MovieMass)

    }

    return (
        <div>
            <Movies movies={MoviesData} page={-1} />
        </div>
    )
}




export default FavoritesPage