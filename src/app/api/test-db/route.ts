import { NextResponse } from "next/server";
import { Client } from "pg";

export async function GET() {
  try {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    const result = await client.query("select now()");
    await client.end();
    return NextResponse.json({ success: true, time: result.rows[0].now });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
