import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CartWidget } from "./cart-widget";
import { SearchForm } from "./search-form";
import { Suspense } from "react";

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

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
