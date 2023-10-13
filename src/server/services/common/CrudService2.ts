export interface CrudService2<Entity> {
  fetchAll(): Promise<Entity[]>;
  fetchById(id: number): Promise<Entity | undefined>
  createEntity(entity: Omit<Entity, "id">): Promise<boolean>
}
