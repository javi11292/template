import { useEffect, useState } from "react"
import { get, post } from "libraries/fetch"

/**
 * @param {{path: string, body}} request 
 */
export function useFetch(request) {
  const [state, setState] = useState({ loading: false })

  useEffect(() => {
    const { path, body } = request || {}
    if (path) {
      async function getResponse() {
        const response = await (body ? post(path, body) : get(path))
        setState({ loading: false, response })
      }

      getResponse()
      setState(state => ({ ...state, loading: true }))
    }
  }, [request])

  return state
}