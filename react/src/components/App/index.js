import React from "react"
import { CssBaseline } from "@material-ui/core"
import { Store } from "eztore"
import reducers from "reducers"

const App = () => (
    <Store reducers={reducers}>
        <CssBaseline />
    </Store>
)

export default App