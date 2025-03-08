import Container from "@/ui/desingSystem/Container";
import * as S from "./layout.styled";
import NavigationButton from "./components/NavigationButton";

export default function LibraryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <S.LayoutHeader>
        <Container>
          <h1>Biblioteca</h1>
          <NavigationButton />
        </Container>
      </S.LayoutHeader>
      {children}
    </>
  );
}
