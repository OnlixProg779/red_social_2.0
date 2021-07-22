import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  HasOneRepositoryFactory,
  repository,
} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {
  Comentario,
  Encuesta,
  EtiquetaPublicacion,
  Perfil,
  Publicacion,
  PublicacionRelations,
  ReaccionPublicacion,
} from '../models';
import {ComentarioRepository} from './comentario.repository';
import {EncuestaRepository} from './encuesta.repository';
import {EtiquetaPublicacionRepository} from './etiqueta-publicacion.repository';
import {PerfilRepository} from './perfil.repository';
import {ReaccionPublicacionRepository} from './reaccion-publicacion.repository';

export class PublicacionRepository extends DefaultCrudRepository<
  Publicacion,
  typeof Publicacion.prototype.publicacionId,
  PublicacionRelations
> {
  public readonly perfil: BelongsToAccessor<
    Perfil,
    typeof Publicacion.prototype.publicacionId
  >;

  public readonly reaccionPublicacions: HasManyRepositoryFactory<
    ReaccionPublicacion,
    typeof Publicacion.prototype.publicacionId
  >;

  public readonly etiquetasDePublicacion: HasManyRepositoryFactory<
    EtiquetaPublicacion,
    typeof Publicacion.prototype.publicacionId
  >;

  public readonly encuesta: HasOneRepositoryFactory<
    Encuesta,
    typeof Publicacion.prototype.publicacionId
  >;

  public readonly comentarios: HasManyRepositoryFactory<
    Comentario,
    typeof Publicacion.prototype.publicacionId
  >;

  constructor(
    @inject('datasources.RedSocialContext')
    dataSource: RedSocialContextDataSource,
    @repository.getter('PerfilRepository')
    protected perfilRepositoryGetter: Getter<PerfilRepository>,
    @repository.getter('ReaccionPublicacionRepository')
    protected reaccionPublicacionRepositoryGetter: Getter<ReaccionPublicacionRepository>,
    @repository.getter('EtiquetaPublicacionRepository')
    protected etiquetaPublicacionRepositoryGetter: Getter<EtiquetaPublicacionRepository>,
    @repository.getter('EncuestaRepository')
    protected encuestaRepositoryGetter: Getter<EncuestaRepository>,
    @repository.getter('ComentarioRepository')
    protected comentarioRepositoryGetter: Getter<ComentarioRepository>,
  ) {
    super(Publicacion, dataSource);
    this.comentarios = this.createHasManyRepositoryFactoryFor(
      'comentarios',
      comentarioRepositoryGetter,
    );
    this.registerInclusionResolver(
      'comentarios',
      this.comentarios.inclusionResolver,
    );
    this.encuesta = this.createHasOneRepositoryFactoryFor(
      'encuesta',
      encuestaRepositoryGetter,
    );
    this.registerInclusionResolver('encuesta', this.encuesta.inclusionResolver);
    this.etiquetasDePublicacion = this.createHasManyRepositoryFactoryFor(
      'etiquetasDePublicacion',
      etiquetaPublicacionRepositoryGetter,
    );
    this.registerInclusionResolver(
      'etiquetasDePublicacion',
      this.etiquetasDePublicacion.inclusionResolver,
    );
    this.reaccionPublicacions = this.createHasManyRepositoryFactoryFor(
      'reaccionPublicacions',
      reaccionPublicacionRepositoryGetter,
    );
    this.registerInclusionResolver(
      'reaccionPublicacions',
      this.reaccionPublicacions.inclusionResolver,
    );
    this.perfil = this.createBelongsToAccessorFor(
      'perfil',
      perfilRepositoryGetter,
    );
    this.registerInclusionResolver('perfil', this.perfil.inclusionResolver);
  }
}
