import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Historia,
  ReaccionHistoria,
} from '../models';
import {HistoriaRepository} from '../repositories';

export class HistoriaReaccionHistoriaController {
  constructor(
    @repository(HistoriaRepository) protected historiaRepository: HistoriaRepository,
  ) { }

  @get('/historias/{id}/reaccion-historias', {
    responses: {
      '200': {
        description: 'Array of Historia has many ReaccionHistoria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ReaccionHistoria)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ReaccionHistoria>,
  ): Promise<ReaccionHistoria[]> {
    return this.historiaRepository.reaccionHistorias(id).find(filter);
  }

  @post('/historias/{id}/reaccion-historias', {
    responses: {
      '200': {
        description: 'Historia model instance',
        content: {'application/json': {schema: getModelSchemaRef(ReaccionHistoria)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Historia.prototype.historiaId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReaccionHistoria, {
            title: 'NewReaccionHistoriaInHistoria',
            exclude: ['reaccionHistoriaId'],
            optional: ['historiaId']
          }),
        },
      },
    }) reaccionHistoria: Omit<ReaccionHistoria, 'reaccionHistoriaId'>,
  ): Promise<ReaccionHistoria> {
    return this.historiaRepository.reaccionHistorias(id).create(reaccionHistoria);
  }

  @patch('/historias/{id}/reaccion-historias', {
    responses: {
      '200': {
        description: 'Historia.ReaccionHistoria PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReaccionHistoria, {partial: true}),
        },
      },
    })
    reaccionHistoria: Partial<ReaccionHistoria>,
    @param.query.object('where', getWhereSchemaFor(ReaccionHistoria)) where?: Where<ReaccionHistoria>,
  ): Promise<Count> {
    return this.historiaRepository.reaccionHistorias(id).patch(reaccionHistoria, where);
  }

  @del('/historias/{id}/reaccion-historias', {
    responses: {
      '200': {
        description: 'Historia.ReaccionHistoria DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ReaccionHistoria)) where?: Where<ReaccionHistoria>,
  ): Promise<Count> {
    return this.historiaRepository.reaccionHistorias(id).delete(where);
  }
}
