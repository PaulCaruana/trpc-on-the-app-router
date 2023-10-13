import {ServiceContainerCradle} from "@/server/services/serviceContainer";
import {Todo, TodoSchema, todoSchema} from "@/db/schema";
import {TodoService2} from "@/server/services/todo/TodoService2";
import {CrudServiceDrizzle2} from "@/server/services/common/CrudServiceDrizzle2";

type Dependencies = Pick<ServiceContainerCradle, "sqliteDrizzle">;



export class TodoServiceDrizzle2 extends CrudServiceDrizzle2<TodoSchema, Todo> implements TodoService2<Todo> {

  /**
   * Dependencies will be injected
   * @param args
   */
  constructor(dependencies: Dependencies) {
    super(todoSchema)
  }

}