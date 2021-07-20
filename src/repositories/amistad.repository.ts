import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Amistad, AmistadRelations} from '../models';

export class AmistadRepository extends DefaultCrudRepository<
  Amistad,
  typeof Amistad.prototype.amistadId,
  AmistadRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(Amistad, dataSource);
  }
}
