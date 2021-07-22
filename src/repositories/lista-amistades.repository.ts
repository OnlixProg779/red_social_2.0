import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {
  ListaAmistades,
  ListaAmistadesRelations,
  ListaAmistadesUsuario,
  Usuario,
} from '../models';
import {ListaAmistadesUsuarioRepository} from './lista-amistades-usuario.repository';
import {UsuarioRepository} from './usuario.repository';

export class ListaAmistadesRepository extends DefaultCrudRepository<
  ListaAmistades,
  typeof ListaAmistades.prototype.listaAmistadesId,
  ListaAmistadesRelations
> {
  public readonly usuarios: HasManyThroughRepositoryFactory<
    Usuario,
    typeof Usuario.prototype.usuarioId,
    ListaAmistadesUsuario,
    typeof ListaAmistades.prototype.listaAmistadesId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('ListaAmistadesUsuarioRepository')
    protected listaAmistadesUsuarioRepositoryGetter: Getter<ListaAmistadesUsuarioRepository>,
    @repository.getter('UsuarioRepository')
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(ListaAmistades, dataSource);
    this.usuarios = this.createHasManyThroughRepositoryFactoryFor(
      'usuarios',
      usuarioRepositoryGetter,
      listaAmistadesUsuarioRepositoryGetter,
    );
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
  }
}
