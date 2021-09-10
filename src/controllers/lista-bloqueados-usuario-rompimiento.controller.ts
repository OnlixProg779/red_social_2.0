import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ListaBloqueadosUsuario} from '../models';
import {ListaBloqueadosUsuarioRepository} from '../repositories';

export class ListaBloqueadosUsuarioRompimientoController {
  constructor(
    @repository(ListaBloqueadosUsuarioRepository)
    public listaBloqueadosUsuarioRepository : ListaBloqueadosUsuarioRepository,
  ) {}

  @post('/lista-bloqueados-usuarios')
  @response(200, {
    description: 'ListaBloqueadosUsuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(ListaBloqueadosUsuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaBloqueadosUsuario, {
            title: 'NewListaBloqueadosUsuario',
            
          }),
        },
      },
    })
    listaBloqueadosUsuario: ListaBloqueadosUsuario,
  ): Promise<ListaBloqueadosUsuario> {
    return this.listaBloqueadosUsuarioRepository.create(listaBloqueadosUsuario);
  }

  @get('/lista-bloqueados-usuarios/count')
  @response(200, {
    description: 'ListaBloqueadosUsuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ListaBloqueadosUsuario) where?: Where<ListaBloqueadosUsuario>,
  ): Promise<Count> {
    return this.listaBloqueadosUsuarioRepository.count(where);
  }

  @get('/lista-bloqueados-usuarios')
  @response(200, {
    description: 'Array of ListaBloqueadosUsuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ListaBloqueadosUsuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ListaBloqueadosUsuario) filter?: Filter<ListaBloqueadosUsuario>,
  ): Promise<ListaBloqueadosUsuario[]> {
    return this.listaBloqueadosUsuarioRepository.find(filter);
  }

  @patch('/lista-bloqueados-usuarios')
  @response(200, {
    description: 'ListaBloqueadosUsuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaBloqueadosUsuario, {partial: true}),
        },
      },
    })
    listaBloqueadosUsuario: ListaBloqueadosUsuario,
    @param.where(ListaBloqueadosUsuario) where?: Where<ListaBloqueadosUsuario>,
  ): Promise<Count> {
    return this.listaBloqueadosUsuarioRepository.updateAll(listaBloqueadosUsuario, where);
  }

  @get('/lista-bloqueados-usuarios/{id}')
  @response(200, {
    description: 'ListaBloqueadosUsuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ListaBloqueadosUsuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ListaBloqueadosUsuario, {exclude: 'where'}) filter?: FilterExcludingWhere<ListaBloqueadosUsuario>
  ): Promise<ListaBloqueadosUsuario> {
    return this.listaBloqueadosUsuarioRepository.findById(id, filter);
  }

  @patch('/lista-bloqueados-usuarios/{id}')
  @response(204, {
    description: 'ListaBloqueadosUsuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaBloqueadosUsuario, {partial: true}),
        },
      },
    })
    listaBloqueadosUsuario: ListaBloqueadosUsuario,
  ): Promise<void> {
    await this.listaBloqueadosUsuarioRepository.updateById(id, listaBloqueadosUsuario);
  }

  @put('/lista-bloqueados-usuarios/{id}')
  @response(204, {
    description: 'ListaBloqueadosUsuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() listaBloqueadosUsuario: ListaBloqueadosUsuario,
  ): Promise<void> {
    await this.listaBloqueadosUsuarioRepository.replaceById(id, listaBloqueadosUsuario);
  }

  @del('/lista-bloqueados-usuarios/{id}')
  @response(204, {
    description: 'ListaBloqueadosUsuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.listaBloqueadosUsuarioRepository.deleteById(id);
  }
}
