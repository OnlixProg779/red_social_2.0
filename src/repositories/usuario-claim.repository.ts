import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {UsuarioClaim, UsuarioClaimRelations} from '../models';

export class UsuarioClaimRepository extends DefaultCrudRepository<
  UsuarioClaim,
  typeof UsuarioClaim.prototype.usuarioClaimId,
  UsuarioClaimRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(UsuarioClaim, dataSource);
  }
}
