import {ServiceContainerCradle} from "@/server/services/serviceContainer";
import {CrudService} from "@/server/services/common/CrudService";
import {eq} from "drizzle-orm";
import {sqliteDrizzle} from "@/server/data/dbManager/sqliteDrizzle";
import {SQLiteTableWithColumns} from "drizzle-orm/sqlite-core";

//type Dependencies = Pick<ServiceContainerCradle, "sqliteDrizzle">;

export class CrudServiceDrizzle<E extends SQLiteTableWithColumns<any>> implements CrudService {
  private readonly db = sqliteDrizzle;
  private readonly entities: E

   constructor(entities: E ) {
    this.entities = entities
  }

  async fetchById(id: number) {
    const entity = await this.db.select().from(this.entities).where(eq(this.entities.id, Number(id))).get();
    return entity;
  }
}
