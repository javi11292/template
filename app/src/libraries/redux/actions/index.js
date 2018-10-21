export const RESET = "reset"

const action = (type, payload) => {
    return { type, payload }
}

export const reset = () => action(RESET)
