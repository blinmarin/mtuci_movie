import { IResponse, IFilmList, IResponseFilm } from './../interfaces/interface';
import axios from "axios";
const API_URL = 'https://yts.mx/api/v2//list_movies.json?limit=24'
const API_URL_DETAILS = 'https://yts.mx/api/v2/movie_details.json'

export const MoviesService = {
    async getMovies(page:number = 1){
        const {data} = await axios.get <IResponse> (`${API_URL}&page=${page}`)
        return data.data
    },

    async getFilm(id: number){
        const {data} = await axios.get <IResponseFilm> (`${API_URL_DETAILS}?movie_id=${id}`)
        return data.data
    }

}