import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ReaccionRespuestaCom, ReaccionRespuestaComRelations, RespuestaComentario} from '../models';
import {RespuestaComentarioRepository} from './respuesta-comentario.repository';

export class ReaccionRespuestaComRepository extends DefaultCrudRepository<
  ReaccionRespuestaCom,
  typeof ReaccionRespuestaCom.prototype.reaccionRespuestaComId,
  ReaccionRespuestaComRelations
> {

  public readonly respuestaComentario: BelongsToAccessor<RespuestaComentario, typeof ReaccionRespuestaCom.prototype.reaccionRespuestaComId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('RespuestaComentarioRepository') protected respuestaComentarioRepositoryGetter: Getter<RespuestaComentarioRepository>,
  ) {
    super(ReaccionRespuestaCom, dataSource);
    this.respuestaComentario = this.createBelongsToAccessorFor('respuestaComentario', respuestaComentarioRepositoryGetter,);
    this.registerInclusionResolver('respuestaComentario', this.respuestaComentario.inclusionResolver);
  }
}
