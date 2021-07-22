import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {
  EtiquetaHistoria,
  Historia,
  HistoriaRelations,
  Perfil,
  ReaccionHistoria,
} from '../models';
import {EtiquetaHistoriaRepository} from './etiqueta-historia.repository';
import {PerfilRepository} from './perfil.repository';
import {ReaccionHistoriaRepository} from './reaccion-historia.repository';

export class HistoriaRepository extends DefaultCrudRepository<
  Historia,
  typeof Historia.prototype.historiaId,
  HistoriaRelations
> {
  public readonly reaccionHistorias: HasManyRepositoryFactory<
    ReaccionHistoria,
    typeof Historia.prototype.historiaId
  >;

  public readonly etiquetaHistorias: HasManyRepositoryFactory<
    EtiquetaHistoria,
    typeof Historia.prototype.historiaId
  >;

  public readonly perfil: BelongsToAccessor<
    Perfil,
    typeof Historia.prototype.historiaId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('ReaccionHistoriaRepository')
    protected reaccionHistoriaRepositoryGetter: Getter<ReaccionHistoriaRepository>,
    @repository.getter('EtiquetaHistoriaRepository')
    protected etiquetaHistoriaRepositoryGetter: Getter<EtiquetaHistoriaRepository>,
    @repository.getter('PerfilRepository')
    protected perfilRepositoryGetter: Getter<PerfilRepository>,
  ) {
    super(Historia, dataSource);
    this.perfil = this.createBelongsToAccessorFor(
      'perfil',
      perfilRepositoryGetter,
    );
    this.registerInclusionResolver('perfil', this.perfil.inclusionResolver);
    this.etiquetaHistorias = this.createHasManyRepositoryFactoryFor(
      'etiquetaHistorias',
      etiquetaHistoriaRepositoryGetter,
    );
    this.registerInclusionResolver(
      'etiquetaHistorias',
      this.etiquetaHistorias.inclusionResolver,
    );
    this.reaccionHistorias = this.createHasManyRepositoryFactoryFor(
      'reaccionHistorias',
      reaccionHistoriaRepositoryGetter,
    );
    this.registerInclusionResolver(
      'reaccionHistorias',
      this.reaccionHistorias.inclusionResolver,
    );
  }
}
