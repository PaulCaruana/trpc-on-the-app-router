import {CrudService} from "@/server/services/common/CrudService";

export interface TodoService<Entity> extends CrudService<Entity> {
  fetchAll(): Promise<Entity[]>;
}
