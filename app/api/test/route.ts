import { sql } from "@/app/db"

export async function GET() {
  const res=await sql`select * from public.health_check`

  return new Response(  JSON.stringify(''))
}