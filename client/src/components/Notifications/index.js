import { useState, useEffect } from "react"
import { Snackbar, SnackbarContent } from "@material-ui/core"
import { useStore } from "hooks/store"

export default function Notifications() {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useStore("notifications")

  function handleClose() {
    setOpen(false)
  }

  function handleExited() {
    setNotifications({ action: "shift" })
  }

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