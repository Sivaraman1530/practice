import { sql } from "@/app/db"

export async function GET() {
  const res=await sql`select * from cars`

  return new Response(  JSON.stringify(res), {
    headers: { 
      'Access-Control-Allow-Origin': 'http://localhost:3001', // Allow requests from this origin
     },
  })
}