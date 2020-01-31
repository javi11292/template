import React from "react"
import { ThemeProvider } from "styled-components"
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
import Main from "components/Main"
import useLogic from "./useLogic"

const theme = createMuiTheme({ palette: { type: "dark" } })

function App() {
  const { update, handleClose } = useLogic()

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default App