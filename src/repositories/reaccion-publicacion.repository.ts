import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {
  Publicacion,
  ReaccionPublicacion,
  ReaccionPublicacionRelations,
} from '../models';
import {PublicacionRepository} from './publicacion.repository';

export class ReaccionPublicacionRepository extends DefaultCrudRepository<
  ReaccionPublicacion,
  typeof ReaccionPublicacion.prototype.reaccionPublicacionId,
  ReaccionPublicacionRelations
> {
  public readonly publicacion: BelongsToAccessor<
    Publicacion,
    typeof ReaccionPublicacion.prototype.reaccionPublicacionId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('PublicacionRepository')
    protected publicacionRepositoryGetter: Getter<PublicacionRepository>,
  ) {
    super(ReaccionPublicacion, dataSource);
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
