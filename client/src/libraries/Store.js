import { useReducer, useEffect, useCallback } from "react"

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
  return (key, subscribe = true) => {
    const [, forceUpdate] = useReducer(state => !state, false)

    useEffect(() => {
      if (!subscribe) return
      store.addListener(key, forceUpdate)
      return () => store.removeListener(key, forceUpdate)
    }, [key, subscribe])

    const update = useCallback(value => {
      if (typeof value === "function") {
        store.update(key, value(store.state[key]))
      } else {
        store.update(key, value)
      }
    }, [key])

    return [subscribe ? store.state[key] : undefined, update]
  }
}

export { getStore }

export default Store