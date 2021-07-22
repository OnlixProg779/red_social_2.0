import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Publicacion, ReaccionPublicacion} from '../models';
import {ReaccionPublicacionRepository} from '../repositories';

export class ReaccionPublicacionPublicacionController {
  constructor(
    @repository(ReaccionPublicacionRepository)
    public reaccionPublicacionRepository: ReaccionPublicacionRepository,
  ) {}

  @get('/reaccion-publicacions/{id}/publicacion', {
    responses: {
      '200': {
        description: 'Publicacion belonging to ReaccionPublicacion',
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
    id: typeof ReaccionPublicacion.prototype.reaccionPublicacionId,
  ): Promise<Publicacion> {
    return this.reaccionPublicacionRepository.publicacion(id);
  }
}
