import { useEffect } from "react"
import {
  MuiThemeProvider,
  CssBaseline,
  StylesProvider,
} from "@material-ui/core"
import dynamic from "next/dynamic"
import { theme } from "libraries/theme"
import styles from "./index.module.scss"

const Notifications = dynamic(() => import("components/notifications"))

export default function Main({ children }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) jssStyles.remove()
  }, [])

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/service-worker.js")
      caches.keys().then(names => {
        names.forEach(name => {
          const match = /^cache-(.*)/.exec(name)
          if (match && match[1] !== process.env.VERSION) {
            caches.delete(name)
          }
        })
      })
    }
  }, [])

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={styles.root}>
          <Notifications />
          {children}
        </div>
      </MuiThemeProvider>
    </StylesProvider>
  )
}