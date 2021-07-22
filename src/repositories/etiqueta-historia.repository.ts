import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {EtiquetaHistoria, EtiquetaHistoriaRelations, Historia} from '../models';
import {HistoriaRepository} from './historia.repository';

export class EtiquetaHistoriaRepository extends DefaultCrudRepository<
  EtiquetaHistoria,
  typeof EtiquetaHistoria.prototype.etiquetaHistoriaId,
  EtiquetaHistoriaRelations
> {
  public readonly historia: BelongsToAccessor<
    Historia,
    typeof EtiquetaHistoria.prototype.etiquetaHistoriaId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('HistoriaRepository')
    protected historiaRepositoryGetter: Getter<HistoriaRepository>,
  ) {
    super(EtiquetaHistoria, dataSource);
    this.historia = this.createBelongsToAccessorFor(
      'historia',
      historiaRepositoryGetter,
    );
    this.registerInclusionResolver('historia', this.historia.inclusionResolver);
  }
}
