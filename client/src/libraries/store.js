import { useReducer, useEffect, useCallback } from "react"

function getStore(state) {
  const store = {
    state,
    listeners: {},

    update(key, value) {
      if (this.state[key].value === value) return
      this.state[key].value = value
      this.listeners[key].forEach(callback => callback())
    },

    addListener(key, callback) {
      if (!this.listeners[key]) {
        this.listeners[key] = new Set()
      }
      this.listeners[key].add(callback)
    },

    removeListener(key, callback) {
      this.listeners[key].delete(callback)
      if (!this.listeners[key].size) delete this.listeners[key]
    },
  }

  return (key, subscribe = true) => {
    const [, forceUpdate] = useReducer(state => !state, false)

    useEffect(() => {
      if (!subscribe) return
      store.addListener(key, forceUpdate)
      return () => store.removeListener(key, forceUpdate)
    }, [key, subscribe])

    const update = useCallback(value => {
      const field = store.state[key]
      store.update(key, field.reducer(field.value, value))
    }, [key])

    return subscribe ? [store.state[key].value, update] : update
  }
}

export default getStore