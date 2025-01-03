import * as t from "drizzle-orm/sqlite-core";
import { author } from "../author/author.schema";
import { sagaBook } from "../bookSaga/bookSaga.schema";
import { relations } from "drizzle-orm";

export const book = t.sqliteTable(
  "book",
  {
    id: t.text("id", { length: 36 }).primaryKey(),
    authorId: t
      .text("author_id", { length: 36 })
      .notNull()
      .references(() => author.id),
    sagaBookId: t
      .text("saga_book_id", { length: 36 })
      .notNull()
      .references(() => sagaBook.id),
    title: t.text("title", { length: 255 }).unique().notNull(),
    urlImage: t.text("url_image"),
  },
  (table) => {
    return [
      t.index("idx_title").on(table.title),
      t.index("idx_author_id").on(table.authorId),
    ];
  },
);

export const bookRelations = relations(book, ({ one }) => ({
  author: one(author, {
    fields: [book.authorId],
    references: [author.id],
  }),
  sagaBook: one(sagaBook, {
    fields: [book.sagaBookId],
    references: [sagaBook.id],
  }),
}));
