import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {
  Comentario,
  EtiquetaRespuestaCom,
  ReaccionRespuestaCom,
  RespuestaComentario,
  RespuestaComentarioRelations,
} from '../models';
import {ComentarioRepository} from './comentario.repository';
import {EtiquetaRespuestaComRepository} from './etiqueta-respuesta-com.repository';
import {ReaccionRespuestaComRepository} from './reaccion-respuesta-com.repository';

export class RespuestaComentarioRepository extends DefaultCrudRepository<
  RespuestaComentario,
  typeof RespuestaComentario.prototype.respuestaComentarioId,
  RespuestaComentarioRelations
> {
  public readonly comentario: BelongsToAccessor<
    Comentario,
    typeof RespuestaComentario.prototype.respuestaComentarioId
  >;

  public readonly reaccionRespuestaComs: HasManyRepositoryFactory<
    ReaccionRespuestaCom,
    typeof RespuestaComentario.prototype.respuestaComentarioId
  >;

  public readonly etiquetaRespuestaComs: HasManyRepositoryFactory<
    EtiquetaRespuestaCom,
    typeof RespuestaComentario.prototype.respuestaComentarioId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('ComentarioRepository')
    protected comentarioRepositoryGetter: Getter<ComentarioRepository>,
    @repository.getter('ReaccionRespuestaComRepository')
    protected reaccionRespuestaComRepositoryGetter: Getter<ReaccionRespuestaComRepository>,
    @repository.getter('EtiquetaRespuestaComRepository')
    protected etiquetaRespuestaComRepositoryGetter: Getter<EtiquetaRespuestaComRepository>,
  ) {
    super(RespuestaComentario, dataSource);
    this.etiquetaRespuestaComs = this.createHasManyRepositoryFactoryFor(
      'etiquetaRespuestaComs',
      etiquetaRespuestaComRepositoryGetter,
    );
    this.registerInclusionResolver(
      'etiquetaRespuestaComs',
      this.etiquetaRespuestaComs.inclusionResolver,
    );
    this.reaccionRespuestaComs = this.createHasManyRepositoryFactoryFor(
      'reaccionRespuestaComs',
      reaccionRespuestaComRepositoryGetter,
    );
    this.registerInclusionResolver(
      'reaccionRespuestaComs',
      this.reaccionRespuestaComs.inclusionResolver,
    );
    this.comentario = this.createBelongsToAccessorFor(
      'comentario',
      comentarioRepositoryGetter,
    );
    this.registerInclusionResolver(
      'comentario',
      this.comentario.inclusionResolver,
    );
  }
}