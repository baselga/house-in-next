import { getAllBooksWithRelations } from "@/db/book/book.useCase";
import Container from "@/ui/desingSystem/Container";
import BookCard from "./components/BookCard";
import OrderButton from "./components/OrderButton";
import SearchInput from "./components/SearchInput";
import * as S from "./pague.styled";

export default async function LibraryPage(props: {
  searchParams?: Promise<{
    order?: "desc";
    search?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const order = searchParams?.order || "asc";

  const books = await getAllBooksWithRelations({
    order: { dir: order, field: "title" },
    search: searchParams?.search,
  });

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <S.RoowFilter>
          <SearchInput placeholder="Buscar..." />
          <OrderButton />
        </S.RoowFilter>

        <S.ListBooks>
          {books?.map((book) => <BookCard key={book.id} book={book} />)}
        </S.ListBooks>
      </div>
    </Container>
  );
}
