import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    body: {
        ...theme.typography.body1,
        position: "absolute",
        height: "100%",
        width: "100%",
    }
}))