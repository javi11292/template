import React from "react"
import { hydrate, render } from "react-dom"
import WebFont from "webfontloader"
import App from "components/App"
import * as serviceWorker from "serviceWorker"

function loadFont() {
  WebFont.load({ google: { families: ["Roboto:300,400,500,700&display=swap"] } })
}

const rootElement = document.getElementById("root");

if (process.env.NODE_ENV === "production" && rootElement.hasChildNodes()) {
  Array.from(document.getElementsByTagName("style")).forEach(style => style.remove())
  hydrate(<App />, rootElement);
  loadFont()
} else {
  render(<App />, rootElement);
  if (process.env.NODE_ENV === "development") loadFont()
}

function onUpdate(registration) {
  window.dispatchEvent(new CustomEvent("update", { detail: registration.waiting }))
}

serviceWorker.register({ onUpdate })