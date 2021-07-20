import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ListaSeguidores, ListaSeguidoresRelations} from '../models';

export class ListaSeguidoresRepository extends DefaultCrudRepository<
  ListaSeguidores,
  typeof ListaSeguidores.prototype.listaSeguidoresId,
  ListaSeguidoresRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(ListaSeguidores, dataSource);
  }
}
