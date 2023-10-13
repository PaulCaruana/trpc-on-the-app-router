import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {InferInsertModel} from "drizzle-orm";

export const todos = sqliteTable("todos", {
  id: integer("id").primaryKey(),
  content: text("content"),
  done: integer("done"),
});

export type TodosSchema = typeof todos;
export type Todo = InferInsertModel<typeof todos>

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name"),
  email: text("email"),
});
