import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import * as book from "./book/book.schema";
import * as author from "./author/author.schema";
import * as sagaBook from "./bookSaga/bookSaga.schema";

config({ path: ".env" }); // or .env.local

export const db = drizzle({
  connection: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
  schema: {
    ...author,
    ...book,
    ...sagaBook,
  },
});
