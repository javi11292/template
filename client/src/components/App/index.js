import React from "react"
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
import useLogic from "./useLogic"

const includedKeys = /palettePrimary/

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
    secondary: blue,
  },
})
const style = getStyle(theme)

function getStyle(value, path) {
  if (value && typeof value === "object") {
    return Object.entries(value).reduce((acc, [key, entry]) => {
      const style = getStyle(entry, path ? `${path}${upperCase(key)}` : key)
      Object.assign(acc, style)
      return acc
    }, {})
  } else if (includedKeys.test(path)) {
    return { [`--${path}`]: value }
  }
}

function App() {
  const { update, handleClose } = useLogic()

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

        <Main style={style} />
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default App