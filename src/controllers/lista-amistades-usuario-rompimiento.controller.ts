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
import {ListaAmistadesUsuario} from '../models';
import {ListaAmistadesUsuarioRepository} from '../repositories';

export class ListaAmistadesUsuarioRompimientoController {
  constructor(
    @repository(ListaAmistadesUsuarioRepository)
    public listaAmistadesUsuarioRepository : ListaAmistadesUsuarioRepository,
  ) {}

  @post('/lista-amistades-usuarios')
  @response(200, {
    description: 'ListaAmistadesUsuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(ListaAmistadesUsuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaAmistadesUsuario, {
            title: 'NewListaAmistadesUsuario',
            
          }),
        },
      },
    })
    listaAmistadesUsuario: ListaAmistadesUsuario,
  ): Promise<ListaAmistadesUsuario> {
    return this.listaAmistadesUsuarioRepository.create(listaAmistadesUsuario);
  }

  @get('/lista-amistades-usuarios/count')
  @response(200, {
    description: 'ListaAmistadesUsuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ListaAmistadesUsuario) where?: Where<ListaAmistadesUsuario>,
  ): Promise<Count> {
    return this.listaAmistadesUsuarioRepository.count(where);
  }

  @get('/lista-amistades-usuarios')
  @response(200, {
    description: 'Array of ListaAmistadesUsuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ListaAmistadesUsuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ListaAmistadesUsuario) filter?: Filter<ListaAmistadesUsuario>,
  ): Promise<ListaAmistadesUsuario[]> {
    return this.listaAmistadesUsuarioRepository.find(filter);
  }

  @patch('/lista-amistades-usuarios')
  @response(200, {
    description: 'ListaAmistadesUsuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaAmistadesUsuario, {partial: true}),
        },
      },
    })
    listaAmistadesUsuario: ListaAmistadesUsuario,
    @param.where(ListaAmistadesUsuario) where?: Where<ListaAmistadesUsuario>,
  ): Promise<Count> {
    return this.listaAmistadesUsuarioRepository.updateAll(listaAmistadesUsuario, where);
  }

  @get('/lista-amistades-usuarios/{id}')
  @response(200, {
    description: 'ListaAmistadesUsuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ListaAmistadesUsuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ListaAmistadesUsuario, {exclude: 'where'}) filter?: FilterExcludingWhere<ListaAmistadesUsuario>
  ): Promise<ListaAmistadesUsuario> {
    return this.listaAmistadesUsuarioRepository.findById(id, filter);
  }

  @patch('/lista-amistades-usuarios/{id}')
  @response(204, {
    description: 'ListaAmistadesUsuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaAmistadesUsuario, {partial: true}),
        },
      },
    })
    listaAmistadesUsuario: ListaAmistadesUsuario,
  ): Promise<void> {
    await this.listaAmistadesUsuarioRepository.updateById(id, listaAmistadesUsuario);
  }

  @put('/lista-amistades-usuarios/{id}')
  @response(204, {
    description: 'ListaAmistadesUsuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() listaAmistadesUsuario: ListaAmistadesUsuario,
  ): Promise<void> {
    await this.listaAmistadesUsuarioRepository.replaceById(id, listaAmistadesUsuario);
  }

  @del('/lista-amistades-usuarios/{id}')
  @response(204, {
    description: 'ListaAmistadesUsuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.listaAmistadesUsuarioRepository.deleteById(id);
  }
}
