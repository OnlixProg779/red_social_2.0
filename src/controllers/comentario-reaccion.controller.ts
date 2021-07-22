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
import {Comentario, Reaccion} from '../models';
import {ComentarioRepository} from '../repositories';

export class ComentarioReaccionController {
  constructor(
    @repository(ComentarioRepository)
    protected comentarioRepository: ComentarioRepository,
  ) {}

  @get('/comentarios/{id}/reaccions', {
    responses: {
      '200': {
        description: 'Array of Comentario has many Reaccion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Reaccion)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Reaccion>,
  ): Promise<Reaccion[]> {
    return this.comentarioRepository.reaccions(id).find(filter);
  }

  @post('/comentarios/{id}/reaccions', {
    responses: {
      '200': {
        description: 'Comentario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Reaccion)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Comentario.prototype.comentarioId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reaccion, {
            title: 'NewReaccionInComentario',
            exclude: ['reaccionId'],
            optional: ['comentarioId'],
          }),
        },
      },
    })
    reaccion: Omit<Reaccion, 'reaccionId'>,
  ): Promise<Reaccion> {
    return this.comentarioRepository.reaccions(id).create(reaccion);
  }

  @patch('/comentarios/{id}/reaccions', {
    responses: {
      '200': {
        description: 'Comentario.Reaccion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reaccion, {partial: true}),
        },
      },
    })
    reaccion: Partial<Reaccion>,
    @param.query.object('where', getWhereSchemaFor(Reaccion))
    where?: Where<Reaccion>,
  ): Promise<Count> {
    return this.comentarioRepository.reaccions(id).patch(reaccion, where);
  }

  @del('/comentarios/{id}/reaccions', {
    responses: {
      '200': {
        description: 'Comentario.Reaccion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Reaccion))
    where?: Where<Reaccion>,
  ): Promise<Count> {
    return this.comentarioRepository.reaccions(id).delete(where);
  }
}
