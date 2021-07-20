import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {MarketPlace, MarketPlaceRelations, Perfil} from '../models';
import {PerfilRepository} from './perfil.repository';

export class MarketPlaceRepository extends DefaultCrudRepository<
  MarketPlace,
  typeof MarketPlace.prototype.marketPlaceId,
  MarketPlaceRelations
> {

  public readonly perfil: BelongsToAccessor<Perfil, typeof MarketPlace.prototype.marketPlaceId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('PerfilRepository') protected perfilRepositoryGetter: Getter<PerfilRepository>,
  ) {
    super(MarketPlace, dataSource);
    this.perfil = this.createBelongsToAccessorFor('perfil', perfilRepositoryGetter,);
    this.registerInclusionResolver('perfil', this.perfil.inclusionResolver);
  }
}
