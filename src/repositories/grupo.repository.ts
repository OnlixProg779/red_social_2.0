import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Grupo, GrupoRelations, Usuario, Miembro} from '../models';
import {MiembroRepository} from './miembro.repository';
import {UsuarioRepository} from './usuario.repository';

export class GrupoRepository extends DefaultCrudRepository<
  Grupo,
  typeof Grupo.prototype.grupoId,
  GrupoRelations
> {

  public readonly usuarios: HasManyThroughRepositoryFactory<Usuario, typeof Usuario.prototype.usuarioId,
          Miembro,
          typeof Grupo.prototype.grupoId
        >;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('MiembroRepository') protected miembroRepositoryGetter: Getter<MiembroRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Grupo, dataSource);
    this.usuarios = this.createHasManyThroughRepositoryFactoryFor('usuarios', usuarioRepositoryGetter, miembroRepositoryGetter,);
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
  }
}
