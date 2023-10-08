import {CrudDataAccess} from "@/server/data/crud/CrudDataAccess";
import {Id} from "@/server/data/entity/entityModel";
import {CrudService} from "@/server/services/common/CrudService";
import {todos} from "@/db/schema";

export interface TodoService<T> extends CrudService {
}
