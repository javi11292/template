import { createMuiTheme } from "@material-ui/core"
import green from "@material-ui/core/colors/green"
import blue from "@material-ui/core/colors/blue"
import { capitalize } from "./util"

const INCLUDED_KEYS = /palettePrimary/

export const THEME = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
    secondary: blue,
  },
})

export const STYLE = getStyle(THEME)

function getStyle(value, path) {
  if (value && typeof value === "object") {
    const style = Object.entries(value).reduce((acc, [key, entry]) => {
      const style = getStyle(entry, path ? `${path}${capitalize(key)}` : key)
      return style ? acc + style : acc
    }, "")

    return path ? style : `:root{${style}}`
  } else if (INCLUDED_KEYS.test(path)) {
    return `--${path}:${value};`
  }
}