import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Publicacion, PublicacionRelations, Perfil, ReaccionPublicacion, EtiquetaPublicacion, Encuesta, Comentario} from '../models';
import {PerfilRepository} from './perfil.repository';
import {ReaccionPublicacionRepository} from './reaccion-publicacion.repository';
import {EtiquetaPublicacionRepository} from './etiqueta-publicacion.repository';
import {EncuestaRepository} from './encuesta.repository';
import {ComentarioRepository} from './comentario.repository';

export class PublicacionRepository extends DefaultCrudRepository<
  Publicacion,
  typeof Publicacion.prototype.publicacionId,
  PublicacionRelations
> {

  public readonly perfil: BelongsToAccessor<Perfil, typeof Publicacion.prototype.publicacionId>;

  public readonly reaccionPublicacions: HasManyRepositoryFactory<ReaccionPublicacion, typeof Publicacion.prototype.publicacionId>;

  public readonly etiquetasDePublicacion: HasManyRepositoryFactory<EtiquetaPublicacion, typeof Publicacion.prototype.publicacionId>;

  public readonly encuesta: HasOneRepositoryFactory<Encuesta, typeof Publicacion.prototype.publicacionId>;

  public readonly comentarios: HasManyRepositoryFactory<Comentario, typeof Publicacion.prototype.publicacionId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('PerfilRepository') protected perfilRepositoryGetter: Getter<PerfilRepository>, @repository.getter('ReaccionPublicacionRepository') protected reaccionPublicacionRepositoryGetter: Getter<ReaccionPublicacionRepository>, @repository.getter('EtiquetaPublicacionRepository') protected etiquetaPublicacionRepositoryGetter: Getter<EtiquetaPublicacionRepository>, @repository.getter('EncuestaRepository') protected encuestaRepositoryGetter: Getter<EncuestaRepository>, @repository.getter('ComentarioRepository') protected comentarioRepositoryGetter: Getter<ComentarioRepository>,
  ) {
    super(Publicacion, dataSource);
    this.comentarios = this.createHasManyRepositoryFactoryFor('comentarios', comentarioRepositoryGetter,);
    this.registerInclusionResolver('comentarios', this.comentarios.inclusionResolver);
    this.encuesta = this.createHasOneRepositoryFactoryFor('encuesta', encuestaRepositoryGetter);
    this.registerInclusionResolver('encuesta', this.encuesta.inclusionResolver);
    this.etiquetasDePublicacion = this.createHasManyRepositoryFactoryFor('etiquetasDePublicacion', etiquetaPublicacionRepositoryGetter,);
    this.registerInclusionResolver('etiquetasDePublicacion', this.etiquetasDePublicacion.inclusionResolver);
    this.reaccionPublicacions = this.createHasManyRepositoryFactoryFor('reaccionPublicacions', reaccionPublicacionRepositoryGetter,);
    this.registerInclusionResolver('reaccionPublicacions', this.reaccionPublicacions.inclusionResolver);
    this.perfil = this.createBelongsToAccessorFor('perfil', perfilRepositoryGetter,);
    this.registerInclusionResolver('perfil', this.perfil.inclusionResolver);
  }
}
