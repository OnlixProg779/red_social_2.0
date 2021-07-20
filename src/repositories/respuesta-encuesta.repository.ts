import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {RespuestaEncuesta, RespuestaEncuestaRelations, Encuesta} from '../models';
import {EncuestaRepository} from './encuesta.repository';

export class RespuestaEncuestaRepository extends DefaultCrudRepository<
  RespuestaEncuesta,
  typeof RespuestaEncuesta.prototype.respuestaEncuestaId,
  RespuestaEncuestaRelations
> {

  public readonly encuesta: BelongsToAccessor<Encuesta, typeof RespuestaEncuesta.prototype.respuestaEncuestaId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('EncuestaRepository') protected encuestaRepositoryGetter: Getter<EncuestaRepository>,
  ) {
    super(RespuestaEncuesta, dataSource);
    this.encuesta = this.createBelongsToAccessorFor('encuesta', encuestaRepositoryGetter,);
    this.registerInclusionResolver('encuesta', this.encuesta.inclusionResolver);
  }
}
