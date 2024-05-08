import { Nullable, Optional } from '@toxictoast/azkaban-base-types';

export interface Repository<Domain> {
  save(data: Domain): Promise<Domain>;
  findList(
    limit?: Optional<number>,
    offset?: Optional<number>,
  ): Promise<Array<Domain>>;
  findById(id: string): Promise<Nullable<Domain>>;
  delete(id: string): Promise<Domain>;
}
