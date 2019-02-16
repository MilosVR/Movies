import { CAST_BY_ID } from "../actions/actions";

const initialState = []

const CastMovieReducer = (state=initialState, action) => {
    switch (action.type) {
        case CAST_BY_ID:
        return action.payload
        default:
            return state;
    }
}
export default CastMovieReducer