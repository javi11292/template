import { connect } from "react-redux"

import { dispatch } from "./store"
import { reset } from "./actions"

const addAction = state => (acc, action) => {
    acc[action] = ACTIONS[action](state)
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

const ACTIONS = {
    reset: Redux.reset
}

export ACTIONS
export default Redux
