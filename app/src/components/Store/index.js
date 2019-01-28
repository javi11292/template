import React from "react"

import Action from "./Action"

let store = null

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

        this.provider = createProvider(store)
    }

    updateState = call => data => this.setState(call(data))

    render = () => {
        const Provider = this.provider
        return <Provider state={this.state} component={this.props.children} />
    }
}

function connect(...keys) {
    return Component => (
        class extends React.PureComponent {
            consumer = createConsumer({ store, keys, Component })

            render = () => {
                const Consumer = this.consumer
                return <Consumer {...this.props} />
            }
        }
    )
}

function addContext(acc, key) {
    return { ...acc, [key]: React.createContext() }
}

function addProvider(Acc, [key, value]) {
    const { Provider } = value
    return ({ state, component }) => <Provider value={state[key]}>{Acc ? <Acc state={state} component={component} /> : component}</Provider>
}

function addConsumer(store) {
    return (Acc, key) => {
        const { Consumer } = store[key]
        return props => (
            <Consumer>
                {context => <Acc {...props} {...{ [key]: context }} />}
            </Consumer>
        )
    }
}

function createProvider(store) {
    return Object.entries(store).reduce(addProvider, null) || (({ component }) => component)
}

function createConsumer({ store, keys, Component }) {
    return keys.reduce(addConsumer(store), Component)
}

export { connect, state, actions }
export default Store