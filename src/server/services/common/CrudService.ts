export interface CrudService<T> {
  fetchAll(): Promise<T[]>;
  fetchById(id: number): Promise<T | undefined>;
}
