import {CrudService2} from "@/server/services/common/CrudService2";

export interface TodoService2<Entity> extends CrudService2<Entity> {
  fetchAll(): Promise<Entity[]>;
}
