
import { getAllAuthors } from "@/db/author/author.useCase";
import Container from "@/ui/desingSystem/Container";
import { BoockForm } from "./components/BookForm";

export default async function NewBookPage() {
  const authors = await getAllAuthors();

  return (
    <Container>
      <BoockForm authors={authors} />
    </Container>
  );
}
