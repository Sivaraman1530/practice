import postgres from 'postgres'
const DATABASE_URL = 'postgres://try:try@localhost:5432/player';


export const sql = postgres(DATABASE_URL) // will use psql environment variables
