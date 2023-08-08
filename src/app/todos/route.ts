import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = request.body;
  console.log("body: ", body);
  return NextResponse.json({
    success: true,
  });
}
