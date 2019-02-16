import { VIDEO_BY_ID } from "../actions/actions";

const initialState = []

const TrailerReducer = (state=initialState, action) => {
    switch (action.type) {

        case VIDEO_BY_ID:
        return action.payload
        
        default:
            return state;
    }
}
export default TrailerReducer