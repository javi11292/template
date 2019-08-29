import React from "react"
import { createMuiTheme, MuiThemeProvider, CssBaseline } from "@material-ui/core"
import { Store } from "eztore"
import reducers from "reducers"

const theme = createMuiTheme({
    spacing: factor => `${0.5 * factor}rem`,
})

const App = () => (
    <Store reducers={reducers}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
        </MuiThemeProvider>
    </Store>
)

export default App