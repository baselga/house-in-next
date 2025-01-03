import { asc, desc, eq, like, or } from "drizzle-orm";
import { db } from "..";
import { author } from "../author/author.schema";
import { sagaBook } from "../bookSaga/bookSaga.schema";
import { selectBookWithRelationsDTO } from "./book.DTO";
import { book } from "./book.schema";

export async function getAllBooks() {
  return await db.query.book.findMany();
}

type Order = {
  dir: "asc" | "desc";
  field: "title";
};

export async function getAllBooksWithRelations({
  search,
  order,
}: {
  search?: string | number;
  order: Order;
}) {
  const orderFunction = order?.dir === "desc" ? desc : asc;

  const books = await db
    .select()
    .from(book)
    .innerJoin(author, eq(book.authorId, author.id))
    .leftJoin(sagaBook, eq(book.sagaBookId, sagaBook.id))
    .where(
      search
        ? or(
            like(book.title, `%${search}%`),
            like(author.name, `%${search}%`),
            like(sagaBook.name, `%${search}%`)
          )
        : undefined
    )
    .orderBy(orderFunction(book[order.field]));

  return books?.map((book) => selectBookWithRelationsDTO(book));
}
