import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {EtiquetaRespuestaCom, EtiquetaRespuestaComRelations} from '../models';

export class EtiquetaRespuestaComRepository extends DefaultCrudRepository<
  EtiquetaRespuestaCom,
  typeof EtiquetaRespuestaCom.prototype.etiquetaRespuestaComId,
  EtiquetaRespuestaComRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(EtiquetaRespuestaCom, dataSource);
  }
}
