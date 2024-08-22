import postgres from 'postgres'
const DATABASE_URL = "postgres://try:try@localhost:5432/player";
export const sql = postgres(DATABASE_URL)

export async function GET() {
  const res=await sql`select * from cars`
  return Response.json(  res)
}