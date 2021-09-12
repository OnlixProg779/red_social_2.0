import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Publicacion, PublicacionRelations} from '../models';

export class PublicacionRepository extends DefaultCrudRepository<
  Publicacion,
  typeof Publicacion.prototype.publicacionId,
  PublicacionRelations
> {
  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
  ) {
    super(Publicacion, dataSource);
  }
}
