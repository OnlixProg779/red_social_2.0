import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Encuesta, EncuestaRelations} from '../models';

export class EncuestaRepository extends DefaultCrudRepository<
  Encuesta,
  typeof Encuesta.prototype.encuestaId,
  EncuestaRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(Encuesta, dataSource);
  }
}
