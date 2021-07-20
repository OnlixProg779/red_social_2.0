import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {RespuestaEncuesta, RespuestaEncuestaRelations} from '../models';

export class RespuestaEncuestaRepository extends DefaultCrudRepository<
  RespuestaEncuesta,
  typeof RespuestaEncuesta.prototype.respuestaEncuestaId,
  RespuestaEncuestaRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(RespuestaEncuesta, dataSource);
  }
}
