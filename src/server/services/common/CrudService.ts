import {CrudDataAccess} from "@/server/data/crud/CrudDataAccess";
import {Id} from "@/server/data/entity/entityModel";

export interface CrudService {
  fetchById(id: number): Promise<any | undefined>;
}
