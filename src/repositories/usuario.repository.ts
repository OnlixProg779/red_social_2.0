import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Notificacion, UsuarioClaim} from '../models';
import {NotificacionRepository} from './notificacion.repository';
import {UsuarioClaimRepository} from './usuario-claim.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.usuarioId,
  UsuarioRelations
> {

  public readonly notificaciones: HasManyRepositoryFactory<Notificacion, typeof Usuario.prototype.usuarioId>;

  public readonly usuarioClaims: HasManyRepositoryFactory<UsuarioClaim, typeof Usuario.prototype.usuarioId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('NotificacionRepository') protected notificacionRepositoryGetter: Getter<NotificacionRepository>, @repository.getter('UsuarioClaimRepository') protected usuarioClaimRepositoryGetter: Getter<UsuarioClaimRepository>,
  ) {
    super(Usuario, dataSource);
    this.usuarioClaims = this.createHasManyRepositoryFactoryFor('usuarioClaims', usuarioClaimRepositoryGetter,);
    this.registerInclusionResolver('usuarioClaims', this.usuarioClaims.inclusionResolver);
    this.notificaciones = this.createHasManyRepositoryFactoryFor('notificaciones', notificacionRepositoryGetter,);
    this.registerInclusionResolver('notificaciones', this.notificaciones.inclusionResolver);
  }
}
