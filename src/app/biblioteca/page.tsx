import { getAllBooksWithRelations } from "@/db/book/book.useCase";
import Container from "@/ui/desingSystem/Container";
import BookCard from "./components/BookCard";
import OrderButton from "./components/OrderButton";
import SearchInput from "./components/SearchInput";

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
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center justify-end">
          <SearchInput
            inputProps={{
              placeholder: "Buscar...",
            }}
          />
          <OrderButton />
        </div>

        <section className="flex flex-col gap-4">
          {books?.map((book) => <BookCard key={book.id} book={book} />)}
        </section>
      </div>
    </Container>
  );
}
