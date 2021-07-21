import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Historia,
  Perfil,
} from '../models';
import {HistoriaRepository} from '../repositories';

export class HistoriaPerfilController {
  constructor(
    @repository(HistoriaRepository)
    public historiaRepository: HistoriaRepository,
  ) { }

  @get('/historias/{id}/perfil', {
    responses: {
      '200': {
        description: 'Perfil belonging to Historia',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Perfil)},
          },
        },
      },
    },
  })
  async getPerfil(
    @param.path.string('id') id: typeof Historia.prototype.historiaId,
  ): Promise<Perfil> {
    return this.historiaRepository.perfil(id);
  }
}
