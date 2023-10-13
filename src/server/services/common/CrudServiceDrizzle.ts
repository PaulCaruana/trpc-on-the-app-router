import {ServiceContainerCradle} from "@/server/services/serviceContainer";
import {CrudService} from "@/server/services/common/CrudService";
import {eq} from "drizzle-orm";
import {sqliteDrizzle as db, sqliteDrizzle} from "@/server/data/dbManager/sqliteDrizzle";
import {SQLiteTableWithColumns} from "drizzle-orm/sqlite-core";
import {Todo, todos} from "@/db/schema";

//type Dependencies = Pick<ServiceContainerCradle, "sqliteDrizzle">;

export class CrudServiceDrizzle<E extends SQLiteTableWithColumns<any>>  {
  private readonly db = sqliteDrizzle;
  private readonly entities: SQLiteTableWithColumns<any>
  private readonly e: SQLiteTableWithColumns<any>

   constructor(entities: E ) {
    this.entities = entities
     this.e = entities
  }

  async fetchAll() {
    const values=  await this.db.select().from(this.entities).all();
    return values
  }

  async fetchById(id: number) {
    const entity = await this.db.select().from(this.entities).where(eq(this.entities.id, Number(id))).get();
    return entity;
  }

  async createEntity(entity: Omit<E, "id">) {
    await db.insert(this.entities).values(entity).run();
    return true;
  }
}
