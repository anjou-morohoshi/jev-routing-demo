import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  const response = await fetch(
    "https://jevtypesafeai.com/api/v1/decide",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.JEV_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state: text,
        questions: {
          department: {
            type: "choice",
            instructions:
              "問い合わせ内容を適切な部署へ振り分ける",
            criteria: {
              logistics: "配送、運送、倉庫、入出荷",
              accounting: "請求書、支払、入金、経費",
              it: "パソコン、ネットワーク、システム障害",
              dx: "AI、Copilot、DX推進"
            }
          }
        }
      }),
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}