"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import type { FormEvent } from "react";

export function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const query = data.q;

    if (!query) {
      return null;
    }

    router.push(`/search?q=${query}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="size-5 text-zinc-500" />
      <input
        name="q"
        type="text"
        placeholder="Buscar produto..."
        className="bg-transparent outline-none text-sm flex-1 placeholder:text-zinc-500"
        required
        defaultValue={query ?? ""}
      />
    </form>
  );
}
