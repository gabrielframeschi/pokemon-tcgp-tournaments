import { cn } from "@/lib/utils";
import Ranking from "@/modules/tournament/ui/ranking";

const getRandomNumber = (): 1 | 2 | 3 | 4 | 5 => {
  return (Math.floor(Math.random() * 5) + 1) as 1 | 2 | 3 | 4 | 5;
};

export default function Home() {
  const bgNumber = getRandomNumber();

  return (
    <div
      className={cn(
        "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover",
        {
          "bg-[url(/bg.jpg)] ": bgNumber === 1,
          "bg-[url(/bg2.jpg)] ": bgNumber === 2,
          "bg-[url(/bg3.jpg)] ": bgNumber === 3,
          "bg-[url(/bg4.jpg)] ": bgNumber === 4,
          "bg-[url(/bg5.jpg)] ": bgNumber === 5,
        },
      )}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex items-center bg-white p-6 rounded-lg shadow-2xl">
          <Ranking />
        </div>
      </main>
    </div>
  );
}
