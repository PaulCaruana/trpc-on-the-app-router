export interface CrudService<T> {
  fetchAll(): Promise<T[]>;
  fetchById(id: number): Promise<T | undefined>;
  createEntity(entity: Omit<T, "id">): Promise<boolean>
}
