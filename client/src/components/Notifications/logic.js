import { useState, useEffect } from "react"
import { useStore } from "hooks/store"

export function useLogic() {
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

  return { notification: notifications[0], handleClose, handleExited, open }
}