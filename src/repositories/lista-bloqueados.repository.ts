import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ListaBloqueados, ListaBloqueadosRelations, Usuario, ListaBloqueadosUsuario} from '../models';
import {ListaBloqueadosUsuarioRepository} from './lista-bloqueados-usuario.repository';
import {UsuarioRepository} from './usuario.repository';

export class ListaBloqueadosRepository extends DefaultCrudRepository<
  ListaBloqueados,
  typeof ListaBloqueados.prototype.listaBloqueadosId,
  ListaBloqueadosRelations
> {

  public readonly usuarios: HasManyThroughRepositoryFactory<Usuario, typeof Usuario.prototype.usuarioId,
          ListaBloqueadosUsuario,
          typeof ListaBloqueados.prototype.listaBloqueadosId
        >;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('ListaBloqueadosUsuarioRepository') protected listaBloqueadosUsuarioRepositoryGetter: Getter<ListaBloqueadosUsuarioRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(ListaBloqueados, dataSource);
    this.usuarios = this.createHasManyThroughRepositoryFactoryFor('usuarios', usuarioRepositoryGetter, listaBloqueadosUsuarioRepositoryGetter,);
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
  }
}
