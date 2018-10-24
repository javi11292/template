import { connect } from "react-redux"

import { dispatch } from "./store"
import { reset } from "./actions"

const addAction = state => (acc, action) => {
    acc[action] = actions[action](state)
    return acc
}

class Redux {

    static connect = (...actions) => {
        const state = state => actions.reduce(addAction(state), {})
        return connect(state)
    }

    static reset = () => {
        dispatch(reset())
    }

}

const actions = {
    reset: Redux.reset
}

export actions

export default Redux
