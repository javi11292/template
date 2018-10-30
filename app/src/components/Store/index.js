import React, { PureComponent } from "react"

const store = React.createContext()
const Provider = store.Provider
const Consumer = store.Consumer

const state = {

}
const actions = {

}

class Store extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render = () => (
        <Provider value={this.state}>
            {this.props.children}
        </Provider>
    )
}

const connect = (...keys) => Component => (
    class extends React.PureComponent {
        render = () => (
            <Consumer>
                {context => {
                    const props = keys.reduce(addKeys(context), {})
                    return <Component {...this.props} {...props} />
                }}
            </Consumer>
        )
    }
)

const addKeys = context => (acc, key) => ({ ...acc, [key]: context[key] })

export { connect, state, actions }
export default Store