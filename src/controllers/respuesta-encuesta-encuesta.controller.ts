import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Encuesta, RespuestaEncuesta} from '../models';
import {RespuestaEncuestaRepository} from '../repositories';

export class RespuestaEncuestaEncuestaController {
  constructor(
    @repository(RespuestaEncuestaRepository)
    public respuestaEncuestaRepository: RespuestaEncuestaRepository,
  ) {}

  @get('/respuesta-encuestas/{id}/encuesta', {
    responses: {
      '200': {
        description: 'Encuesta belonging to RespuestaEncuesta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Encuesta)},
          },
        },
      },
    },
  })
  async getEncuesta(
    @param.path.string('id')
    id: typeof RespuestaEncuesta.prototype.respuestaEncuestaId,
  ): Promise<Encuesta> {
    return this.respuestaEncuestaRepository.encuesta(id);
  }
}
