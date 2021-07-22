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
import {EtiquetaPublicacion, Publicacion} from '../../models';
import {PublicacionRepository} from '../../repositories';

export class PublicacionEtiquetaPublicacionController {
  constructor(
    @repository(PublicacionRepository)
    protected publicacionRepository: PublicacionRepository,
  ) {}

  @get('/publicacions/{id}/etiqueta-publicacions', {
    responses: {
      '200': {
        description: 'Array of Publicacion has many EtiquetaPublicacion',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EtiquetaPublicacion),
            },
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<EtiquetaPublicacion>,
  ): Promise<EtiquetaPublicacion[]> {
    return this.publicacionRepository.etiquetasDePublicacion(id).find(filter);
  }

  @post('/publicacions/{id}/etiqueta-publicacions', {
    responses: {
      '200': {
        description: 'Publicacion model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(EtiquetaPublicacion)},
        },
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Publicacion.prototype.publicacionId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EtiquetaPublicacion, {
            title: 'NewEtiquetaPublicacionInPublicacion',
            exclude: ['etiquetaPublicacionId'],
            optional: ['publicacionId'],
          }),
        },
      },
    })
    etiquetaPublicacion: Omit<EtiquetaPublicacion, 'etiquetaPublicacionId'>,
  ): Promise<EtiquetaPublicacion> {
    return this.publicacionRepository
      .etiquetasDePublicacion(id)
      .create(etiquetaPublicacion);
  }

  @patch('/publicacions/{id}/etiqueta-publicacions', {
    responses: {
      '200': {
        description: 'Publicacion.EtiquetaPublicacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EtiquetaPublicacion, {partial: true}),
        },
      },
    })
    etiquetaPublicacion: Partial<EtiquetaPublicacion>,
    @param.query.object('where', getWhereSchemaFor(EtiquetaPublicacion))
    where?: Where<EtiquetaPublicacion>,
  ): Promise<Count> {
    return this.publicacionRepository
      .etiquetasDePublicacion(id)
      .patch(etiquetaPublicacion, where);
  }

  @del('/publicacions/{id}/etiqueta-publicacions', {
    responses: {
      '200': {
        description: 'Publicacion.EtiquetaPublicacion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(EtiquetaPublicacion))
    where?: Where<EtiquetaPublicacion>,
  ): Promise<Count> {
    return this.publicacionRepository.etiquetasDePublicacion(id).delete(where);
  }
}
