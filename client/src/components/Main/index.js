import React from "react"
import Notifications from "components/Notifications"
import styled from "./styled"

function Main() {
  return (
    <styled.Box>
      <Notifications />
    </styled.Box>
  )
}

export default React.memo(Main)