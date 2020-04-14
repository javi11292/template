import { getStore } from "eztore"

export const useStore = getStore({
  notifications: {
    state: [],
    reducer(state, { action, value }) {
      switch (action) {
        case "push":
          state.push(value)
          break
        case "shift":
          state.shift()
          break
        default:
          return
      }
    },
  },
})