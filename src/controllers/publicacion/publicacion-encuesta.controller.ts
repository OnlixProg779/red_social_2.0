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
import {Encuesta, Publicacion} from '../../models';
import {PublicacionRepository} from '../../repositories';

export class PublicacionEncuestaController {
  constructor(
    @repository(PublicacionRepository)
    protected publicacionRepository: PublicacionRepository,
  ) {}

  @get('/publicacions/{id}/encuesta', {
    responses: {
      '200': {
        description: 'Publicacion has one Encuesta',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Encuesta),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Encuesta>,
  ): Promise<Encuesta> {
    return this.publicacionRepository.encuesta(id).get(filter);
  }

  @post('/publicacions/{id}/encuesta', {
    responses: {
      '200': {
        description: 'Publicacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Encuesta)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Publicacion.prototype.publicacionId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encuesta, {
            title: 'NewEncuestaInPublicacion',
            exclude: ['encuestaId'],
            optional: ['publicacionId'],
          }),
        },
      },
    })
    encuesta: Omit<Encuesta, 'encuestaId'>,
  ): Promise<Encuesta> {
    return this.publicacionRepository.encuesta(id).create(encuesta);
  }

  @patch('/publicacions/{id}/encuesta', {
    responses: {
      '200': {
        description: 'Publicacion.Encuesta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encuesta, {partial: true}),
        },
      },
    })
    encuesta: Partial<Encuesta>,
    @param.query.object('where', getWhereSchemaFor(Encuesta))
    where?: Where<Encuesta>,
  ): Promise<Count> {
    return this.publicacionRepository.encuesta(id).patch(encuesta, where);
  }

  @del('/publicacions/{id}/encuesta', {
    responses: {
      '200': {
        description: 'Publicacion.Encuesta DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Encuesta))
    where?: Where<Encuesta>,
  ): Promise<Count> {
    return this.publicacionRepository.encuesta(id).delete(where);
  }
}
