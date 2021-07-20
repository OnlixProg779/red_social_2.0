import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Participante, ParticipanteRelations} from '../models';

export class ParticipanteRepository extends DefaultCrudRepository<
  Participante,
  typeof Participante.prototype.participanteId,
  ParticipanteRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(Participante, dataSource);
  }
}
