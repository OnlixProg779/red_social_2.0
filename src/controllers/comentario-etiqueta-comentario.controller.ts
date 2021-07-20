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
  Comentario,
  EtiquetaComentario,
} from '../models';
import {ComentarioRepository} from '../repositories';

export class ComentarioEtiquetaComentarioController {
  constructor(
    @repository(ComentarioRepository) protected comentarioRepository: ComentarioRepository,
  ) { }

  @get('/comentarios/{id}/etiqueta-comentarios', {
    responses: {
      '200': {
        description: 'Array of Comentario has many EtiquetaComentario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(EtiquetaComentario)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<EtiquetaComentario>,
  ): Promise<EtiquetaComentario[]> {
    return this.comentarioRepository.etiquetaComentarios(id).find(filter);
  }

  @post('/comentarios/{id}/etiqueta-comentarios', {
    responses: {
      '200': {
        description: 'Comentario model instance',
        content: {'application/json': {schema: getModelSchemaRef(EtiquetaComentario)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Comentario.prototype.comentarioId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EtiquetaComentario, {
            title: 'NewEtiquetaComentarioInComentario',
            exclude: ['etiquetaComentarioId'],
            optional: ['comentarioId']
          }),
        },
      },
    }) etiquetaComentario: Omit<EtiquetaComentario, 'etiquetaComentarioId'>,
  ): Promise<EtiquetaComentario> {
    return this.comentarioRepository.etiquetaComentarios(id).create(etiquetaComentario);
  }

  @patch('/comentarios/{id}/etiqueta-comentarios', {
    responses: {
      '200': {
        description: 'Comentario.EtiquetaComentario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EtiquetaComentario, {partial: true}),
        },
      },
    })
    etiquetaComentario: Partial<EtiquetaComentario>,
    @param.query.object('where', getWhereSchemaFor(EtiquetaComentario)) where?: Where<EtiquetaComentario>,
  ): Promise<Count> {
    return this.comentarioRepository.etiquetaComentarios(id).patch(etiquetaComentario, where);
  }

  @del('/comentarios/{id}/etiqueta-comentarios', {
    responses: {
      '200': {
        description: 'Comentario.EtiquetaComentario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(EtiquetaComentario)) where?: Where<EtiquetaComentario>,
  ): Promise<Count> {
    return this.comentarioRepository.etiquetaComentarios(id).delete(where);
  }
}
