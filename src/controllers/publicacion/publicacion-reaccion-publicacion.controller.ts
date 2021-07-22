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
import {Publicacion, ReaccionPublicacion} from '../../models';
import {PublicacionRepository} from '../../repositories';

export class PublicacionReaccionPublicacionController {
  constructor(
    @repository(PublicacionRepository)
    protected publicacionRepository: PublicacionRepository,
  ) {}

  @get('/publicacions/{id}/reaccion-publicacions', {
    responses: {
      '200': {
        description: 'Array of Publicacion has many ReaccionPublicacion',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ReaccionPublicacion),
            },
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ReaccionPublicacion>,
  ): Promise<ReaccionPublicacion[]> {
    return this.publicacionRepository.reaccionPublicacions(id).find(filter);
  }

  @post('/publicacions/{id}/reaccion-publicacions', {
    responses: {
      '200': {
        description: 'Publicacion model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(ReaccionPublicacion)},
        },
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Publicacion.prototype.publicacionId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReaccionPublicacion, {
            title: 'NewReaccionPublicacionInPublicacion',
            exclude: ['reaccionPublicacionId'],
            optional: ['publicacionId'],
          }),
        },
      },
    })
    reaccionPublicacion: Omit<ReaccionPublicacion, 'reaccionPublicacionId'>,
  ): Promise<ReaccionPublicacion> {
    return this.publicacionRepository
      .reaccionPublicacions(id)
      .create(reaccionPublicacion);
  }

  @patch('/publicacions/{id}/reaccion-publicacions', {
    responses: {
      '200': {
        description: 'Publicacion.ReaccionPublicacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReaccionPublicacion, {partial: true}),
        },
      },
    })
    reaccionPublicacion: Partial<ReaccionPublicacion>,
    @param.query.object('where', getWhereSchemaFor(ReaccionPublicacion))
    where?: Where<ReaccionPublicacion>,
  ): Promise<Count> {
    return this.publicacionRepository
      .reaccionPublicacions(id)
      .patch(reaccionPublicacion, where);
  }

  @del('/publicacions/{id}/reaccion-publicacions', {
    responses: {
      '200': {
        description: 'Publicacion.ReaccionPublicacion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ReaccionPublicacion))
    where?: Where<ReaccionPublicacion>,
  ): Promise<Count> {
    return this.publicacionRepository.reaccionPublicacions(id).delete(where);
  }
}
