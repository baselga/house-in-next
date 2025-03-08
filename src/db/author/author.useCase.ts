import { db } from "..";
import { Author } from "./author.type";

export async function getAllAuthors():Promise<Author[]> {
  return await db.query.author.findMany();
}
