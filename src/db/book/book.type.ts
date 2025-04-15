import type { Author } from "../author/author.type";
import type { SagaBook } from "../bookSaga/bookSaga.type";
import { book } from "./book.schema";

export type BookBase = {
  id: string;
  title: string;
  urlImage: string | null;
  order: number | null;
  authorId?: string;
  sagaBookId?: string;
}

export type Book = Omit<BookBase, "author" | "sagaBook"> & {
  author?: Author;
  sagaBook?: SagaBook;
};

export type BookInferSelectDb = typeof book.$inferSelect;
export type BookInferInsertDb = typeof book.$inferInsert;
