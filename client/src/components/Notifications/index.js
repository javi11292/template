import React from "react"
import { Snackbar } from "@material-ui/core"
import useLogic from "./useLogic"
import * as styled from "./styled"

function Notifications() {
  const { notification, handleClose, handleExited, open } = useLogic()

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      onExited={handleExited}
      autoHideDuration={2000}>
      <styled.SnackbarContent
        variant={notification.type}
        message={notification.value} />
    </Snackbar>
  )
}

export default Notifications