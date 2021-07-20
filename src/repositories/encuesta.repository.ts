import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Encuesta, EncuestaRelations, Publicacion, RespuestaEncuesta} from '../models';
import {PublicacionRepository} from './publicacion.repository';
import {RespuestaEncuestaRepository} from './respuesta-encuesta.repository';

export class EncuestaRepository extends DefaultCrudRepository<
  Encuesta,
  typeof Encuesta.prototype.encuestaId,
  EncuestaRelations
> {

  public readonly publicacion: BelongsToAccessor<Publicacion, typeof Encuesta.prototype.encuestaId>;

  public readonly respuestaEncuestas: HasManyRepositoryFactory<RespuestaEncuesta, typeof Encuesta.prototype.encuestaId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('PublicacionRepository') protected publicacionRepositoryGetter: Getter<PublicacionRepository>, @repository.getter('RespuestaEncuestaRepository') protected respuestaEncuestaRepositoryGetter: Getter<RespuestaEncuestaRepository>,
  ) {
    super(Encuesta, dataSource);
    this.respuestaEncuestas = this.createHasManyRepositoryFactoryFor('respuestaEncuestas', respuestaEncuestaRepositoryGetter,);
    this.registerInclusionResolver('respuestaEncuestas', this.respuestaEncuestas.inclusionResolver);
    this.publicacion = this.createBelongsToAccessorFor('publicacion', publicacionRepositoryGetter,);
    this.registerInclusionResolver('publicacion', this.publicacion.inclusionResolver);
  }
}
