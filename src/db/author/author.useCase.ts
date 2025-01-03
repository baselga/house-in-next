import { db } from "..";

export async function getAllAuthors() {
  return await db.query.author.findMany();
}
