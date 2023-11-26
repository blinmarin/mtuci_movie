import { IResponse, IFilmList } from './../interfaces/interface';
import axios from "axios";
const API_URL = 'https://yts.mx/api/v2//list_movies.json?limit=50'
// const aaa = 'https://yts.mx/api/v2/movie_details.json?movie_id=10'

axios.defaults.baseURL = API_URL

export const MoviesService = {
    async getMovies(){
        const {data} = await axios.get <IResponse> ('')
        return data.data
    },


    async getFilm(id: number){
        const {data} = await axios.get <IResponse> (``, {
            params: {
                id
            }
        })
        return data
    }




    // axios
    //         .get('https://yts.mx/api/v2/list_movies.jsonp')
    //         .then(res => {
    //             console.log(res)
    //             console.log(res.data.data.movies)
    //             setMovies(res.data.data.movies);
    //             setPages(res.data.data.page_number)            
    //         })
    //         .catch(res => console.log('Error'))

}