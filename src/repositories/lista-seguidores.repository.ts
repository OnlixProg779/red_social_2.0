import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ListaSeguidores, ListaSeguidoresRelations, Usuario, ListaSeguidoresUsuario} from '../models';
import {ListaSeguidoresUsuarioRepository} from './lista-seguidores-usuario.repository';
import {UsuarioRepository} from './usuario.repository';

export class ListaSeguidoresRepository extends DefaultCrudRepository<
  ListaSeguidores,
  typeof ListaSeguidores.prototype.listaSeguidoresId,
  ListaSeguidoresRelations
> {

  public readonly usuarios: HasManyThroughRepositoryFactory<Usuario, typeof Usuario.prototype.usuarioId,
          ListaSeguidoresUsuario,
          typeof ListaSeguidores.prototype.listaSeguidoresId
        >;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('ListaSeguidoresUsuarioRepository') protected listaSeguidoresUsuarioRepositoryGetter: Getter<ListaSeguidoresUsuarioRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(ListaSeguidores, dataSource);
    this.usuarios = this.createHasManyThroughRepositoryFactoryFor('usuarios', usuarioRepositoryGetter, listaSeguidoresUsuarioRepositoryGetter,);
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
  }
}
