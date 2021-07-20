import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ListaSeguidoresUsuario, ListaSeguidoresUsuarioRelations} from '../models';

export class ListaSeguidoresUsuarioRepository extends DefaultCrudRepository<
  ListaSeguidoresUsuario,
  typeof ListaSeguidoresUsuario.prototype.listaSeguidoresUsuarioId,
  ListaSeguidoresUsuarioRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(ListaSeguidoresUsuario, dataSource);
  }
}
