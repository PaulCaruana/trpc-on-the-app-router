import {eq} from "drizzle-orm";
import {sqliteDrizzle as db, sqliteDrizzle} from "@/server/data/dbManager/sqliteDrizzle";
import {SQLiteTableWithColumns} from "drizzle-orm/sqlite-core";

//type Dependencies = Pick<ServiceContainerCradle, "sqliteDrizzle">;

export class CrudServiceDrizzle<Schema extends SQLiteTableWithColumns<any>, Entity> {
  private readonly db = sqliteDrizzle;
  private readonly schema: SQLiteTableWithColumns<any>

   constructor(schema: SQLiteTableWithColumns<any>) {
    this.schema = schema
  }
  async fetchAll() {
    const values=  await this.db.select().from(this.schema).all()
    return values
  }
  async fetchById(id: number) {
    const entity = await this.db.select().from(this.schema).where(eq(this.schema.id, Number(id))).get()
    return entity;
  }
  async createEntity(entity: Omit<Entity, "id">) {
    await db.insert(this.schema).values(entity).run();
    return true;
  }



}
