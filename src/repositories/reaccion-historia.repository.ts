import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ReaccionHistoria, ReaccionHistoriaRelations} from '../models';

export class ReaccionHistoriaRepository extends DefaultCrudRepository<
  ReaccionHistoria,
  typeof ReaccionHistoria.prototype.reaccionHistoriaId,
  ReaccionHistoriaRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(ReaccionHistoria, dataSource);
  }
}
