import { getStore } from 'eztore';

export const useStore = getStore({
  notifications: {
    state: [],
    reducers: {
      push(state, payload) {
        return [...state, payload];
      },
      shift(state) {
        const [, ...newState] = state;
        return newState;
      },
    },
  },
});
