


export async function GET() {

  

  return new Response(JSON.stringify({ data: ["siva", 2, 3, 4, 5] }), {
    headers: { 
      'Access-Control-Allow-Origin': 'http://localhost:3001', // Allow requests from this origin
     },
  })
}