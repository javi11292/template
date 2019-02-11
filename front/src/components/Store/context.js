import { createContext } from "react"

const context = {
    example: {
        context: createContext(),
        state: null,
        actions: setState => ({
            setExample: value => setState(state => value),
        }),
    }
}

export default context