import React, { PureComponent } from 'react'
import { Provider } from "react-redux"

import store from "libraries/redux/store"
import App from "./App"

class AppContainer extends PureComponent {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }

}

export default AppContainer
