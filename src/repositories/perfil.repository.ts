import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Perfil, PerfilRelations, MarketPlace, Publicacion} from '../models';
import {MarketPlaceRepository} from './market-place.repository';
import {PublicacionRepository} from './publicacion.repository';

export class PerfilRepository extends DefaultCrudRepository<
  Perfil,
  typeof Perfil.prototype.perfilId,
  PerfilRelations
> {

  public readonly marketPlaces: HasManyRepositoryFactory<MarketPlace, typeof Perfil.prototype.perfilId>;

  public readonly publicaciones: HasManyRepositoryFactory<Publicacion, typeof Perfil.prototype.perfilId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('MarketPlaceRepository') protected marketPlaceRepositoryGetter: Getter<MarketPlaceRepository>, @repository.getter('PublicacionRepository') protected publicacionRepositoryGetter: Getter<PublicacionRepository>,
  ) {
    super(Perfil, dataSource);
    this.publicaciones = this.createHasManyRepositoryFactoryFor('publicaciones', publicacionRepositoryGetter,);
    this.registerInclusionResolver('publicaciones', this.publicaciones.inclusionResolver);
    this.marketPlaces = this.createHasManyRepositoryFactoryFor('marketPlaces', marketPlaceRepositoryGetter,);
    this.registerInclusionResolver('marketPlaces', this.marketPlaces.inclusionResolver);
  }
}
