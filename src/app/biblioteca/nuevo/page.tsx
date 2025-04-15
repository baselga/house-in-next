import { getAllAuthors } from "@/db/author/author.useCase";
import Container from "@/ui/desingSystem/Container";
import { BoockForm } from "./components/BookForm";
import { getAllBookSagas } from "@/db/bookSaga/bookSaga.useCase";

export default async function NewBookPage() {
  const authors = await getAllAuthors();
  const bookSagas = await getAllBookSagas();

  return (
    <Container>
      <BoockForm authors={authors} bookSagas={bookSagas} />
    </Container>
  );
}
