import {combineReducers} from 'redux'
import GotReducer from './GotReducer';
import CastReducer from './CastReducer';
import  MovieReducer  from './MoviesReducer';
import TrailerReducer from './TrailerReducer';
import CastMovieReducer from './CastMovieReducer';

const rootReducer = combineReducers({
    episodeDetails : GotReducer,
    castGOT : CastReducer,
    movie : MovieReducer,
    trailer : TrailerReducer,
    cast : CastMovieReducer 
})
export default rootReducer
