import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Miembro, MiembroRelations} from '../models';

export class MiembroRepository extends DefaultCrudRepository<
  Miembro,
  typeof Miembro.prototype.miembroId,
  MiembroRelations
> {
  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
  ) {
    super(Miembro, dataSource);
  }
}
