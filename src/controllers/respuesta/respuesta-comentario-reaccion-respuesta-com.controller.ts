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
import {ReaccionRespuestaCom, RespuestaComentario} from '../../models';
import {RespuestaComentarioRepository} from '../../repositories';

export class RespuestaComentarioReaccionRespuestaComController {
  constructor(
    @repository(RespuestaComentarioRepository)
    protected respuestaComentarioRepository: RespuestaComentarioRepository,
  ) {}

  @get('/respuesta-comentarios/{id}/reaccion-respuesta-coms', {
    responses: {
      '200': {
        description:
          'Array of RespuestaComentario has many ReaccionRespuestaCom',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ReaccionRespuestaCom),
            },
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ReaccionRespuestaCom>,
  ): Promise<ReaccionRespuestaCom[]> {
    return this.respuestaComentarioRepository
      .reaccionRespuestaComs(id)
      .find(filter);
  }

  @post('/respuesta-comentarios/{id}/reaccion-respuesta-coms', {
    responses: {
      '200': {
        description: 'RespuestaComentario model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(ReaccionRespuestaCom)},
        },
      },
    },
  })
  async create(
    @param.path.string('id')
    id: typeof RespuestaComentario.prototype.respuestaComentarioId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReaccionRespuestaCom, {
            title: 'NewReaccionRespuestaComInRespuestaComentario',
            exclude: ['reaccionRespuestaComId'],
            optional: ['respuestaComentarioId'],
          }),
        },
      },
    })
    reaccionRespuestaCom: Omit<ReaccionRespuestaCom, 'reaccionRespuestaComId'>,
  ): Promise<ReaccionRespuestaCom> {
    return this.respuestaComentarioRepository
      .reaccionRespuestaComs(id)
      .create(reaccionRespuestaCom);
  }

  @patch('/respuesta-comentarios/{id}/reaccion-respuesta-coms', {
    responses: {
      '200': {
        description:
          'RespuestaComentario.ReaccionRespuestaCom PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReaccionRespuestaCom, {partial: true}),
        },
      },
    })
    reaccionRespuestaCom: Partial<ReaccionRespuestaCom>,
    @param.query.object('where', getWhereSchemaFor(ReaccionRespuestaCom))
    where?: Where<ReaccionRespuestaCom>,
  ): Promise<Count> {
    return this.respuestaComentarioRepository
      .reaccionRespuestaComs(id)
      .patch(reaccionRespuestaCom, where);
  }

  @del('/respuesta-comentarios/{id}/reaccion-respuesta-coms', {
    responses: {
      '200': {
        description:
          'RespuestaComentario.ReaccionRespuestaCom DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ReaccionRespuestaCom))
    where?: Where<ReaccionRespuestaCom>,
  ): Promise<Count> {
    return this.respuestaComentarioRepository
      .reaccionRespuestaComs(id)
      .delete(where);
  }
}
