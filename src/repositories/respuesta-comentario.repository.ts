import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {RespuestaComentario, RespuestaComentarioRelations} from '../models';

export class RespuestaComentarioRepository extends DefaultCrudRepository<
  RespuestaComentario,
  typeof RespuestaComentario.prototype.respuestaComentarioId,
  RespuestaComentarioRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(RespuestaComentario, dataSource);
  }
}
