import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ReaccionPublicacion, ReaccionPublicacionRelations, Publicacion} from '../models';
import {PublicacionRepository} from './publicacion.repository';

export class ReaccionPublicacionRepository extends DefaultCrudRepository<
  ReaccionPublicacion,
  typeof ReaccionPublicacion.prototype.reaccionPublicacionId,
  ReaccionPublicacionRelations
> {

  public readonly publicacion: BelongsToAccessor<Publicacion, typeof ReaccionPublicacion.prototype.reaccionPublicacionId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('PublicacionRepository') protected publicacionRepositoryGetter: Getter<PublicacionRepository>,
  ) {
    super(ReaccionPublicacion, dataSource);
    this.publicacion = this.createBelongsToAccessorFor('publicacion', publicacionRepositoryGetter,);
    this.registerInclusionResolver('publicacion', this.publicacion.inclusionResolver);
  }
}
