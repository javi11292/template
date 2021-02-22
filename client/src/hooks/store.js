import { getStore } from "eztore"

export const useStore = getStore({
  notifications: {
    state: [],
    reducers: {
      push(state, payload) {
        state.push(payload)
      },
      shift(state) {
        state.shift()
      }
    }
  },
})