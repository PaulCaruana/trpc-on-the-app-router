import {ServiceContainerCradle} from "@/server/services/serviceContainer";
import {CrudService} from "@/server/services/common/CrudService";
import {eq} from "drizzle-orm";
import {sqliteDrizzle as db, sqliteDrizzle} from "@/server/data/dbManager/sqliteDrizzle";
import {SQLiteTableWithColumns} from "drizzle-orm/sqlite-core";
import {Todo, todoSchema} from "@/db/schema";

//type Dependencies = Pick<ServiceContainerCradle, "sqliteDrizzle">;

export class CrudServiceDrizzle<T extends SQLiteTableWithColumns<any>> implements CrudService<T> {
  private readonly db = sqliteDrizzle;
  private readonly entities: SQLiteTableWithColumns<any>
  private readonly e: SQLiteTableWithColumns<any>

   constructor(entities: T ) {
    this.entities = entities
     this.e = entities
  }

  async fetchAll(): Promise<T[]> {
    const values=  await this.db.select().from(this.entities).all() as T[]
    return values
  }


  async fetchById(id: number): Promise<T | undefined> {
    const entity = await this.db.select().from(this.entities).where(eq(this.entities.id, Number(id))).get() as Promise<T | undefined>
    return entity;
  }

  async createEntity(entity: Omit<T, "id">) {
    await db.insert(this.entities).values(entity).run();
    return true;
  }

}
