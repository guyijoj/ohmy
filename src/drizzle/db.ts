import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";

// Для production важно правильно обрабатывать подключения
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const client = postgres(connectionString, {
  prepare: false,
  max: 1, // Важно для serverless окружения
  idle_timeout: 20,
  max_lifetime: 60 * 30,
});

export const db = drizzle(client, {
  schema,
  logger: process.env.NODE_ENV === "development", // Логи только в development
});
