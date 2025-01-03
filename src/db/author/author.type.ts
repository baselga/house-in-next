import { author } from "./author.schema";

export type Author = {
  id: string;
  name: string;
};

export type AuthorInferSelectDb = typeof author.$inferSelect;
export type AuthorInferInsertDb = typeof author.$inferInsert;
