import { ADDTODOS, DELETETODOS, UPDATETODOS } from "../actions/ActionTypes";

const initialState = []
export default (state = initialState, action) => {
    switch (action.type) {
        case ADDTODOS:
            const obj = state.filter((data) => data.title === action.payload.title && data.description === action.payload.description);
            if (action.payload.title.length === 0 || action.payload.description.length === 0) {
                return state
            }
            if (obj.length > 0) {
                return {state, alert: {title: "primary", msg:"object already exists"}}
            }
            return [...state, action.payload]
        case DELETETODOS:
            const newState = state.filter((data) => data.id !== action.payload); // Fixed
            return newState;

        case UPDATETODOS:
            const updateState = state.map((e) => {
                if (e.id === action.payload.id) {
                    e.title = action.payload.title
                    e.description = action.payload.description
                    return e
                }
                else {
                    return e
                }
            })
            return updateState
        default:
            return state
    }
}