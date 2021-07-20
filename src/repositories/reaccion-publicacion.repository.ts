import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ReaccionPublicacion, ReaccionPublicacionRelations} from '../models';

export class ReaccionPublicacionRepository extends DefaultCrudRepository<
  ReaccionPublicacion,
  typeof ReaccionPublicacion.prototype.reaccionPublicacionId,
  ReaccionPublicacionRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(ReaccionPublicacion, dataSource);
  }
}
