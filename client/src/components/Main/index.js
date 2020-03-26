import React from "react"
import Notifications from "components/Notifications"
import styles from "./index.module.css"

function Main({ style }) {
  return (
    <div className={styles.root} style={style}>
      <Notifications />
    </div>
  )
}

export default React.memo(Main)