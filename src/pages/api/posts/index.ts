import { getCollection, getEntry } from "astro:content";
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ params, request, cookies }) => {
  const posts = await getCollection("blog");

  // asi obtengo query params
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");


//   essta es la solitud que se haria mediante por ejem un meedia query aqui deberia catpurarla
console.log(slug);
const headers = {
  "Content-Type": "application/json",
};
  // asi o getentry
  // const post = posts.find((post) => post.slug === slug);

  if (!slug) {
    return new Response(JSON.stringify(posts), { status: 200, headers: headers });
  }
  const post = await getEntry('blog', slug);

  if (post) {
    return new Response(JSON.stringify(post), { status: 200, headers: headers });
  } else {
    return new Response(JSON.stringify(posts), {
      status: 404,
      headers: headers,
    });
  }

};
