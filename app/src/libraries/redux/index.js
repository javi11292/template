import { connect } from "react-redux"

import { dispatch } from "./store"
import { reset } from "./actions"

const addCall = state => (acc, call) => {
    acc[call] = Redux[call](state)
    return acc
}

class Redux {

    static connect = (...calls) => {
        const state = state => calls.reduce(addCall(state), {})
        return connect(state)
    }

    static reset = () => {
        dispatch(reset())
    }

}

const MAP = {

}

export { MAP }
export default Redux
