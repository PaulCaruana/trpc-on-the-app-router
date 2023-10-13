import * as injection from "awilix";
import {asClass, asValue} from "awilix";
import {BetterSQLite3Database} from "drizzle-orm/better-sqlite3";
import {sqliteDrizzle} from "@/server/data/dbManager/sqliteDrizzle";
import {Todo, todoSchema} from "@/db/schema";
import {InferSelectModel} from "drizzle-orm";
import {TodoServiceDrizzle} from "@/server/services/todo/TodoServiceDrizzle";
import {TodoService} from "@/server/services/todo/TodoService";

export type ServiceContainerCradle = {
  sqliteDrizzle:  BetterSQLite3Database<Record<string, never>>,
  todoService: TodoService<Todo>,
};

const serviceContainer = injection.createContainer<ServiceContainerCradle>({
  injectionMode: injection.InjectionMode.PROXY,
});


serviceContainer.register({
  sqliteDrizzle: asValue(sqliteDrizzle),
  todoService: asClass(TodoServiceDrizzle).singleton(),
});

export { serviceContainer };
