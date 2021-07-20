import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ReaccionRespuestaCom, ReaccionRespuestaComRelations} from '../models';

export class ReaccionRespuestaComRepository extends DefaultCrudRepository<
  ReaccionRespuestaCom,
  typeof ReaccionRespuestaCom.prototype.reaccionRespuestaComId,
  ReaccionRespuestaComRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(ReaccionRespuestaCom, dataSource);
  }
}
