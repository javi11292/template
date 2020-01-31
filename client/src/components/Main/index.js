import React from "react"
import Notifications from "components/Notifications"
import { Box } from "./useStyles"

function Main() {
  return (
    <Box>
      <Notifications />
    </Box>
  )
}

export default React.memo(Main)