import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Publicacion, PublicacionRelations, Perfil} from '../models';
import {PerfilRepository} from './perfil.repository';

export class PublicacionRepository extends DefaultCrudRepository<
  Publicacion,
  typeof Publicacion.prototype.publicacionId,
  PublicacionRelations
> {

  public readonly perfil: BelongsToAccessor<Perfil, typeof Publicacion.prototype.publicacionId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('PerfilRepository') protected perfilRepositoryGetter: Getter<PerfilRepository>,
  ) {
    super(Publicacion, dataSource);
    this.perfil = this.createBelongsToAccessorFor('perfil', perfilRepositoryGetter,);
    this.registerInclusionResolver('perfil', this.perfil.inclusionResolver);
  }
}
