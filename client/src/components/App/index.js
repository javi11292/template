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
import Main from "components/Main"
import useLogic from "./useLogic"

const theme = createMuiTheme()

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
          <Button onClick={handleClose} data-value={false} color="secondary">Cancelar</Button>
          <Button onClick={handleClose} data-value={true} color="primary">Actualizar</Button>
        </DialogActions>
      </Dialog>

      <Main />
    </MuiThemeProvider>
  )
}

export default App