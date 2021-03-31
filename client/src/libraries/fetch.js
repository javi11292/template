const HOST = process.env.NEXT_PUBLIC_HOST;

async function parseResponse(response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function send(input, init) {
  const response = await fetch(input, init);
  const parsedResponse = parseResponse(response);

  if (!response.ok) {
    const error = new Error();
    error.response = parsedResponse;
    throw error;
  }

  return parsedResponse;
}

export function get(path) {
  return send(`${HOST}${path}`, {
    credentials: 'include',
  });
}

export function post(path, body) {
  return send(`${HOST}${path}`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export function upload(path, data) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));
  return send(`${HOST}${path}`, {
    credentials: 'include',
    method: 'POST',
    body: formData,
  });
}
