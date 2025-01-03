import Link from "next/link";
import * as S from "./styles";
import Container from "@/ui/desingSystem/Container";

export function Header() {
  return (
    <S.Header>
      <Container>
        <Link href={"/"}>
          <h1>House In</h1>
        </Link>
        <S.Nav>
          <ul>
            <li>
              <Link href="/recetas">Recetas</Link>
            </li>
            <li>
              <Link href="/biblioteca">Biblioteca</Link>
            </li>
          </ul>
        </S.Nav>
      </Container>
    </S.Header>
  );
}
