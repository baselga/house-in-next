import { v4 as uuidv4 } from "uuid";
import { asc, eq } from "drizzle-orm";

import { db } from "..";
import { sagaBook } from "./bookSaga.schema";
import { type SagaBook } from "./bookSaga.type";
import { ErrorValidation } from "@/utils/ErrorValidation";

export async function getAllBookSagas(): Promise<SagaBook[]> {
  return await db.query.sagaBook.findMany({
    orderBy: [asc(sagaBook.name)],
  });
}

export async function getBookSagaByName(name: string): Promise<SagaBook | undefined> {
  return await db.query.sagaBook.findFirst({
    where: eq(sagaBook.name, name),
  });
}

export async function createBookSaga(data: Omit<SagaBook, "id">): Promise<SagaBook> {
  const dbSagaBook = {
    id: uuidv4(),
    name: data.name,
  };

  if (await getBookSagaByName(data.name)) {
      throw new ErrorValidation({
        issues: [{
          path: "name",
          message: "Ya existe una saga con ese título",
        }]      
      });
    }
  
    const [insertedBookSaga] = await db.insert(sagaBook).values(dbSagaBook).returning();
    return insertedBookSaga;
}