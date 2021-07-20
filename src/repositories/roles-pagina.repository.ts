import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {RolesPagina, RolesPaginaRelations} from '../models';

export class RolesPaginaRepository extends DefaultCrudRepository<
  RolesPagina,
  typeof RolesPagina.prototype.rolesPaginaId,
  RolesPaginaRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(RolesPagina, dataSource);
  }
}
