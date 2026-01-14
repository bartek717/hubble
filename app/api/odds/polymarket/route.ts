import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "ok",
    source: "polymarket",
    message: "Snapshot received.",
  });
}
