import { getStore } from "eztore"

export const useStore = getStore({
  notifications: {
    state: [],
    reducer(state, { action, value }) {
      switch (action) {
        case "push":
          return [...state, value]
        case "shift":
          return state.slice(1)
        default:
          return
      }
    },
  },
})