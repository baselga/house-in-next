import * as t from "drizzle-orm/sqlite-core";

export const author = t.sqliteTable(
  "author",
  {
    id: t.text("id", { length: 36 }).primaryKey(),
    name: t.text("name", { length: 255 }).notNull(),
  },
  (table) => [t.index("idx_author_name").on(table.name)],
);
