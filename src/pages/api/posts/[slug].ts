import type { APIRoute } from "astro";
import { getEntry } from "astro:content";

export const prerender = false;

const headers = {
    'Content-Type': 'application/json',
}

export const GET: APIRoute = async ({ params, request }) => {


    const  {slug} = params;

    if (!slug) {
        return new Response("No slug provided", { status: 400 });
    }

    const post = await getEntry('blog', slug);

    if (!post) {
        return new Response("Post not found", { status: 404 });
    }

    
  return new Response(JSON.stringify(post), {   
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};



export const POST: APIRoute = async ({ params, request }) => {

    const body = await request.json();

    
  return new Response(JSON.stringify({method: 'POST', ...body}), { status: 200 , headers: headers});
};

export const PUT: APIRoute = async ({ params, request }) => {

    console.log('entro put')

    const body = await request.json();

    
  return new Response(JSON.stringify({method: 'PUT', ...body}), { status: 200 , headers: headers});
};

export const PATCH: APIRoute = async ({ params, request }) => {


    const body = await request.json();

    
  return new Response(JSON.stringify({method: 'PATCH', ...body}), { status: 200 , headers: headers});
};

export const DELETE: APIRoute = async ({ params, request }) => {

    console.log('entro put')

    const body = await request.json();

    
  return new Response(JSON.stringify({method: 'DELETE', ...body}), { status: 200 , headers: headers});
};



