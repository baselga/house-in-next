import * as t from "drizzle-orm/sqlite-core";

export const sagaBook = t.sqliteTable(
  "saga_book",
  {
    id: t.text("id", { length: 36 }).primaryKey(),
    name: t.text("name", { length: 255 }).notNull().unique(),
  },
  (table) => [t.index("idx_saga_book_name").on(table.name)],
);
