import players from "@/temp/players.json";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const player = players.find((player) => player.id === id);

  if (!player) return notFound();

  return NextResponse.json(player);
}
