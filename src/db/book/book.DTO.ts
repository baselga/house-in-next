import { AuthorInferSelectDb } from "../author/author.type";
import { SagaBookInferSelectDb } from "../bookSaga/bookSaga.type";
import { Book, BookInferSelectDb, type BookBase } from "./book.type";

export function bookWithRelationsDTO(
  book: BookInferSelectDb & {
    author?: AuthorInferSelectDb;
    sagaBook?: SagaBookInferSelectDb;
  },
): Book {
  return {
    id: book.id,
    title: book.title,
    urlImage: book.urlImage,
    author: book.author,
    sagaBook: book.sagaBook,
    order: book.order,
  };
}

export function selectBookWithRelationsDTO(
  dto: { book: BookInferSelectDb, author: AuthorInferSelectDb, saga_book: SagaBookInferSelectDb | null}
): Book {
  return {
    id: dto.book.id,
    title: dto.book.title,
    urlImage: dto.book.urlImage,
    order: dto.book.order,
    author: dto.author,
    sagaBook: dto.saga_book || undefined,
  }
}

export function bookBaseDTO(
  dto: BookInferSelectDb,
): BookBase {
  return {
    id: dto.id,
    title: dto.title,
    urlImage: dto.urlImage,
    authorId: dto.authorId,
    sagaBookId: dto.sagaBookId ?? undefined,
    order: dto.order,
  };
}