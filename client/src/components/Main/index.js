import React from "react"
import useStyles from "./useStyles"

function Main() {
  const styles = useStyles()

  return (
    <div className={styles.root}>

    </div>
  )
}

export default React.memo(Main)