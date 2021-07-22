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
import {Comentario, RespuestaComentario} from '../../models';
import {ComentarioRepository} from '../../repositories';

export class ComentarioRespuestaComentarioController {
  constructor(
    @repository(ComentarioRepository)
    protected comentarioRepository: ComentarioRepository,
  ) {}

  @get('/comentarios/{id}/respuesta-comentarios', {
    responses: {
      '200': {
        description: 'Array of Comentario has many RespuestaComentario',
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
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<RespuestaComentario>,
  ): Promise<RespuestaComentario[]> {
    return this.comentarioRepository.respuestaComentarios(id).find(filter);
  }

  @post('/comentarios/{id}/respuesta-comentarios', {
    responses: {
      '200': {
        description: 'Comentario model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(RespuestaComentario)},
        },
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Comentario.prototype.comentarioId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RespuestaComentario, {
            title: 'NewRespuestaComentarioInComentario',
            exclude: ['respuestaComentarioId'],
            optional: ['comentarioId'],
          }),
        },
      },
    })
    respuestaComentario: Omit<RespuestaComentario, 'respuestaComentarioId'>,
  ): Promise<RespuestaComentario> {
    return this.comentarioRepository
      .respuestaComentarios(id)
      .create(respuestaComentario);
  }

  @patch('/comentarios/{id}/respuesta-comentarios', {
    responses: {
      '200': {
        description: 'Comentario.RespuestaComentario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RespuestaComentario, {partial: true}),
        },
      },
    })
    respuestaComentario: Partial<RespuestaComentario>,
    @param.query.object('where', getWhereSchemaFor(RespuestaComentario))
    where?: Where<RespuestaComentario>,
  ): Promise<Count> {
    return this.comentarioRepository
      .respuestaComentarios(id)
      .patch(respuestaComentario, where);
  }

  @del('/comentarios/{id}/respuesta-comentarios', {
    responses: {
      '200': {
        description: 'Comentario.RespuestaComentario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(RespuestaComentario))
    where?: Where<RespuestaComentario>,
  ): Promise<Count> {
    return this.comentarioRepository.respuestaComentarios(id).delete(where);
  }
}
