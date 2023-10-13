export interface CrudService<Entity> {
  fetchAll(): Promise<Entity[]>;
  fetchById(id: number): Promise<Entity | undefined>
  createEntity(entity: Omit<Entity, "id">): Promise<boolean>
  updateEntityById(id:number, payload: Partial<Entity>): Promise<boolean>
}
