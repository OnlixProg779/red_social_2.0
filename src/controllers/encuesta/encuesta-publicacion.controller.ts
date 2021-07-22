import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Encuesta, Publicacion} from '../../models';
import {EncuestaRepository} from '../../repositories';

export class EncuestaPublicacionController {
  constructor(
    @repository(EncuestaRepository)
    public encuestaRepository: EncuestaRepository,
  ) {}

  @get('/encuestas/{id}/publicacion', {
    responses: {
      '200': {
        description: 'Publicacion belonging to Encuesta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Publicacion)},
          },
        },
      },
    },
  })
  async getPublicacion(
    @param.path.string('id') id: typeof Encuesta.prototype.encuestaId,
  ): Promise<Publicacion> {
    return this.encuestaRepository.publicacion(id);
  }
}
