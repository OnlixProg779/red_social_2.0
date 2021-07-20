import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {EtiquetaComentario, EtiquetaComentarioRelations} from '../models';

export class EtiquetaComentarioRepository extends DefaultCrudRepository<
  EtiquetaComentario,
  typeof EtiquetaComentario.prototype.etiquetaComentarioId,
  EtiquetaComentarioRelations
> {
  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource,
  ) {
    super(EtiquetaComentario, dataSource);
  }
}
