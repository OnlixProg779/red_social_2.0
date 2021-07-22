import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Historia, ReaccionHistoria, ReaccionHistoriaRelations} from '../models';
import {HistoriaRepository} from './historia.repository';

export class ReaccionHistoriaRepository extends DefaultCrudRepository<
  ReaccionHistoria,
  typeof ReaccionHistoria.prototype.reaccionHistoriaId,
  ReaccionHistoriaRelations
> {
  public readonly historia: BelongsToAccessor<
    Historia,
    typeof ReaccionHistoria.prototype.reaccionHistoriaId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('HistoriaRepository')
    protected historiaRepositoryGetter: Getter<HistoriaRepository>,
  ) {
    super(ReaccionHistoria, dataSource);
    this.historia = this.createBelongsToAccessorFor(
      'historia',
      historiaRepositoryGetter,
    );
    this.registerInclusionResolver('historia', this.historia.inclusionResolver);
  }
}
