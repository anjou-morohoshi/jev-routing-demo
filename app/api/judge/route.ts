import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  let department = "判定不可";

  if (text.includes("配送")) {
    department = "物流";
  } else if (text.includes("請求")) {
    department = "経理";
  } else if (text.includes("パソコン")) {
    department = "情報システム";
  }

  return NextResponse.json({
    department,
  });
}