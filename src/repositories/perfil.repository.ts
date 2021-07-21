import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Perfil, PerfilRelations, MarketPlace, Publicacion, Historia, Usuario, RolesPagina} from '../models';
import {MarketPlaceRepository} from './market-place.repository';
import {PublicacionRepository} from './publicacion.repository';
import {HistoriaRepository} from './historia.repository';
import {RolesPaginaRepository} from './roles-pagina.repository';
import {UsuarioRepository} from './usuario.repository';

export class PerfilRepository extends DefaultCrudRepository<
  Perfil,
  typeof Perfil.prototype.perfilId,
  PerfilRelations
> {

  public readonly marketPlaces: HasManyRepositoryFactory<MarketPlace, typeof Perfil.prototype.perfilId>;

  public readonly publicaciones: HasManyRepositoryFactory<Publicacion, typeof Perfil.prototype.perfilId>;

  public readonly historias: HasManyRepositoryFactory<Historia, typeof Perfil.prototype.perfilId>;

  public readonly usuarios: HasManyThroughRepositoryFactory<Usuario, typeof Usuario.prototype.usuarioId,
          RolesPagina,
          typeof Perfil.prototype.perfilId
        >;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('MarketPlaceRepository') protected marketPlaceRepositoryGetter: Getter<MarketPlaceRepository>, @repository.getter('PublicacionRepository') protected publicacionRepositoryGetter: Getter<PublicacionRepository>, @repository.getter('HistoriaRepository') protected historiaRepositoryGetter: Getter<HistoriaRepository>, @repository.getter('RolesPaginaRepository') protected rolesPaginaRepositoryGetter: Getter<RolesPaginaRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Perfil, dataSource);
    this.usuarios = this.createHasManyThroughRepositoryFactoryFor('usuarios', usuarioRepositoryGetter, rolesPaginaRepositoryGetter,);
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
    this.historias = this.createHasManyRepositoryFactoryFor('historias', historiaRepositoryGetter,);
    this.registerInclusionResolver('historias', this.historias.inclusionResolver);
    this.publicaciones = this.createHasManyRepositoryFactoryFor('publicaciones', publicacionRepositoryGetter,);
    this.registerInclusionResolver('publicaciones', this.publicaciones.inclusionResolver);
    this.marketPlaces = this.createHasManyRepositoryFactoryFor('marketPlaces', marketPlaceRepositoryGetter,);
    this.registerInclusionResolver('marketPlaces', this.marketPlaces.inclusionResolver);
  }
}
