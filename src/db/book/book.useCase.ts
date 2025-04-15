import { asc, desc, eq, like, or } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

import { ErrorValidation } from "@/utils/ErrorValidation";
import { db } from "..";
import { author } from "../author/author.schema";
import { sagaBook } from "../bookSaga/bookSaga.schema";
import { bookBaseDTO, selectBookWithRelationsDTO } from "./book.DTO";
import { book } from "./book.schema";
import type { BookInferInsertDb } from "./book.type";

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

export async function getBookSagaByTitle(name: string) {
  return await db.query.book.findFirst({
    where: eq(book.title, name),
  });
}

export async function createBook(data: Omit<BookInferInsertDb, "id">) {
  const dbBook = {
    id: uuidv4(),
    title: data.title,
    urlImage: data.urlImage,
    order: data.order,
    authorId: data.authorId,
    sagaBookId: data.sagaBookId === "" ? undefined : data.sagaBookId,
  };

  if (await getBookSagaByTitle(data.title)) {
    throw new ErrorValidation({
      issues: [
        {
          path: "title",
          message: "Ya existe un libro con este título",
        },
      ],
    });
  }

  const [insertedBook] = await db.insert(book).values(dbBook).returning();

  return bookBaseDTO(insertedBook);
}