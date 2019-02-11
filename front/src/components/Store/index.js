import React, { useState, useRef } from "react"
import context from "./context"

const Providers = Object.entries(context).reduce(addProviders, null) || (({ component }) => component)

const Store = props => <Providers component={props.children} />

function addProviders(Acc, [key, { context: { Provider } }]) {
    return ({ component }) => {
        const [state, setState] = useState(context[key].state)
        const actions = useRef(context[key].actions(setState))
        return <Provider value={{ [key]: state, ...actions.current }}>{Acc ? <Acc component={component} /> : component}</Provider>
    }
}

export default Store
export { contexts }