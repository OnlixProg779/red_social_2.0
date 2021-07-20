import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ListaBloqueados, ListaBloqueadosRelations} from '../models';

export class ListaBloqueadosRepository extends DefaultCrudRepository<
  ListaBloqueados,
  typeof ListaBloqueados.prototype.listaBloqueadosId,
  ListaBloqueadosRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(ListaBloqueados, dataSource);
  }
}
