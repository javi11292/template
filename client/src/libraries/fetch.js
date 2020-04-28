import fetch from "node-fetch"
const HOST = typeof window === "undefined" ? "http://server:3000/api" : "/api"

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

async function parseResponse(response) {
  const text = await response.text()
  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}