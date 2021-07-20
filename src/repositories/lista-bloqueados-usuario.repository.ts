import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {ListaBloqueadosUsuario, ListaBloqueadosUsuarioRelations} from '../models';

export class ListaBloqueadosUsuarioRepository extends DefaultCrudRepository<
  ListaBloqueadosUsuario,
  typeof ListaBloqueadosUsuario.prototype.listaBloqueadosUsuarioId,
  ListaBloqueadosUsuarioRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(ListaBloqueadosUsuario, dataSource);
  }
}
