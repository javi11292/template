import React from "react"
import { hydrate, render } from "react-dom"
import App from "components/App"
import * as serviceWorker from "serviceWorker"

function onUpdate(registration) {
  window.dispatchEvent(new CustomEvent("update", { detail: registration.waiting }))
}

const rootElement = document.getElementById("root");

if (process.env.NODE_ENV === "production" && rootElement.hasChildNodes()) {
  Array.from(document.getElementsByTagName("style")).forEach(style => style.remove())
  hydrate(<App />, rootElement);
  serviceWorker.register({ onUpdate })
} else {
  render(<App />, rootElement);
}