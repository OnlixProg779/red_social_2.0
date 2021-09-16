import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Notificacion, NotificacionRelations} from '../models';

export class NotificacionRepository extends DefaultCrudRepository<
  Notificacion,
  typeof Notificacion.prototype.notificacionId,
  NotificacionRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(Notificacion, dataSource);
  }
}
