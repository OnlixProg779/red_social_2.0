import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {EtiquetaPublicacion, EtiquetaPublicacionRelations} from '../models';

export class EtiquetaPublicacionRepository extends DefaultCrudRepository<
  EtiquetaPublicacion,
  typeof EtiquetaPublicacion.prototype.etiquetaPublicacionId,
  EtiquetaPublicacionRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(EtiquetaPublicacion, dataSource);
  }
}
