// app/api/health/route.ts
import { NextResponse } from "next/server";
import { Client } from "pg";

export const runtime = "nodejs"; // важно для Next.js на проде
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const client = new Client({
      connectionString: process.env.DATABASE_URL, // возьми prod URL из Supabase
      ssl: { rejectUnauthorized: false }, // <-- ключевая строка
    });
    await client.connect();
    const { rows } = await client.query("select now()");
    await client.end();
    return NextResponse.json({ success: true, time: rows[0].now });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
