import React, { PureComponent } from 'react'
import { CssBaseline } from "@material-ui/core"

import Store from "components/Store"
import App from "./App"

class AppContainer extends PureComponent {
    render = () => (
        <Store>
            <CssBaseline />
            <App />
        </Store>
    )
}

export default AppContainer
