const store = {
    reset: {
        state: Date.now(),
        actions: setState => ({
            reset: () => setState(Date.now()),
        }),
    },
}

export default store