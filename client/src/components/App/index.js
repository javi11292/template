import React, { useState, useEffect, useLayoutEffect } from "react"
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  StylesProvider
} from "@material-ui/core"
import green from "@material-ui/core/colors/green"
import blue from "@material-ui/core/colors/blue"
import Main from "components/Main"
import { upperCase } from "libraries/util"

const INCLUDED_KEYS = /palettePrimary/

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
    secondary: blue,
  },
})

const style = `:root{${getStyle(theme)}}`

function getStyle(value, path) {
  if (value && typeof value === "object") {
    return Object.entries(value).reduce((acc, [key, entry]) => {
      const style = getStyle(entry, path ? `${path}${upperCase(key)}` : key)
      return style ? acc + style : acc
    }, "")
  } else if (INCLUDED_KEYS.test(path)) {
    return `--${path}:${value};`
  }
}

function App() {
  const [update, setUpdate] = useState()

  function handleClose({ currentTarget }) {
    if (currentTarget.dataset.confirm) {
      update()
    } else {
      setUpdate()
    }
  }

  useLayoutEffect(() => {
    const styleElement = document.createElement("style")
    styleElement.textContent = style
    document.head.appendChild(styleElement)
  }, [])

  useEffect(() => {
    function callback({ detail }) {
      setUpdate(() => () => {
        detail.postMessage({ type: "SKIP_WAITING" })
        window.location.reload()
      })
    }

    window.addEventListener("update", callback)
    return () => window.removeEventListener("update", callback)
  }, [])

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <Dialog onClose={handleClose} open={!!update}>
          <DialogTitle>Nueva versión disponible</DialogTitle>

          <DialogContent>
            <DialogContentText>Pulsa "Actualizar" para aplicar los cambios</DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="secondary">Cancelar</Button>
            <Button onClick={handleClose} data-confirm color="primary">Actualizar</Button>
          </DialogActions>
        </Dialog>

        <Main />
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default App