import React, { createContext, useState, useRef } from "react"
import store from "./store"

const contexts = Object.keys(store).reduce(addContexts, {})
const Providers = Object.entries(store).reduce(addProviders, null) || (({ component }) => component)

const Store = props => <Providers component={props.children} />

function addContexts(acc, key) {
    return { ...acc, [key]: createContext() }
}

function addProviders(Acc, [key, entry]) {
    const Provider = contexts[key].Provider
    return ({ component }) => {
        const [state, setState] = useState(entry.state)
        const actions = useRef(entry.actions(setState))
        return <Provider value={{ [key]: state, ...actions.current }}>{Acc ? <Acc component={component} /> : component}</Provider>
    }
}

export default Store
export { contexts }