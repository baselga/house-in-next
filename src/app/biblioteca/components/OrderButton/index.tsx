'use client';

import { AArrowDownIcon, AArrowUpIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as S from "./styled";
import { useCallback } from "react";

const OrderButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const order = searchParams.get("order") || "asc";

  const handleClick = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (order === "asc") {
      params.set("order", "desc");
    } else {
      params.delete("order");
    }
    const search = params.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  }, [order, pathname, router, searchParams]);

  return (
    <S.Button onClick={handleClick}>
      {order === "asc" ? (
        <AArrowDownIcon size={24} />
      ) : (
        <AArrowUpIcon size={24} />
      )}
    </S.Button>
  );
};

export default OrderButton;
