import { ReactNode } from "react";
import * as S from "./styles";

function Container({ children }: { children: ReactNode }) {
  return <S.Container>{children}</S.Container>;
}
export default Container;
