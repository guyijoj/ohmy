import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import * as dotenv from "dotenv";
import postgres from "postgres";

dotenv.config();
const client = postgres(process.env.DATABASE_URL!, {
  ssl: "require",
  prepare: false,
});
export const db = drizzle(client, {
  schema,
  logger: true,
});
