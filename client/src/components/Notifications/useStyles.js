import React from "react"
import { SnackbarContent as MuiSnackbarContent } from "@material-ui/core"
import { NOTIFICATION } from "libraries/constants"
import styled from "styled-components"

export const SnackbarContent = styled(({ variant, ...props }) => <MuiSnackbarContent {...props} />)`
  background-color: ${props => props.variant === NOTIFICATION.error ? props.theme.palette.error.dark : props.theme.palette.primary.dark};
  color: inherit;
`