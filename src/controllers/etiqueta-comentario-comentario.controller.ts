import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  EtiquetaComentario,
  Comentario,
} from '../models';
import {EtiquetaComentarioRepository} from '../repositories';

export class EtiquetaComentarioComentarioController {
  constructor(
    @repository(EtiquetaComentarioRepository)
    public etiquetaComentarioRepository: EtiquetaComentarioRepository,
  ) { }

  @get('/etiqueta-comentarios/{id}/comentario', {
    responses: {
      '200': {
        description: 'Comentario belonging to EtiquetaComentario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Comentario)},
          },
        },
      },
    },
  })
  async getComentario(
    @param.path.string('id') id: typeof EtiquetaComentario.prototype.etiquetaComentarioId,
  ): Promise<Comentario> {
    return this.etiquetaComentarioRepository.comentario(id);
  }
}
