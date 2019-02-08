import React from "react"
import { CssBaseline } from "@material-ui/core"
import Store from "components/Store"
import App from "./App"

const AppContainer = () => (
    <Store>
        <CssBaseline />
        <App />
    </Store>
)

export default AppContainer