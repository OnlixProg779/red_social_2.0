import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Evento, EventoRelations} from '../models';

export class EventoRepository extends DefaultCrudRepository<
  Evento,
  typeof Evento.prototype.eventoId,
  EventoRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(Evento, dataSource);
  }
}
