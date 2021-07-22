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
import {Encuesta, RespuestaEncuesta} from '../../models';
import {EncuestaRepository} from '../../repositories';

export class EncuestaRespuestaEncuestaController {
  constructor(
    @repository(EncuestaRepository)
    protected encuestaRepository: EncuestaRepository,
  ) {}

  @get('/encuestas/{id}/respuesta-encuestas', {
    responses: {
      '200': {
        description: 'Array of Encuesta has many RespuestaEncuesta',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(RespuestaEncuesta),
            },
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<RespuestaEncuesta>,
  ): Promise<RespuestaEncuesta[]> {
    return this.encuestaRepository.respuestaEncuestas(id).find(filter);
  }

  @post('/encuestas/{id}/respuesta-encuestas', {
    responses: {
      '200': {
        description: 'Encuesta model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(RespuestaEncuesta)},
        },
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Encuesta.prototype.encuestaId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RespuestaEncuesta, {
            title: 'NewRespuestaEncuestaInEncuesta',
            exclude: ['respuestaEncuestaId'],
            optional: ['encuestaId'],
          }),
        },
      },
    })
    respuestaEncuesta: Omit<RespuestaEncuesta, 'respuestaEncuestaId'>,
  ): Promise<RespuestaEncuesta> {
    return this.encuestaRepository
      .respuestaEncuestas(id)
      .create(respuestaEncuesta);
  }

  @patch('/encuestas/{id}/respuesta-encuestas', {
    responses: {
      '200': {
        description: 'Encuesta.RespuestaEncuesta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RespuestaEncuesta, {partial: true}),
        },
      },
    })
    respuestaEncuesta: Partial<RespuestaEncuesta>,
    @param.query.object('where', getWhereSchemaFor(RespuestaEncuesta))
    where?: Where<RespuestaEncuesta>,
  ): Promise<Count> {
    return this.encuestaRepository
      .respuestaEncuestas(id)
      .patch(respuestaEncuesta, where);
  }

  @del('/encuestas/{id}/respuesta-encuestas', {
    responses: {
      '200': {
        description: 'Encuesta.RespuestaEncuesta DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(RespuestaEncuesta))
    where?: Where<RespuestaEncuesta>,
  ): Promise<Count> {
    return this.encuestaRepository.respuestaEncuestas(id).delete(where);
  }
}
