import React, { useState, useEffect } from "react"
import {
  MuiThemeProvider,
  CssBaseline,
  StylesProvider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core"
import Notifications from "components/Notifications"
import { THEME } from "libraries/theme"
import * as styled from "./styled"

export default function Main({ children }) {
  const [update, setUpdate] = useState()

  function handleClose({ currentTarget }) {
    if (currentTarget.dataset.confirm) {
      update()
      setUpdate(true)
    } else {
      setUpdate()
    }
  }

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) jssStyles.remove()
  }, [])

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return
    navigator.serviceWorker.register("/service-worker.js").then(registration => {
      registration.onupdatefound = () => {
        const worker = registration.installing
        let hasUpdated = false

        function handleUpdate() {
          hasUpdated = true
          setUpdate(() => () => worker.postMessage({ type: "SKIP_WAITING" }))
        }

        worker.onstatechange = () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) handleUpdate()
          if (worker.state === "activated" && hasUpdated) window.location.reload()
        }
      }
    })
  }, [])

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={THEME}>
        <CssBaseline />

        <Dialog open={!!update}>
          {update !== true &&
            <>
              <DialogTitle>Nueva versión disponible</DialogTitle>

              <DialogContent>
                <DialogContentText>Pulsa "Actualizar" para aplicar los cambios</DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose} data-confirm color="primary">Actualizar</Button>
              </DialogActions>
            </>
          }
        </Dialog>

        <styled.Root>
          <Notifications />
          {children}
        </styled.Root>
      </MuiThemeProvider>
    </StylesProvider>
  )
}