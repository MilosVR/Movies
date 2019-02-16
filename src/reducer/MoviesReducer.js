import { FETCH_MOVIES, SEARCH_MOVIES, MOVIE_BY_ID, POPULAR_MOVIES, UPCOMING_MOVIE, LATEST_MOVIE } from "../actions/actions";

const initialState = []

const MovieReducer = (state=initialState, action) => {
    switch (action.type) {
        
        case FETCH_MOVIES:
        return action.payload

        case SEARCH_MOVIES:
        return action.payload

        case MOVIE_BY_ID:
        return action.payload

        case POPULAR_MOVIES:
        return action.payload

        case UPCOMING_MOVIE:
        return action.payload

        case LATEST_MOVIE:
        return action.payload

        default:
            return state;
    }
}
export default MovieReducer