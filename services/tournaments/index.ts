"use server";

import { IRanking } from "@/modules/tournament/types";

export async function getRanking(): Promise<IRanking> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/tournaments/ranking`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Erro ao buscar usuários");
  }

  return res.json();
}
