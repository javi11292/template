const HOST = process.env.NEXT_PUBLIC_HOST

async function parseResponse(response) {
  const text = await response.text()
  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

async function send(input, init) {
  try {
    const response = await fetch(input, init)
    if (!response.ok) return { error: response.statusText }
    return parseResponse(response)
  } catch (error) {
    console.error(error)
    return null
  }
}

export function get(path) {
  return send(`${HOST}${path}`, {
    credentials: "include",
  })
}

export function post(path, body) {
  return send(`${HOST}${path}`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
}

export function upload(path, data) {
  const formData = new FormData()
  Object.entries(data).forEach(([key, value]) => formData.append(key, value))
  return send(`${HOST}${path}`, {
    credentials: "include",
    method: "POST",
    body: formData,
  })
}

export async function axios({ path, body, callback }) {
  callback(state => ({ ...state, loading: true }))
  const response = await (body ? post(path, body) : get(path))
  callback({ response, loading: false })
}