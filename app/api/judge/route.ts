import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = process.env.JEV_API_KEY;

  return NextResponse.json({
    apiKeyExists: !!apiKey,
  });
}