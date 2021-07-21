import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Historia, HistoriaRelations, ReaccionHistoria, EtiquetaHistoria, Perfil} from '../models';
import {ReaccionHistoriaRepository} from './reaccion-historia.repository';
import {EtiquetaHistoriaRepository} from './etiqueta-historia.repository';
import {PerfilRepository} from './perfil.repository';

export class HistoriaRepository extends DefaultCrudRepository<
  Historia,
  typeof Historia.prototype.historiaId,
  HistoriaRelations
> {

  public readonly reaccionHistorias: HasManyRepositoryFactory<ReaccionHistoria, typeof Historia.prototype.historiaId>;

  public readonly etiquetaHistorias: HasManyRepositoryFactory<EtiquetaHistoria, typeof Historia.prototype.historiaId>;

  public readonly perfil: BelongsToAccessor<Perfil, typeof Historia.prototype.historiaId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('ReaccionHistoriaRepository') protected reaccionHistoriaRepositoryGetter: Getter<ReaccionHistoriaRepository>, @repository.getter('EtiquetaHistoriaRepository') protected etiquetaHistoriaRepositoryGetter: Getter<EtiquetaHistoriaRepository>, @repository.getter('PerfilRepository') protected perfilRepositoryGetter: Getter<PerfilRepository>,
  ) {
    super(Historia, dataSource);
    this.perfil = this.createBelongsToAccessorFor('perfil', perfilRepositoryGetter,);
    this.registerInclusionResolver('perfil', this.perfil.inclusionResolver);
    this.etiquetaHistorias = this.createHasManyRepositoryFactoryFor('etiquetaHistorias', etiquetaHistoriaRepositoryGetter,);
    this.registerInclusionResolver('etiquetaHistorias', this.etiquetaHistorias.inclusionResolver);
    this.reaccionHistorias = this.createHasManyRepositoryFactoryFor('reaccionHistorias', reaccionHistoriaRepositoryGetter,);
    this.registerInclusionResolver('reaccionHistorias', this.reaccionHistorias.inclusionResolver);
  }
}
