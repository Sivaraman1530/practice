import postgres from 'postgres'
const DATABASE_URL = 'postgres://default:OxDsbI7VA0zS@ep-lively-math-a1x13a86.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require';

export const sql = postgres(DATABASE_URL) // will use psql environment variables
