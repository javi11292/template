import React from 'react'
import { withStyles } from "@material-ui/core"

import styles from "./styles"

class App extends React.PureComponent {
    render = () => (
        <div className={this.props.classes.body} >

        </div>
    )
}

export default withStyles(styles)(App)
