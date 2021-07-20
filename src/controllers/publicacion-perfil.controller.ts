import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Publicacion,
  Perfil,
} from '../models';
import {PublicacionRepository} from '../repositories';

export class PublicacionPerfilController {
  constructor(
    @repository(PublicacionRepository)
    public publicacionRepository: PublicacionRepository,
  ) { }

  @get('/publicacions/{id}/perfil', {
    responses: {
      '200': {
        description: 'Perfil belonging to Publicacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Perfil)},
          },
        },
      },
    },
  })
  async getPerfil(
    @param.path.string('id') id: typeof Publicacion.prototype.publicacionId,
  ): Promise<Perfil> {
    return this.publicacionRepository.perfil(id);
  }
}
