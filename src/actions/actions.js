import axiosMovies from "./axiosMovies";
export const SEARCH_MOVIES = "SEARCH_MOVIES"
export const FETCH_MOVIES = "FETCH_MOVIES"
export const MOVIE_BY_ID = "MOVIE_BY_ID" 
export const VIDEO_BY_ID = "VIDEO_BY_ID"
export const CAST_BY_ID = "CAST_BY_ID"
export const POPULAR_MOVIES = "POPULAR_MOVIES"
export const LATEST_MOVIE = "LATEST_MOVIE"
export const UPCOMING_MOVIE = "UPCOMING_MOVIE"


export const fetchMovies = movie => {
    return {
        type : FETCH_MOVIES,
        payload : movie
    }
}
export const searchMovies = movie => {
    return {
        type : SEARCH_MOVIES,
        payload : movie
    }
}
export const fetchPopularMovies = movie => {
    return {
        type : POPULAR_MOVIES,
        payload : movie
    }
}
export const fetchLatestMovies = movie => {
    return {
        type : LATEST_MOVIE,
        payload : movie
    }
}
export const fetchUpcomingMovies = movie => {
    return {
        type : UPCOMING_MOVIE,
        payload : movie
    }
}
export const asyncFetchUpcomingMovies = () => async dispatch => {
    try {
        const apiKey = 'eb368afc0fc901b559832e3cfe60294b'
        const request = await axiosMovies.get(`/movie/upcoming?api_key=${apiKey}&language=en-US`) 
        
        dispatch(fetchUpcomingMovies(request.data))
        
    } catch (error) {
        console.log(error);
    }
}
export const asyncFetchLatestMovies = () => async dispatch => {
    try {
        const apiKey = 'eb368afc0fc901b559832e3cfe60294b'
        const request = await axiosMovies.get(`/movie/now_playing?api_key=${apiKey}&language=en-US`) 
        console.log(request);
        
        dispatch(fetchLatestMovies(request.data))
        
    } catch (error) {
        console.log(error);
    }
}
export const asyncFetchMovies = () => async dispatch => {
    try {
        const apiKey = 'eb368afc0fc901b559832e3cfe60294b'
        const request = await axiosMovies.get(`/movie/top_rated?api_key=${apiKey}&language=en-US`) 

        dispatch(fetchMovies(request.data))
        
    } catch (error) {
        console.log(error);
    }
} 
export const asyncFetchPopularMovies = () => async dispatch => {
    try {
        const apiKey = 'eb368afc0fc901b559832e3cfe60294b'
        const request = await axiosMovies.get(`/movie/popular?api_key=${apiKey}&language=en-US`) 
        
        dispatch(fetchPopularMovies(request.data))
        
    } catch (error) {
        console.log(error);
    }
} 
export const asyncSearchMovies = query => async dispatch => {
    try {
        const apiKey = 'eb368afc0fc901b559832e3cfe60294b'
        const request1 = await axiosMovies.get(`/search/movie?api_key=${apiKey}&language=en-US&query=${query}`)
        
        dispatch(searchMovies(request1.data))

    } catch (error) {
        console.log(error);
    }
} 
export const movieById = movie => {
    return {
        type:MOVIE_BY_ID,
        payload: movie
    }
}
export const videosById = video => {
    return {
        type:VIDEO_BY_ID,
        payload: video
    }
}
export const asyncMoviesById = movie_id => async dispatch => {
    const apiKey = 'eb368afc0fc901b559832e3cfe60294b'
    const request = await axiosMovies.get(`/movie/${movie_id}?api_key=${apiKey}&language=en-US`)

    dispatch(movieById(request.data))
} 
export const asyncTrailersById = movie_id => async dispatch => {
    const apiKey = 'eb368afc0fc901b559832e3cfe60294b'
    const videos = await axiosMovies.get(`/movie/${movie_id}/videos?api_key=${apiKey}&language=en-US`)
   
    dispatch(videosById(videos.data))
}
export const fetchCast = cast => {
    return {
        type : CAST_BY_ID,
        payload : cast
    }
}
export const fetchingMovieCast = movie_id => async dispatch => {
    const apiKey = 'eb368afc0fc901b559832e3cfe60294b'
    const cast = await axiosMovies.get(`/movie/${movie_id}/credits?api_key=${apiKey}&language=en-US`)
    dispatch(fetchCast(cast.data))
}