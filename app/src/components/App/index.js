import React, { PureComponent } from 'react'

import Store from "components/Store"
import App from "./App"

class AppContainer extends PureComponent {
  render = () => (
    <Store>
      <App />
    </Store>
  )
}

export default AppContainer
