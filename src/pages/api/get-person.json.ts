import type { APIRoute } from "astro";


// esto genera de forma estatica la respuesta 
export const GET: APIRoute = async ({ params, request }) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const person = {
    name: "Sergio Miranda",
    age: 38,
  };
  return new Response(JSON.stringify(person), {
    status: 200,
    headers: headers,
  });
};
