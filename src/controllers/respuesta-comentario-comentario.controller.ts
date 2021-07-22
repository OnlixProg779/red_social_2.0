import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Comentario, RespuestaComentario} from '../models';
import {RespuestaComentarioRepository} from '../repositories';

export class RespuestaComentarioComentarioController {
  constructor(
    @repository(RespuestaComentarioRepository)
    public respuestaComentarioRepository: RespuestaComentarioRepository,
  ) {}

  @get('/respuesta-comentarios/{id}/comentario', {
    responses: {
      '200': {
        description: 'Comentario belonging to RespuestaComentario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Comentario)},
          },
        },
      },
    },
  })
  async getComentario(
    @param.path.string('id')
    id: typeof RespuestaComentario.prototype.respuestaComentarioId,
  ): Promise<Comentario> {
    return this.respuestaComentarioRepository.comentario(id);
  }
}
