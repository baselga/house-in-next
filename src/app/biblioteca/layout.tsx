import Container from "@/ui/desingSystem/Container";
import * as S from "./layout.styled";

export default function LibraryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <S.LayoutHeader>
        <Container>
          <h1>Biblioteca</h1>
        </Container>
      </S.LayoutHeader>
      {children}
    </>
  );
}
