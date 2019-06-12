import React from "react"
import { CssBaseline } from "@material-ui/core"
import { Store } from "eztore"
import reducers from "reducers"
import useStyles from "./useStyles"

const App = props => {
    const classes = useStyles(props)
    return (
        <Store reducers={reducers}>
            <CssBaseline />
            <div className={classes.body}>

            </div>
        </Store>
    )
}

export default App