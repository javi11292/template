import { useReducer, useEffect, useCallback } from "react"
import produce from "immer"

function getStore(fields) {
  const store = {
    fields,
    listeners: {},

    get(key) {
      return this.fields[key].state
    },

    update(key, value) {
      const field = this.fields[key]
      const { state, reducer } = field
      const listeners = this.listeners[key] || []

      const nextState = produce(state, draftState => reducer(draftState, value))
      if (state === nextState) return
      field.state = nextState

      listeners.forEach(callback => callback())
    },

    addListener(key, callback) {
      if (!this.listeners[key]) {
        this.listeners[key] = new Set()
      }
      this.listeners[key].add(callback)
    },

    removeListener(key, callback) {
      this.listeners[key].delete(callback)
    },
  }

  return (key, subscribe = true) => {
    const [, forceUpdate] = useReducer(state => !state, false)

    useEffect(() => {
      if (!subscribe) return
      store.addListener(key, forceUpdate)
      return () => store.removeListener(key, forceUpdate)
    }, [key, subscribe])

    const update = useCallback(value => store.update(key, value), [key])

    return subscribe ? [store.get(key), update] : update
  }
}

export default getStore