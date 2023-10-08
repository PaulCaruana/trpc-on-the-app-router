import {ServiceContainerCradle} from "@/server/services/serviceContainer";
import {TodoService} from "@/server/services/todo/TodoService";
import {todos} from "@/db/schema";
import {InferSelectModel} from "drizzle-orm";
import {CrudServiceDrizzle} from "@/server/services/common/CrudServiceDrizzle";

type Dependencies = Pick<ServiceContainerCradle, "sqliteDrizzle">;
type TodosEntity = typeof todos
type Todos = InferSelectModel<TodosEntity>

export class TodoServiceDrizzle extends CrudServiceDrizzle<TodosEntity> implements TodoService<Todos> {
  //private readonly db = sqliteDrizzle;

  /**
   * Dependencies will be injected
   * @param args
   */
  constructor(dependencies: Dependencies) {
    super(todos)
  }
}