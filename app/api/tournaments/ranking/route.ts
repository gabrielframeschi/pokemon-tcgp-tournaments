import { NextResponse } from "next/server";
import ranking from "@/temp/ranking.json";

export async function GET() {
  return NextResponse.json(ranking);
}
