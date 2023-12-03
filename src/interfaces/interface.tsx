export interface IProps {
  children: React.ReactNode;
}

export interface IResponse {
    status: string,
    status_message: string,
    data: IFilmList,
}

export interface IFilmList{
  movie_count: number,
  limit: number,
  page_number: number,
  movies: IMovie[],
}

export interface IMovieData{
  movies: IMovie[],
  page: number
}

export interface IMovieDataSingle{
  movie: IMovie
}

export interface IResponseFilm {
  status: string,
  status_message: string,
  data: IFilm,
}

export interface IFilmData{
  movie: IFilm
}

export interface IMovie{
  id: number,
  url: string,
  imdb_code: string,
  title: string,
  title_english: string,
  title_long: string,
  slug: string,
  year: number,
  rating: number,
  runtime: number,
  genres: [string],            
  summary: string,
  description_full: string,
  synopsis: string,
  yt_trailer_code: string,
  language: string,
  mpa_rating: string,
  background_image: string,
  background_image_original: string,
  small_cover_image: string,
  medium_cover_image: string,
  large_cover_image: string,
  state: string,
  torrents: [Object]                  
  date_uploaded: string,
  date_uploaded_unix: number,
}

export interface IFilm extends IMovie{
  movie: any;    
  like_count: number,
  description_intro: string,
  other: IMovie
}

// export interface IFilm{
//   movie: any;
//   id: number,
//   url: string,
//   imdb_code: string,
//   title: string,
//   title_english: string,
//   title_long: string,
//   slug: string,
//   year: number,
//   rating: number,
//   runtime: number,
//   genres: [String],    
//   like_count: number,
//   description_intro: string,
//   description_full: string,
//   yt_trailer_code: string,
//   language: string,
//   mpa_rating: string,
//   background_image: string,
//   background_image_original: string,
//   small_cover_image: string,
//   medium_cover_image: string,
//   large_cover_image: string,
//   torrents: [Object],
//   date_uploaded: string,
//   date_uploaded_unix: number,
// }

export interface Page{
  id: number;
  title: string;
  path: string
}

export interface Page_number{
  page_number: number
}
