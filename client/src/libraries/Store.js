class Store {
  constructor(state) {
    this.state = {}
    this.listeners = {}
  }

  update(key, value) {
    if (this.state[key] === value) return
    this.state[key] = value
    this.listeners[key].forEach(callback => callback())
  }

  addListener(key, callback) {
    if (!this.listeners[key]) {
      this.listeners[key] = new Set()
    }
    this.listeners[key].add(callback)
  }

  removeListener(key, callback) {
    this.listeners[key].delete(callback)
    if (!this.listeners[key].size()) delete this.listeners[key]
  }
}

function getStore(store) {
  return (key, onlyAction) => {
    const [, forceUpdate] = useReducer(state => !state, false)

    useEffect(() => {
      if (onlyAction) return
      store.addListener(key, forceUpdate)
      return () => store.removeListener(key, forceUpdate)
    }, [key, onlyAction])

    const update = useCallback(value => {
      if (typeof value === "function") {
        store.update(key, value(store.state[key]))
      } else {
        store.update(key, value)
      }
    }, [key])

    return onlyAction ? update : [store.state[key], update]
  }
}

export { getStore }

export default Store