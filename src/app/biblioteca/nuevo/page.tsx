
import { getAllAuthors } from "@/db/author/author.useCase";
import Container from "@/ui/desingSystem/Container";
import { BoockForm } from "./components/BookForm";

export default async function NewBookPage() {
  const authors = await getAllAuthors();
  console.log({ authors });

  return (
    <Container>
      <BoockForm />
    </Container>
  );
}
