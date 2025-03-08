import Container from "@/ui/desingSystem/Container";
import * as S from "./styled";
import { Input } from "@/ui/desingSystem/Input";
import { DataList } from "@/ui/desingSystem/DataList";
import { getAllAuthors } from "@/db/author/author.useCase";

export default async function NewBookPage() {
  const authors = await getAllAuthors();
  console.log({authors})
  return (
    <Container>
      <form>
        <S.Crad>
          <h1>Crear nuevo libro</h1>
          <Input label="Titulo" name="title" />
          <Input label="Imagen" name="urlImage" />
          <DataList
            label="Autor"
            name="author"
            choices={authors?.map((author) => ({
              value: author.id,
              name: author.name,
            }))}
          />
        </S.Crad>
      </form>
    </Container>
  );
}
