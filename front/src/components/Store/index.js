import React, { createContext, useState } from "react"
import states from "./states"

const contexts = {
    //example: createContext(),
}

const Providers = Object.entries(contexts).reduce(addProviders, null) || (({ component }) => component)

const Store = props => <Providers component={props.children} />

function addProviders(Acc, [key, { Provider }]) {
    return ({ component }) => {
        const [state, setState] = useState(states[key].state)
        return <Provider value={{ [key]: state, ...states[key].actions(setState) }}>{Acc ? <Acc component={component} /> : component}</Provider>
    }
}

export default Store
export { contexts }