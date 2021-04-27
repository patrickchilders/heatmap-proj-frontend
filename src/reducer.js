import { combineReducers } from 'redux'

const initialState = {
    bounds: [
        [53,-46,0.5],
        [53,46,0.5],
        [1,-46,0.5],
        [1,46,0.5]],
    points: [
        [37.3422,-2.0399],
        [-33.8591,151.2002]]
};

export default function appReducer(state = initialState, action){
    switch(action.type){
        case 'mapBoundsChanged': {
            return {
                ...state,
                bounds: action.payload
            }
        }
        default:
            return state;
    }
}

// const rootReducer = combineReducers({

// })

// export default rootReducer;