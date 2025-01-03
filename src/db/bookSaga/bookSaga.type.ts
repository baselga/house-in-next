import { sagaBook } from "./bookSaga.schema";

export type SagaBook = {
  id: string;
  name: string;
};

export type SagaBookInferSelectDb = typeof sagaBook.$inferSelect;
export type SagaBookInferInsertDb = typeof sagaBook.$inferInsert;
