import { connect } from "react-redux"

import { dispatch } from "./store"
import { reset } from "./actions"

const addCall = state => (acc, call) => {
    acc[call.name] = call(state)
    return acc
}

class Redux {

    static connect(...calls) {
        const state = state => calls.reduce(addCall(state), {})
        return connect(state)
    }

    static reset() {
        dispatch(reset())
    }

}

export default Redux
