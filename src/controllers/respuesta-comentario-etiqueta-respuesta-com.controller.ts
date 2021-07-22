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
import {EtiquetaRespuestaCom, RespuestaComentario} from '../models';
import {RespuestaComentarioRepository} from '../repositories';

export class RespuestaComentarioEtiquetaRespuestaComController {
  constructor(
    @repository(RespuestaComentarioRepository)
    protected respuestaComentarioRepository: RespuestaComentarioRepository,
  ) {}

  @get('/respuesta-comentarios/{id}/etiqueta-respuesta-coms', {
    responses: {
      '200': {
        description:
          'Array of RespuestaComentario has many EtiquetaRespuestaCom',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EtiquetaRespuestaCom),
            },
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<EtiquetaRespuestaCom>,
  ): Promise<EtiquetaRespuestaCom[]> {
    return this.respuestaComentarioRepository
      .etiquetaRespuestaComs(id)
      .find(filter);
  }

  @post('/respuesta-comentarios/{id}/etiqueta-respuesta-coms', {
    responses: {
      '200': {
        description: 'RespuestaComentario model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(EtiquetaRespuestaCom)},
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
          schema: getModelSchemaRef(EtiquetaRespuestaCom, {
            title: 'NewEtiquetaRespuestaComInRespuestaComentario',
            exclude: ['etiquetaRespuestaComId'],
            optional: ['respuestaComentarioId'],
          }),
        },
      },
    })
    etiquetaRespuestaCom: Omit<EtiquetaRespuestaCom, 'etiquetaRespuestaComId'>,
  ): Promise<EtiquetaRespuestaCom> {
    return this.respuestaComentarioRepository
      .etiquetaRespuestaComs(id)
      .create(etiquetaRespuestaCom);
  }

  @patch('/respuesta-comentarios/{id}/etiqueta-respuesta-coms', {
    responses: {
      '200': {
        description:
          'RespuestaComentario.EtiquetaRespuestaCom PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EtiquetaRespuestaCom, {partial: true}),
        },
      },
    })
    etiquetaRespuestaCom: Partial<EtiquetaRespuestaCom>,
    @param.query.object('where', getWhereSchemaFor(EtiquetaRespuestaCom))
    where?: Where<EtiquetaRespuestaCom>,
  ): Promise<Count> {
    return this.respuestaComentarioRepository
      .etiquetaRespuestaComs(id)
      .patch(etiquetaRespuestaCom, where);
  }

  @del('/respuesta-comentarios/{id}/etiqueta-respuesta-coms', {
    responses: {
      '200': {
        description:
          'RespuestaComentario.EtiquetaRespuestaCom DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(EtiquetaRespuestaCom))
    where?: Where<EtiquetaRespuestaCom>,
  ): Promise<Count> {
    return this.respuestaComentarioRepository
      .etiquetaRespuestaComs(id)
      .delete(where);
  }
}
