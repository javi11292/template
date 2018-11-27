import React from "react"

import Action from "./Action"

let store = null

const addContext = (acc, key) => ({ ...acc, [key]: React.createContext() })

const addProvider = (Acc, key) => {
    const { Provider } = store[key]
    return ({ state, component }) => <Provider value={state[key]}>{Acc ? <Acc state={state} component={component} /> : component}</Provider>
}

const addConsumer = (Acc, key) => {
    const { Consumer } = store[key]
    return props => (
        <Consumer>
            {context => <Acc {...props} {...{ [key]: context }} />}
        </Consumer>
    )
}

const createProvider = () => Object.keys(store).reduce(addProvider, null) || (({ component }) => component)

const createConsumer = ({ keys, Component }) => keys.reduce(addConsumer, Component)

const state = {

}
const actions = {

}

class Store extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }

        store = Object.keys(this.state).reduce(addContext, {})

        this.provider = createProvider()
    }

    updateState = call => data => this.setState(call(data))

    render = () => {
        const Provider = this.provider
        return <Provider state={this.state} component={this.props.children} />
    }
}

const connect = (...keys) => Component => (
    class extends React.PureComponent {
        consumer = createConsumer({ keys, Component })

        render = () => {
            const Consumer = this.consumer
            return <Consumer {...this.props} />
        }
    }
)

export { connect, state, actions }
export default Store
