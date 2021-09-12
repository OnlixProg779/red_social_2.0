import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasManyThroughRepositoryFactory,
  repository, HasManyRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Perfil, PerfilRelations, RolesPagina, Usuario, Publicacion} from '../models';
import {RolesPaginaRepository} from './roles-pagina.repository';
import {UsuarioRepository} from './usuario.repository';
import {PublicacionRepository} from './publicacion.repository';

export class PerfilRepository extends DefaultCrudRepository<
  Perfil,
  typeof Perfil.prototype.perfilId,
  PerfilRelations
> {
  public readonly usuarios: HasManyThroughRepositoryFactory<
    Usuario,
    typeof Usuario.prototype.usuarioId,
    RolesPagina,
    typeof Perfil.prototype.perfilId
  >;

  public readonly publicaciones: HasManyRepositoryFactory<Publicacion, typeof Perfil.prototype.perfilId>;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('RolesPaginaRepository')
    protected rolesPaginaRepositoryGetter: Getter<RolesPaginaRepository>,
    @repository.getter('UsuarioRepository')
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('PublicacionRepository') protected publicacionRepositoryGetter: Getter<PublicacionRepository>,
  ) {
    super(Perfil, dataSource);
    this.publicaciones = this.createHasManyRepositoryFactoryFor('publicaciones', publicacionRepositoryGetter,);
    this.registerInclusionResolver('publicaciones', this.publicaciones.inclusionResolver);
    this.usuarios = this.createHasManyThroughRepositoryFactoryFor(
      'usuarios',
      usuarioRepositoryGetter,
      rolesPaginaRepositoryGetter,
    );
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
  }
}
