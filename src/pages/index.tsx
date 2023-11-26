import Movies from "@/components/screens/Movies"
import { IMovieData} from "@/interfaces/interface"
import { MoviesService } from "@/services/movies"
import { GetServerSideProps, NextPage } from "next"

const MoviesPage: NextPage<IMovieData> = ({movies}) =>{
  return <Movies movies={movies} />
  }

export const getServerSideProps:GetServerSideProps<IMovieData> =async () => {
  const all_movies = await MoviesService.getMovies()
  return {props: {movies: all_movies.movies}}
}

export default MoviesPage