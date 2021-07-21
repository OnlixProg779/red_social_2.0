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
  EtiquetaHistoria,
} from '../models';
import {HistoriaRepository} from '../repositories';

export class HistoriaEtiquetaHistoriaController {
  constructor(
    @repository(HistoriaRepository) protected historiaRepository: HistoriaRepository,
  ) { }

  @get('/historias/{id}/etiqueta-historias', {
    responses: {
      '200': {
        description: 'Array of Historia has many EtiquetaHistoria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(EtiquetaHistoria)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<EtiquetaHistoria>,
  ): Promise<EtiquetaHistoria[]> {
    return this.historiaRepository.etiquetaHistorias(id).find(filter);
  }

  @post('/historias/{id}/etiqueta-historias', {
    responses: {
      '200': {
        description: 'Historia model instance',
        content: {'application/json': {schema: getModelSchemaRef(EtiquetaHistoria)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Historia.prototype.historiaId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EtiquetaHistoria, {
            title: 'NewEtiquetaHistoriaInHistoria',
            exclude: ['etiquetaHistoriaId'],
            optional: ['historiaId']
          }),
        },
      },
    }) etiquetaHistoria: Omit<EtiquetaHistoria, 'etiquetaHistoriaId'>,
  ): Promise<EtiquetaHistoria> {
    return this.historiaRepository.etiquetaHistorias(id).create(etiquetaHistoria);
  }

  @patch('/historias/{id}/etiqueta-historias', {
    responses: {
      '200': {
        description: 'Historia.EtiquetaHistoria PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EtiquetaHistoria, {partial: true}),
        },
      },
    })
    etiquetaHistoria: Partial<EtiquetaHistoria>,
    @param.query.object('where', getWhereSchemaFor(EtiquetaHistoria)) where?: Where<EtiquetaHistoria>,
  ): Promise<Count> {
    return this.historiaRepository.etiquetaHistorias(id).patch(etiquetaHistoria, where);
  }

  @del('/historias/{id}/etiqueta-historias', {
    responses: {
      '200': {
        description: 'Historia.EtiquetaHistoria DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(EtiquetaHistoria)) where?: Where<EtiquetaHistoria>,
  ): Promise<Count> {
    return this.historiaRepository.etiquetaHistorias(id).delete(where);
  }
}
