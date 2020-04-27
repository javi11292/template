import { useEffect, useState } from "react"
import { get, post } from "libraries/fetch"

export function useFetch(request) {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState()

  useEffect(() => {
    const [path, body] = request
    if (path) {
      async function getResponse() {
        const response = await (body ? post(path, body) : get(path))
        setResponse(response)
        setLoading(false)
      }

      getResponse()
      setResponse()
      setLoading(true)
    }
  }, [request])

  return { response, loading }
}