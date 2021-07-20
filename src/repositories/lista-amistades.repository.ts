import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ListaAmistades, ListaAmistadesRelations} from '../models';

export class ListaAmistadesRepository extends DefaultCrudRepository<
  ListaAmistades,
  typeof ListaAmistades.prototype.listaAmistadesId,
  ListaAmistadesRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(ListaAmistades, dataSource);
  }
}
