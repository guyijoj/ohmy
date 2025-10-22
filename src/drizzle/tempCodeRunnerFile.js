import { Client } from "pg";
import * as dotenv from "dotenv";

// Загрузите переменные окружения из файла .env
dotenv.config();

const connectionString = process.env.DATABASE_URL;

async function testConnection() {
  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    console.log("✅ Подключение к Supabase успешно!");

    // Проверим, что можем выполнить простой запрос
    const result = await client.query("SELECT version()");
    console.log("✅ Версия PostgreSQL:", result.rows[0].version);

    // Проверим список таблиц
    const tables = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    console.log(
      "✅ Таблицы в базе:",
      tables.rows.map((row) => row.table_name)
    );
  } catch (error) {
    console.error("❌ Ошибка подключения:", error.message);
  } finally {
    await client.end();
  }
}

function main() {
  console.log(connectionString);
}

testConnection();