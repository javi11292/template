import { createMuiTheme } from "@material-ui/core"
import green from "@material-ui/core/colors/green"
import blue from "@material-ui/core/colors/blue"

const INCLUDED_KEYS = /palettePrimary/

function capitalize(string = "") {
  return string && string[0].toUpperCase() + string.slice(1)
}

function getThemeConstants(value, path) {
  if (value && typeof value === "object") {
    const style = Object.entries(value).reduce((acc, [key, entry]) => {
      const style = getThemeConstants(entry, path ? `${path}${capitalize(key)}` : key)
      return style ? acc + style : acc
    }, "")

    return path ? style : `:root{${style}}`
  } else if (INCLUDED_KEYS.test(path)) {
    return `--${path}:${value};`
  }
}

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
    secondary: blue,
  },
})

export const themeConstants = getThemeConstants(theme)