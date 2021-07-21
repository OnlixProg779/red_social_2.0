import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Perfil, PerfilRelations, MarketPlace, Publicacion, Historia} from '../models';
import {MarketPlaceRepository} from './market-place.repository';
import {PublicacionRepository} from './publicacion.repository';
import {HistoriaRepository} from './historia.repository';

export class PerfilRepository extends DefaultCrudRepository<
  Perfil,
  typeof Perfil.prototype.perfilId,
  PerfilRelations
> {

  public readonly marketPlaces: HasManyRepositoryFactory<MarketPlace, typeof Perfil.prototype.perfilId>;

  public readonly publicaciones: HasManyRepositoryFactory<Publicacion, typeof Perfil.prototype.perfilId>;

  public readonly historias: HasManyRepositoryFactory<Historia, typeof Perfil.prototype.perfilId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('MarketPlaceRepository') protected marketPlaceRepositoryGetter: Getter<MarketPlaceRepository>, @repository.getter('PublicacionRepository') protected publicacionRepositoryGetter: Getter<PublicacionRepository>, @repository.getter('HistoriaRepository') protected historiaRepositoryGetter: Getter<HistoriaRepository>,
  ) {
    super(Perfil, dataSource);
    this.historias = this.createHasManyRepositoryFactoryFor('historias', historiaRepositoryGetter,);
    this.registerInclusionResolver('historias', this.historias.inclusionResolver);
    this.publicaciones = this.createHasManyRepositoryFactoryFor('publicaciones', publicacionRepositoryGetter,);
    this.registerInclusionResolver('publicaciones', this.publicaciones.inclusionResolver);
    this.marketPlaces = this.createHasManyRepositoryFactoryFor('marketPlaces', marketPlaceRepositoryGetter,);
    this.registerInclusionResolver('marketPlaces', this.marketPlaces.inclusionResolver);
  }
}
