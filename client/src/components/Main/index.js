import { useEffect } from "react"
import {
  MuiThemeProvider,
  CssBaseline,
  StylesProvider,
} from "@material-ui/core"
import Notifications from "components/Notifications"
import { THEME } from "libraries/theme"
import * as styled from "./styled"

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
      <MuiThemeProvider theme={THEME}>
        <CssBaseline />
        <styled.Root>
          <Notifications />
          {children}
        </styled.Root>
      </MuiThemeProvider>
    </StylesProvider>
  )
}