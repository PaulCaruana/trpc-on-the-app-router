import * as injection from "awilix";
import {BetterSQLite3Database} from "drizzle-orm/better-sqlite3";
import {sqliteDrizzle} from "@/server/data/dbManager/sqliteDrizzle";
import {todos, TodosSchema} from "@/db/schema";
import {TodoService} from "@/server/services/todo/TodoService";
import {TodoServiceDrizzle} from "@/server/services/todo/TodoServiceDrizzle";
import {InferSelectModel} from "drizzle-orm";

type TodosEntity = typeof todos
type Todos = InferSelectModel<TodosEntity>

export type ServiceContainerCradle = {
  sqliteDrizzle:  BetterSQLite3Database<Record<string, never>>,
  todoService: TodoService<Todos>,
};

const serviceContainer = injection.createContainer<ServiceContainerCradle>({
  injectionMode: injection.InjectionMode.PROXY,
});

serviceContainer.register({
  sqliteDrizzle: injection.asValue(sqliteDrizzle),
  todoService: injection.asClass(TodoServiceDrizzle).singleton(),
});

export { serviceContainer };
