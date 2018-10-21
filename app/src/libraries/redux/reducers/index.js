import { combineReducers } from "redux"

import { RESET } from "../actions"

const root = combineReducers({

})

const reducers = (state, action) => {
    if (action.type === RESET) {
        return root(undefined, action)
    }
    return root(state, action)
}

export default reducers