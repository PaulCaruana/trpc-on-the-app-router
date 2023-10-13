export interface CrudService {
  fetchById(id: number): Promise<any | undefined>;
}
