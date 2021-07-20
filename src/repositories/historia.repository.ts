import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Historia, HistoriaRelations} from '../models';

export class HistoriaRepository extends DefaultCrudRepository<
  Historia,
  typeof Historia.prototype.historiaId,
  HistoriaRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(Historia, dataSource);
  }
}
