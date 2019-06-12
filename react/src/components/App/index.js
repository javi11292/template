import React from "react"
import { withStyles, CssBaseline } from "@material-ui/core"
import { Store } from "eztore"
import reducers from "reducers"
import styles from "./styles"

const App = props => (
    <Store reducers={reducers}>
        <CssBaseline />
        <div className={props.classes.body}>

        </div>
    </Store>
)

export default withStyles(styles)(App)