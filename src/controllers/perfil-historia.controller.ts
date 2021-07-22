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
import {Historia, Perfil} from '../models';
import {PerfilRepository} from '../repositories';

export class PerfilHistoriaController {
  constructor(
    @repository(PerfilRepository) protected perfilRepository: PerfilRepository,
  ) {}

  @get('/perfils/{id}/historias', {
    responses: {
      '200': {
        description: 'Array of Perfil has many Historia',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Historia)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Historia>,
  ): Promise<Historia[]> {
    return this.perfilRepository.historias(id).find(filter);
  }

  @post('/perfils/{id}/historias', {
    responses: {
      '200': {
        description: 'Perfil model instance',
        content: {'application/json': {schema: getModelSchemaRef(Historia)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Perfil.prototype.perfilId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Historia, {
            title: 'NewHistoriaInPerfil',
            exclude: ['historiaId'],
            optional: ['perfilId'],
          }),
        },
      },
    })
    historia: Omit<Historia, 'historiaId'>,
  ): Promise<Historia> {
    return this.perfilRepository.historias(id).create(historia);
  }

  @patch('/perfils/{id}/historias', {
    responses: {
      '200': {
        description: 'Perfil.Historia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Historia, {partial: true}),
        },
      },
    })
    historia: Partial<Historia>,
    @param.query.object('where', getWhereSchemaFor(Historia))
    where?: Where<Historia>,
  ): Promise<Count> {
    return this.perfilRepository.historias(id).patch(historia, where);
  }

  @del('/perfils/{id}/historias', {
    responses: {
      '200': {
        description: 'Perfil.Historia DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Historia))
    where?: Where<Historia>,
  ): Promise<Count> {
    return this.perfilRepository.historias(id).delete(where);
  }
}
