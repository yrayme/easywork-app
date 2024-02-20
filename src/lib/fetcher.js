const API_URL = "http://localhost:3008/api/v1";

export default async function fetchAPI(
  endpoint = "/",
  tag = "easywork",
  method = "GET",
  data,
  headers = { "Content-Type": "application/json" }
) {
  const requestOptions = {
    method,
    headers,
    next: {
      tags: [tag],
    },
  };

  // Agregar cuerpo solo si el método es POST
  if (method === "POST" && data) {
    // Si el cuerpo es un FormData, no es necesario convertirlo a JSON

    if (data instanceof FormData) {
      requestOptions.body = data;
    } else {
      requestOptions.body = JSON.stringify(data);
    }
  }
  try {
    const res = await fetch(API_URL + endpoint, requestOptions);

    const json = await res.json();

    if (json.errors) {
      console.error(json.errors);
      return {
        errors: json.errors,
      };
    }
    return json;
  } catch (error) {
    return null;
  }
}
