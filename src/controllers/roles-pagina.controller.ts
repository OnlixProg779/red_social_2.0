import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {RolesPagina} from '../models';
import {RolesPaginaRepository} from '../repositories';

export class RolesPaginaController {
  constructor(
    @repository(RolesPaginaRepository)
    public rolesPaginaRepository: RolesPaginaRepository,
  ) {}

  @get('/roles-paginas/count')
  @response(200, {
    description: 'RolesPagina model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RolesPagina) where?: Where<RolesPagina>,
  ): Promise<Count> {
    return this.rolesPaginaRepository.count(where);
  }

  @get('/roles-paginas')
  @response(200, {
    description: 'Array of RolesPagina model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RolesPagina, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RolesPagina) filter?: Filter<RolesPagina>,
  ): Promise<RolesPagina[]> {
    return this.rolesPaginaRepository.find(filter);
  }

  @patch('/roles-paginas')
  @response(200, {
    description: 'RolesPagina PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RolesPagina, {partial: true}),
        },
      },
    })
    rolesPagina: RolesPagina,
    @param.where(RolesPagina) where?: Where<RolesPagina>,
  ): Promise<Count> {
    return this.rolesPaginaRepository.updateAll(rolesPagina, where);
  }

  @get('/roles-paginas/{id}')
  @response(200, {
    description: 'RolesPagina model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RolesPagina, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RolesPagina, {exclude: 'where'})
    filter?: FilterExcludingWhere<RolesPagina>,
  ): Promise<RolesPagina> {
    return this.rolesPaginaRepository.findById(id, filter);
  }

  @patch('/roles-paginas/{id}')
  @response(204, {
    description: 'RolesPagina PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RolesPagina, {partial: true}),
        },
      },
    })
    rolesPagina: RolesPagina,
  ): Promise<void> {
    await this.rolesPaginaRepository.updateById(id, rolesPagina);
  }

  @put('/roles-paginas/{id}')
  @response(204, {
    description: 'RolesPagina PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rolesPagina: RolesPagina,
  ): Promise<void> {
    await this.rolesPaginaRepository.replaceById(id, rolesPagina);
  }

  @del('/roles-paginas/{id}')
  @response(204, {
    description: 'RolesPagina DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rolesPaginaRepository.deleteById(id);
  }
}
