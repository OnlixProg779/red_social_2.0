import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {EtiquetaHistoria, EtiquetaHistoriaRelations} from '../models';

export class EtiquetaHistoriaRepository extends DefaultCrudRepository<
  EtiquetaHistoria,
  typeof EtiquetaHistoria.prototype.etiquetaHistoriaId,
  EtiquetaHistoriaRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(EtiquetaHistoria, dataSource);
  }
}
