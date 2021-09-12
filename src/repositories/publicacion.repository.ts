import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Publicacion, PublicacionRelations, Comentario} from '../models';
import {ComentarioRepository} from './comentario.repository';

export class PublicacionRepository extends DefaultCrudRepository<
  Publicacion,
  typeof Publicacion.prototype.publicacionId,
  PublicacionRelations
> {

  public readonly comentarios: HasManyRepositoryFactory<Comentario, typeof Publicacion.prototype.publicacionId>;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource, @repository.getter('ComentarioRepository') protected comentarioRepositoryGetter: Getter<ComentarioRepository>,
  ) {
    super(Publicacion, dataSource);
    this.comentarios = this.createHasManyRepositoryFactoryFor('comentarios', comentarioRepositoryGetter,);
    this.registerInclusionResolver('comentarios', this.comentarios.inclusionResolver);
  }
}
