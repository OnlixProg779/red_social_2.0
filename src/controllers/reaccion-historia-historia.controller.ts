import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ReaccionHistoria,
  Historia,
} from '../models';
import {ReaccionHistoriaRepository} from '../repositories';

export class ReaccionHistoriaHistoriaController {
  constructor(
    @repository(ReaccionHistoriaRepository)
    public reaccionHistoriaRepository: ReaccionHistoriaRepository,
  ) { }

  @get('/reaccion-historias/{id}/historia', {
    responses: {
      '200': {
        description: 'Historia belonging to ReaccionHistoria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Historia)},
          },
        },
      },
    },
  })
  async getHistoria(
    @param.path.string('id') id: typeof ReaccionHistoria.prototype.reaccionHistoriaId,
  ): Promise<Historia> {
    return this.reaccionHistoriaRepository.historia(id);
  }
}
