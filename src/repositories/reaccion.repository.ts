import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Comentario, Reaccion, ReaccionRelations} from '../models';
import {ComentarioRepository} from './comentario.repository';

export class ReaccionRepository extends DefaultCrudRepository<
  Reaccion,
  typeof Reaccion.prototype.reaccionId,
  ReaccionRelations
> {
  public readonly comentario: BelongsToAccessor<
    Comentario,
    typeof Reaccion.prototype.reaccionId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('ComentarioRepository')
    protected comentarioRepositoryGetter: Getter<ComentarioRepository>,
  ) {
    super(Reaccion, dataSource);
    this.comentario = this.createBelongsToAccessorFor(
      'comentario',
      comentarioRepositoryGetter,
    );
    this.registerInclusionResolver(
      'comentario',
      this.comentario.inclusionResolver,
    );
  }
}
