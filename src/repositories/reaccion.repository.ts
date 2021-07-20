import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Reaccion, ReaccionRelations} from '../models';

export class ReaccionRepository extends DefaultCrudRepository<
  Reaccion,
  typeof Reaccion.prototype.reaccionId,
  ReaccionRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(Reaccion, dataSource);
  }
}
