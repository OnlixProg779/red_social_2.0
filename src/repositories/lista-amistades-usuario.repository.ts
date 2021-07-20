import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ListaAmistadesUsuario, ListaAmistadesUsuarioRelations} from '../models';

export class ListaAmistadesUsuarioRepository extends DefaultCrudRepository<
  ListaAmistadesUsuario,
  typeof ListaAmistadesUsuario.prototype.listaAmistadesUsuarioId,
  ListaAmistadesUsuarioRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(ListaAmistadesUsuario, dataSource);
  }
}
