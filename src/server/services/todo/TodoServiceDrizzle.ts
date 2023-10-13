import {ServiceContainerCradle} from "@/server/services/serviceContainer";
import {TodoService} from "@/server/services/todo/TodoService";
import {todoSchema, TodosSchema} from "@/db/schema";
import {eq, InferSelectModel} from "drizzle-orm";
import {CrudServiceDrizzle} from "@/server/services/common/CrudServiceDrizzle";
import {CrudService} from "@/server/services/common/CrudService";

type Dependencies = Pick<ServiceContainerCradle, "sqliteDrizzle">;
type TodosEntity = typeof todoSchema
type Todos = InferSelectModel<TodosEntity>

export class TodoServiceDrizzle extends CrudServiceDrizzle<TodosEntity> implements TodoService<TodosEntity> {
  //private readonly db = sqliteDrizzle;

  /**
   * Dependencies will be injected
   * @param args
   */
  constructor(dependencies: Dependencies) {
    super(todoSchema)
  }
 }