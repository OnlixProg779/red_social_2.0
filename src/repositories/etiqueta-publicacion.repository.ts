import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {EtiquetaPublicacion, EtiquetaPublicacionRelations, Publicacion} from '../models';
import {PublicacionRepository} from './publicacion.repository';

export class EtiquetaPublicacionRepository extends DefaultCrudRepository<
  EtiquetaPublicacion,
  typeof EtiquetaPublicacion.prototype.etiquetaPublicacionId,
  EtiquetaPublicacionRelations
> {

  public readonly publicacion: BelongsToAccessor<Publicacion, typeof EtiquetaPublicacion.prototype.etiquetaPublicacionId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('PublicacionRepository') protected publicacionRepositoryGetter: Getter<PublicacionRepository>,
  ) {
    super(EtiquetaPublicacion, dataSource);
    this.publicacion = this.createBelongsToAccessorFor('publicacion', publicacionRepositoryGetter,);
    this.registerInclusionResolver('publicacion', this.publicacion.inclusionResolver);
  }
}
