import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {EtiquetaHistoria, Historia} from '../../models';
import {EtiquetaHistoriaRepository} from '../../repositories';

export class EtiquetaHistoriaHistoriaController {
  constructor(
    @repository(EtiquetaHistoriaRepository)
    public etiquetaHistoriaRepository: EtiquetaHistoriaRepository,
  ) {}

  @get('/etiqueta-historias/{id}/historia', {
    responses: {
      '200': {
        description: 'Historia belonging to EtiquetaHistoria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Historia)},
          },
        },
      },
    },
  })
  async getHistoria(
    @param.path.string('id')
    id: typeof EtiquetaHistoria.prototype.etiquetaHistoriaId,
  ): Promise<Historia> {
    return this.etiquetaHistoriaRepository.historia(id);
  }
}
