"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

type SearchInputProps = {
  inputProps?: React.AllHTMLAttributes<HTMLInputElement>;
} & React.AllHTMLAttributes<HTMLLabelElement>;

function SearchInput(props: SearchInputProps = {}) {
  const { className = "", inputProps = {}, ...rest } = props;
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
    <label className={`input w-full ${className}`} {...rest}>
      <SearchIcon className="searchIcon" size={22} />
      <input
        type="search"
        className="grow"
        {...inputProps}
        onChange={handleChange}
        defaultValue={searchParams.get("search") || undefined}
      />
    </label>
  );
}

export default SearchInput;
