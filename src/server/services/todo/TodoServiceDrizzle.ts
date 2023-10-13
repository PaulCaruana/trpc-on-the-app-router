import {ServiceContainerCradle} from "@/server/services/serviceContainer";
import {Todo, TodoSchema, todoSchema} from "@/db/schema";
import {TodoService} from "@/server/services/todo/TodoService";
import {CrudServiceDrizzle} from "@/server/services/common/CrudServiceDrizzle";

type Dependencies = Pick<ServiceContainerCradle, "sqliteDrizzle">;



export class TodoServiceDrizzle extends CrudServiceDrizzle<TodoSchema, Todo> implements TodoService<Todo> {

  /**
   * Dependencies will be injected
   * @param args
   */
  constructor(dependencies: Dependencies) {
    super(todoSchema)
  }

}