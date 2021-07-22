import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Notificacion, NotificacionRelations, Usuario} from '../models';
import {UsuarioRepository} from './usuario.repository';

export class NotificacionRepository extends DefaultCrudRepository<
  Notificacion,
  typeof Notificacion.prototype.notificacionId,
  NotificacionRelations
> {
  public readonly usuario: BelongsToAccessor<
    Usuario,
    typeof Notificacion.prototype.notificacionId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('UsuarioRepository')
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Notificacion, dataSource);
    this.usuario = this.createBelongsToAccessorFor(
      'usuario',
      usuarioRepositoryGetter,
    );
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
}
