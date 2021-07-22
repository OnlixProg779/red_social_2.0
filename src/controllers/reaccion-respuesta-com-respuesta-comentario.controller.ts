import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {ReaccionRespuestaCom, RespuestaComentario} from '../models';
import {ReaccionRespuestaComRepository} from '../repositories';

export class ReaccionRespuestaComRespuestaComentarioController {
  constructor(
    @repository(ReaccionRespuestaComRepository)
    public reaccionRespuestaComRepository: ReaccionRespuestaComRepository,
  ) {}

  @get('/reaccion-respuesta-coms/{id}/respuesta-comentario', {
    responses: {
      '200': {
        description: 'RespuestaComentario belonging to ReaccionRespuestaCom',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(RespuestaComentario),
            },
          },
        },
      },
    },
  })
  async getRespuestaComentario(
    @param.path.string('id')
    id: typeof ReaccionRespuestaCom.prototype.reaccionRespuestaComId,
  ): Promise<RespuestaComentario> {
    return this.reaccionRespuestaComRepository.respuestaComentario(id);
  }
}
