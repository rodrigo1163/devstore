import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="size-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar produto..."
            className="bg-transparent outline-none text-sm flex-1 placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="size-5 text-zinc-500" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-900" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/rodrigo1163.png"
            alt=""
            width={24}
            height={24}
            className="size-6 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}
