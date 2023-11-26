
import { useRouter } from "next/router"
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next"
import { IFilmData, IFilm, IMovieData, IMovieDataSingle } from "@/interfaces/interface"
import { MoviesService } from "@/services/movies"
import { ParsedUrlQuery } from "querystring"
import DetailsPage from "@/components/screens/DetailsPage"

const FilmPage: NextPage<IFilmData> = ({movie}) => { 
    return (
        <div>
            <DetailsPage movie={movie} />
        </div>
    
    )
}

interface Params extends ParsedUrlQuery{
    id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const {movies} = await MoviesService.getMovies()

    return{
        paths: movies.map(movie => ({
            params:{
                title: movie.title,
                id: String(movie.id),
            },
        })),
        fallback: 'blocking',
    }
}


export const getStaticProps:GetStaticProps<IFilmData> = async ({params}) => {
    const film = await MoviesService.getFilm(Number(params?.id))
    return {props: {movie: film}, revalidate: 60}
  }


export default FilmPage