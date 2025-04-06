import { v4 as uuidv4 } from "uuid";

import { db } from "..";
import { Author } from "./author.type";
import { author } from "./author.schema";
import { asc, eq } from "drizzle-orm";
import { ErrorValidation } from "@/utils/ErrorValidation";

export async function getAllAuthors(): Promise<Author[]> {
  return await db.query.author.findMany({
    orderBy: [asc(author.name)],
  });
}

export async function getAuthorByName(
  name: string
): Promise<Author | undefined> {
  return await db.query.author.findFirst({
    where: eq(author.name, name),
  });
}

export async function createAuthor(data: Omit<Author, "id">): Promise<Author> {
  const dbAuthr = {
    id: uuidv4(),
    name: data.name,
  };

  if (await getAuthorByName(data.name)) {
    throw new ErrorValidation({
      issues: [{
        path: "name",
        message: "Ya existe un autor con este nombre",
      }]      
    });
  }

  const [insertedAuthor] = await db.insert(author).values(dbAuthr).returning();
  return insertedAuthor;
}
