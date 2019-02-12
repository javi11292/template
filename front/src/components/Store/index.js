import React, { createContext, useState, useRef, useContext } from "react"
import store from "./store"

const contexts = Object.keys(store).reduce(addContexts, { providers: {}, consumers: {} })
const Providers = Object.entries(store).reduce(addProviders, null) || (({ component }) => component)

const Store = props => <Providers component={props.children} />

function addContexts(acc, key) {
    const context = createContext()
    return {
        providers: { ...acc.providers, [key]: context.Provider },
        consumers: { ...acc.consumers, [`use${key.slice(0, 1).toUpperCase()}${key.slice(1)}`]: () => useContext(context) }
    }
}

function addProviders(Acc, [key, entry]) {
    const Provider = contexts.providers[key]
    return React.memo(({ component }) => {
        const [state, setState] = useState(entry.state)
        const actions = useRef(entry.actions(setState))
        return <Provider value={{ [key]: state, ...actions.current }}>{Acc ? <Acc component={component} /> : component}</Provider>
    })
}

export default Store
export const context = contexts.consumers