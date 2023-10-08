import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import {InferColumnsDataTypes, InferInsertModel, InferModel, InferSelectModel} from "drizzle-orm";

export const todos = sqliteTable("todos", {
  id: integer("id").primaryKey(),
  content: text("content"),
  done: integer("done"),
});

export type TodosSchema = typeof todos;
export type Todo = InferInsertModel<typeof todos>

//const a: Post = {id: 1, content: "p"}