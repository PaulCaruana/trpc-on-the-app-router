import * as injection from "awilix";
import {asClass, asValue} from "awilix";
import {BetterSQLite3Database} from "drizzle-orm/better-sqlite3";
import {sqliteDrizzle} from "@/server/data/dbManager/sqliteDrizzle";
import {Todo, todoSchema} from "@/db/schema";
import {TodoService} from "@/server/services/todo/TodoService";
import {TodoServiceDrizzle} from "@/server/services/todo/TodoServiceDrizzle";
import {InferSelectModel} from "drizzle-orm";
import {CrudService} from "@/server/services/common/CrudService";
import {TodoServiceDrizzle2} from "@/server/services/todo/TodoServiceDrizzle2";
import {TodoService2} from "@/server/services/todo/TodoService2";

type TodosEntity = typeof todoSchema
type Todos = InferSelectModel<TodosEntity>

export type ServiceContainerCradle = {
  sqliteDrizzle:  BetterSQLite3Database<Record<string, never>>,
  todoService: TodoService2<Todo>,
};

const serviceContainer = injection.createContainer<ServiceContainerCradle>({
  injectionMode: injection.InjectionMode.PROXY,
});

const abc = asClass(TodoServiceDrizzle).singleton()

serviceContainer.register({
  sqliteDrizzle: asValue(sqliteDrizzle),
  todoService: asClass(TodoServiceDrizzle2).singleton(),
});

export { serviceContainer };
