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
import {Perfil, Publicacion} from '../../models';
import {PerfilRepository} from '../../repositories';

export class PerfilPublicacionController {
  constructor(
    @repository(PerfilRepository) protected perfilRepository: PerfilRepository,
  ) {}

  @get('/perfils/{id}/publicacions', {
    responses: {
      '200': {
        description: 'Array of Perfil has many Publicacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Publicacion)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Publicacion>,
  ): Promise<Publicacion[]> {
    return this.perfilRepository.publicaciones(id).find(filter);
  }

  @post('/perfils/{id}/publicacions', {
    responses: {
      '200': {
        description: 'Perfil model instance',
        content: {'application/json': {schema: getModelSchemaRef(Publicacion)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Perfil.prototype.perfilId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Publicacion, {
            title: 'NewPublicacionInPerfil',
            exclude: ['publicacionId'],
            optional: ['perfilId'],
          }),
        },
      },
    })
    publicacion: Omit<Publicacion, 'publicacionId'>,
  ): Promise<Publicacion> {
    return this.perfilRepository.publicaciones(id).create(publicacion);
  }

  @patch('/perfils/{id}/publicacions', {
    responses: {
      '200': {
        description: 'Perfil.Publicacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Publicacion, {partial: true}),
        },
      },
    })
    publicacion: Partial<Publicacion>,
    @param.query.object('where', getWhereSchemaFor(Publicacion))
    where?: Where<Publicacion>,
  ): Promise<Count> {
    return this.perfilRepository.publicaciones(id).patch(publicacion, where);
  }

  @del('/perfils/{id}/publicacions', {
    responses: {
      '200': {
        description: 'Perfil.Publicacion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Publicacion))
    where?: Where<Publicacion>,
  ): Promise<Count> {
    return this.perfilRepository.publicaciones(id).delete(where);
  }
}
