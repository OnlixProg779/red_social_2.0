import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {EtiquetaRespuestaCom, RespuestaComentario} from '../../models';
import {EtiquetaRespuestaComRepository} from '../../repositories';

export class EtiquetaRespuestaComRespuestaComentarioController {
  constructor(
    @repository(EtiquetaRespuestaComRepository)
    public etiquetaRespuestaComRepository: EtiquetaRespuestaComRepository,
  ) {}

  @get('/etiqueta-respuesta-coms/{id}/respuesta-comentario', {
    responses: {
      '200': {
        description: 'RespuestaComentario belonging to EtiquetaRespuestaCom',
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
    id: typeof EtiquetaRespuestaCom.prototype.etiquetaRespuestaComId,
  ): Promise<RespuestaComentario> {
    return this.etiquetaRespuestaComRepository.respuestaComentario(id);
  }
}
