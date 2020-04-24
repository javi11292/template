import React from "react"
import Notifications from "components/Notifications"
import styles from "./index.module.css"

export default function Main({ children }) {
  return (
    <div className={styles.root}>
      <Notifications />
      {children}
    </div>
  )
}