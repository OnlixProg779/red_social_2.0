import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {
  EtiquetaRespuestaCom,
  EtiquetaRespuestaComRelations,
  RespuestaComentario,
} from '../models';
import {RespuestaComentarioRepository} from './respuesta-comentario.repository';

export class EtiquetaRespuestaComRepository extends DefaultCrudRepository<
  EtiquetaRespuestaCom,
  typeof EtiquetaRespuestaCom.prototype.etiquetaRespuestaComId,
  EtiquetaRespuestaComRelations
> {
  public readonly respuestaComentario: BelongsToAccessor<
    RespuestaComentario,
    typeof EtiquetaRespuestaCom.prototype.etiquetaRespuestaComId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('RespuestaComentarioRepository')
    protected respuestaComentarioRepositoryGetter: Getter<RespuestaComentarioRepository>,
  ) {
    super(EtiquetaRespuestaCom, dataSource);
    this.respuestaComentario = this.createBelongsToAccessorFor(
      'respuestaComentario',
      respuestaComentarioRepositoryGetter,
    );
    this.registerInclusionResolver(
      'respuestaComentario',
      this.respuestaComentario.inclusionResolver,
    );
  }
}
