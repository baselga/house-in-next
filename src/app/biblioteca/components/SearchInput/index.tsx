"use client";
import { colors } from "@/theme/colors.yak";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import * as S from "./sytled";

function SearchInput(props: React.AllHTMLAttributes<HTMLInputElement> = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      if (e.target.value) {
        params.set("search", e.target.value);
      } else {
        params.delete("search");
      }

      const search = params.toString();
      const query = search ? `?${search}` : "";
      router.push(`${pathname}${query}`);
    },
    300
  );

  return (
    <S.Root>
      <S.Input
        type="text"
        {...props}
        onChange={handleChange}
        defaultValue={searchParams.get("search") || undefined}
      />
      <SearchIcon className="searchIcon" color={colors.text.hint} size={28} />
    </S.Root>
  );
}

export default SearchInput;
