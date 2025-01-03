import { AuthorInferSelectDb } from "../author/author.type";
import { SagaBookInferSelectDb } from "../bookSaga/bookSaga.type";
import { Book, BookInferSelectDb } from "./book.type";

export function bookWithRelationsDTO(
  book: BookInferSelectDb & {
    author?: AuthorInferSelectDb;
    sagaBook?: SagaBookInferSelectDb;
    aa: string
  },
): Book {
  return {
    id: book.id,
    title: book.title,
    urlImage: book.urlImage,
    author: book.author,
    sagaBook: book.sagaBook,
  };
}

export function selectBookWithRelationsDTO(
  dto: { book: BookInferSelectDb, author: AuthorInferSelectDb, saga_book: SagaBookInferSelectDb | null}
): Book {
  return {
    id: dto.book.id,
    title: dto.book.title,
    urlImage: dto.book.urlImage,
    author: dto.author,
    sagaBook: dto.saga_book || undefined,
  }
}