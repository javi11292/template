import React from 'react'
import { CssBaseline } from "@material-ui/core"

import Store from "components/Store"
import Main from "components/Main"

class App extends React.PureComponent {
    render = () => (
        <Store>
            <CssBaseline />
            <Main />
        </Store>
    )
}

export default App
