import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>hola mundo en next</p>
        <Link
          className="bg-blue-400 p-2 text-white font-semibold mx-auto"
          href={"/about"}
        >
          ir Inicio
        </Link>
      </main>
    </div>
  );
}
