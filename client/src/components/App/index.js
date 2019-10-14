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
} from "@material-ui/core"
import useLogic from "./useLogic"

const theme = createMuiTheme({
  spacing: factor => `${0.5 * factor}rem`,
})

function App() {
  const { update, handleClose } = useLogic()

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Dialog onClose={handleClose} open={!!update}>
        <DialogTitle>Nueva versión disponible</DialogTitle>

        <DialogContent>
          <DialogContentText>Pulsa "Actualizar" para aplicar los cambios</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose(false)} color="secondary">Cancelar</Button>
          <Button onClick={handleClose(true)} color="primary">Actualizar</Button>
        </DialogActions>
      </Dialog>
    </MuiThemeProvider>
  )
}

export default App