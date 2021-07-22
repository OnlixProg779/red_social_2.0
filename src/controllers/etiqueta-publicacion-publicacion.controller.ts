import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {EtiquetaPublicacion, Publicacion} from '../models';
import {EtiquetaPublicacionRepository} from '../repositories';

export class EtiquetaPublicacionPublicacionController {
  constructor(
    @repository(EtiquetaPublicacionRepository)
    public etiquetaPublicacionRepository: EtiquetaPublicacionRepository,
  ) {}

  @get('/etiqueta-publicacions/{id}/publicacion', {
    responses: {
      '200': {
        description: 'Publicacion belonging to EtiquetaPublicacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Publicacion)},
          },
        },
      },
    },
  })
  async getPublicacion(
    @param.path.string('id')
    id: typeof EtiquetaPublicacion.prototype.etiquetaPublicacionId,
  ): Promise<Publicacion> {
    return this.etiquetaPublicacionRepository.publicacion(id);
  }
}
