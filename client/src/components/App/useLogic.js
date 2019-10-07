import { useState, useEffect } from "react"

function useLogic() {
  const [update, setUpdate] = useState()

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

  function handleClose(shouldUpdate) {
    return () => {
      if (shouldUpdate) {
        update()
      } else {
        setUpdate()
      }
    }
  }

  return { update, handleClose }
}

export default useLogic