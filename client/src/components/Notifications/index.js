import React, { useState, useEffect } from "react"
import { Snackbar, SnackbarContent } from "@material-ui/core"
import { useStore } from "hooks/store"

function Notifications() {
  function handleClose() {
    setOpen(false)
  }

  function handleExited() {
    setNotifications({ action: "shift" })
  }

  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useStore("notifications")

  useEffect(() => {
    setOpen(notifications.length > 0)
  }, [notifications])

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      onExited={handleExited}
      autoHideDuration={2000}>
      <SnackbarContent message={notifications[0]} />
    </Snackbar>
  )
}

export default Notifications