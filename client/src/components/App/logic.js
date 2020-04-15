import { useState, useEffect, useLayoutEffect } from "react"

export function useLogic(style) {
  function handleClose({ currentTarget }) {
    if (currentTarget.dataset.confirm) {
      update()
    } else {
      setUpdate()
    }
  }

  const [update, setUpdate] = useState()

  useLayoutEffect(() => {
    const styleElement = document.createElement("style")
    styleElement.textContent = style
    document.head.appendChild(styleElement)
  }, [style])

  useEffect(() => {
    function callback({ detail }) {
      setUpdate(() => () => {
        detail.postMessage({ type: "SKIP_WAITING" })
        window.location.reload()
      })
    }

    window.addEventListener("update", callback)
    return () => window.removeEventListener("update", callback)
  }, [])

  return { update, handleClose }
}