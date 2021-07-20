import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Notificacion} from '../models';
import {NotificacionRepository} from './notificacion.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.usuarioId,
  UsuarioRelations
> {

  public readonly notificaciones: HasManyRepositoryFactory<Notificacion, typeof Usuario.prototype.usuarioId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('NotificacionRepository') protected notificacionRepositoryGetter: Getter<NotificacionRepository>,
  ) {
    super(Usuario, dataSource);
    this.notificaciones = this.createHasManyRepositoryFactoryFor('notificaciones', notificacionRepositoryGetter,);
    this.registerInclusionResolver('notificaciones', this.notificaciones.inclusionResolver);
  }
}
