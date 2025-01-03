import { book } from "./book.schema";

export type Book = {
  id: string;
  title: string;
  urlImage: string | null;
  author?: {
    id: string;
    name: string;
  };
  sagaBook?: {
    id: string;
    name: string;
  };
};

export type BookInferSelectDb = typeof book.$inferSelect;
export type BookInferInsertDb = typeof book.$inferInsert;
