import { useEffect, useState } from "react"
import { get, post } from "libraries/fetch"

export function useContent(path, body) {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState()

  useEffect(() => {
    if (path) {
      async function getResponse() {
        const response = await body ? get(path) : post(path, body)
        setResponse(response)
        setLoading(false)
      }

      getResponse()
      setLoading(true)
    }
  }, [path, body])

  return { response, loading }
}