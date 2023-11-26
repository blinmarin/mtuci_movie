import Movies from "@/components/screens/Movies"
import { IMovieData} from "@/interfaces/interface"
import { MoviesService } from "@/services/movies"
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useEffect, useState } from "react"

const MoviesPage: NextPage<IMovieData> = ({movies, page}) =>{

  return (
    <div>
      <Movies movies={movies} page={page} />
    </div>
  
  )}

  export const getStaticProps:GetStaticProps<IMovieData> = async () => {
    const all_movies = await MoviesService.getMovies()
    return {props: {movies: all_movies.movies, page: all_movies.page_number}, revalidate: 60}
  }






export default MoviesPage


