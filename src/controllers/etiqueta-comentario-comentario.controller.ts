import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Comentario, EtiquetaComentario} from '../models';
import {EtiquetaComentarioRepository} from '../repositories';

export class EtiquetaComentarioComentarioController {
  constructor(
    @repository(EtiquetaComentarioRepository)
    public etiquetaComentarioRepository: EtiquetaComentarioRepository,
  ) {}

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
    @param.path.string('id')
    id: typeof EtiquetaComentario.prototype.etiquetaComentarioId,
  ): Promise<Comentario> {
    return this.etiquetaComentarioRepository.comentario(id);
  }
}
