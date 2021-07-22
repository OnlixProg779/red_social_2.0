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
  ComentarioRelations,
  EtiquetaComentario,
  Publicacion,
  Reaccion,
  RespuestaComentario,
} from '../models';
import {EtiquetaComentarioRepository} from './etiqueta-comentario.repository';
import {PublicacionRepository} from './publicacion.repository';
import {ReaccionRepository} from './reaccion.repository';
import {RespuestaComentarioRepository} from './respuesta-comentario.repository';

export class ComentarioRepository extends DefaultCrudRepository<
  Comentario,
  typeof Comentario.prototype.comentarioId,
  ComentarioRelations
> {
  public readonly publicacion: BelongsToAccessor<
    Publicacion,
    typeof Comentario.prototype.comentarioId
  >;

  public readonly etiquetaComentarios: HasManyRepositoryFactory<
    EtiquetaComentario,
    typeof Comentario.prototype.comentarioId
  >;

  public readonly reaccions: HasManyRepositoryFactory<
    Reaccion,
    typeof Comentario.prototype.comentarioId
  >;

  public readonly respuestaComentarios: HasManyRepositoryFactory<
    RespuestaComentario,
    typeof Comentario.prototype.comentarioId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('PublicacionRepository')
    protected publicacionRepositoryGetter: Getter<PublicacionRepository>,
    @repository.getter('EtiquetaComentarioRepository')
    protected etiquetaComentarioRepositoryGetter: Getter<EtiquetaComentarioRepository>,
    @repository.getter('ReaccionRepository')
    protected reaccionRepositoryGetter: Getter<ReaccionRepository>,
    @repository.getter('RespuestaComentarioRepository')
    protected respuestaComentarioRepositoryGetter: Getter<RespuestaComentarioRepository>,
  ) {
    super(Comentario, dataSource);
    this.respuestaComentarios = this.createHasManyRepositoryFactoryFor(
      'respuestaComentarios',
      respuestaComentarioRepositoryGetter,
    );
    this.registerInclusionResolver(
      'respuestaComentarios',
      this.respuestaComentarios.inclusionResolver,
    );
    this.reaccions = this.createHasManyRepositoryFactoryFor(
      'reaccions',
      reaccionRepositoryGetter,
    );
    this.registerInclusionResolver(
      'reaccions',
      this.reaccions.inclusionResolver,
    );
    this.etiquetaComentarios = this.createHasManyRepositoryFactoryFor(
      'etiquetaComentarios',
      etiquetaComentarioRepositoryGetter,
    );
    this.registerInclusionResolver(
      'etiquetaComentarios',
      this.etiquetaComentarios.inclusionResolver,
    );
    this.publicacion = this.createBelongsToAccessorFor(
      'publicacion',
      publicacionRepositoryGetter,
    );
    this.registerInclusionResolver(
      'publicacion',
      this.publicacion.inclusionResolver,
    );
  }
}
