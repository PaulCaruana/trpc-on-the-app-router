import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {InferInsertModel} from "drizzle-orm";

export const todoSchema = sqliteTable("todos", {
  id: integer("id").primaryKey(),
  content: text("content"),
  done: integer("done"),
});

export type TodoSchema = typeof todoSchema;
export type TodoEntity = typeof todoSchema;

export type Todo = InferInsertModel<typeof todoSchema>

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name"),
  email: text("email"),
});
