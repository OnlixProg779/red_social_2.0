import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {EtiquetaComentario, EtiquetaComentarioRelations, Comentario} from '../models';
import {ComentarioRepository} from './comentario.repository';

export class EtiquetaComentarioRepository extends DefaultCrudRepository<
  EtiquetaComentario,
  typeof EtiquetaComentario.prototype.etiquetaComentarioId,
  EtiquetaComentarioRelations
> {

  public readonly comentario: BelongsToAccessor<Comentario, typeof EtiquetaComentario.prototype.etiquetaComentarioId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('ComentarioRepository') protected comentarioRepositoryGetter: Getter<ComentarioRepository>,
  ) {
    super(EtiquetaComentario, dataSource);
    this.comentario = this.createBelongsToAccessorFor('comentario', comentarioRepositoryGetter,);
    this.registerInclusionResolver('comentario', this.comentario.inclusionResolver);
  }
}
