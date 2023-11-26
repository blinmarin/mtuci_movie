import { GetServerSideProps, NextPage } from "next"
import { IMovieData } from "@/interfaces/interface"
import { MoviesService } from "@/services/movies"
import Movies from "@/components/screens/Movies"

const PaginationPage: NextPage<IMovieData> = ({movies, page}) => { 

    return (
        <div>
          <Movies movies={movies} page={page}  />
        </div>
      
      )}

    export const getServerSideProps:GetServerSideProps<IMovieData> = async (context) => {
    let a = context.params
    const all_movies = await MoviesService.getMovies(Number(a?.page))
    return {props: {movies: all_movies.movies, page: all_movies.page_number}}
    }

export default PaginationPage