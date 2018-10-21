import { createStore } from "redux"

import reducers from "libraries/redux/reducers"

const store = createStore(reducers)
const dispatch = store.dispatch

export { dispatch }
export default store
