import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Comentario, Reaccion} from '../../models';
import {ReaccionRepository} from '../../repositories';

export class ReaccionComentarioController {
  constructor(
    @repository(ReaccionRepository)
    public reaccionRepository: ReaccionRepository,
  ) {}

  @get('/reaccions/{id}/comentario', {
    responses: {
      '200': {
        description: 'Comentario belonging to Reaccion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Comentario)},
          },
        },
      },
    },
  })
  async getComentario(
    @param.path.string('id') id: typeof Reaccion.prototype.reaccionId,
  ): Promise<Comentario> {
    return this.reaccionRepository.comentario(id);
  }
}
