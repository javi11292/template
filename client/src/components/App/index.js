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
import { Store } from "eztore"
import reducers from "reducers"
import useLogic from "./useLogic"

const theme = createMuiTheme({
    spacing: factor => `${0.5 * factor}rem`,
})

const App = () => {
    const { update, handleClose } = useLogic()

    return (
        <Store reducers={reducers}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Dialog onClose={handleClose} open={!!update}>
                    <DialogTitle>Nuevo contenido disponible</DialogTitle>

                    <DialogContent>
                        <DialogContentText>Pulsa "Actualizar" para obtener la última versión</DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose(false)} color="secondary">Descartar</Button>
                        <Button onClick={handleClose(true)} color="primary">Actualizar</Button>
                    </DialogActions>
                </Dialog>
            </MuiThemeProvider>
        </Store>
    )
}

export default App