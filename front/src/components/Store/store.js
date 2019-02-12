const store = {
    example: {
        state: null,
        actions: setState => ({
            setExample: value => setState(state => value),
        }),
    },
}

export default store