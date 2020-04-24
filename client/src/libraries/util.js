import { createMuiTheme } from "@material-ui/core"
import green from "@material-ui/core/colors/green"
import blue from "@material-ui/core/colors/blue"

export function upperCase(string = "") {
  return string && string[0].toUpperCase() + string.slice(1)
}

export function createTheme() {
  const INCLUDED_KEYS = /palettePrimary/

  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: green,
      secondary: blue,
    },
  })

  const style = `:root{${getStyle(theme)}}`

  function getStyle(value, path) {
    if (value && typeof value === "object") {
      return Object.entries(value).reduce((acc, [key, entry]) => {
        const style = getStyle(entry, path ? `${path}${upperCase(key)}` : key)
        return style ? acc + style : acc
      }, "")
    } else if (INCLUDED_KEYS.test(path)) {
      return `--${path}:${value};`
    }
  }

  return { theme, style }
}