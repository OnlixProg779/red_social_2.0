import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {UsuarioClaim, UsuarioClaimRelations, Usuario} from '../models';
import {UsuarioRepository} from './usuario.repository';

export class UsuarioClaimRepository extends DefaultCrudRepository<
  UsuarioClaim,
  typeof UsuarioClaim.prototype.usuarioClaimId,
  UsuarioClaimRelations
> {

  public readonly usuario: BelongsToAccessor<Usuario, typeof UsuarioClaim.prototype.usuarioClaimId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(UsuarioClaim, dataSource);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
}
