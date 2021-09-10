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
import {ListaSeguidoresUsuario} from '../models';
import {ListaSeguidoresUsuarioRepository} from '../repositories';

export class ListaSeguidoresUsuarioRompimientoController {
  constructor(
    @repository(ListaSeguidoresUsuarioRepository)
    public listaSeguidoresUsuarioRepository : ListaSeguidoresUsuarioRepository,
  ) {}

  @post('/lista-seguidores-usuarios')
  @response(200, {
    description: 'ListaSeguidoresUsuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(ListaSeguidoresUsuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaSeguidoresUsuario, {
            title: 'NewListaSeguidoresUsuario',
            
          }),
        },
      },
    })
    listaSeguidoresUsuario: ListaSeguidoresUsuario,
  ): Promise<ListaSeguidoresUsuario> {
    return this.listaSeguidoresUsuarioRepository.create(listaSeguidoresUsuario);
  }

  @get('/lista-seguidores-usuarios/count')
  @response(200, {
    description: 'ListaSeguidoresUsuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ListaSeguidoresUsuario) where?: Where<ListaSeguidoresUsuario>,
  ): Promise<Count> {
    return this.listaSeguidoresUsuarioRepository.count(where);
  }

  @get('/lista-seguidores-usuarios')
  @response(200, {
    description: 'Array of ListaSeguidoresUsuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ListaSeguidoresUsuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ListaSeguidoresUsuario) filter?: Filter<ListaSeguidoresUsuario>,
  ): Promise<ListaSeguidoresUsuario[]> {
    return this.listaSeguidoresUsuarioRepository.find(filter);
  }

  @patch('/lista-seguidores-usuarios')
  @response(200, {
    description: 'ListaSeguidoresUsuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaSeguidoresUsuario, {partial: true}),
        },
      },
    })
    listaSeguidoresUsuario: ListaSeguidoresUsuario,
    @param.where(ListaSeguidoresUsuario) where?: Where<ListaSeguidoresUsuario>,
  ): Promise<Count> {
    return this.listaSeguidoresUsuarioRepository.updateAll(listaSeguidoresUsuario, where);
  }

  @get('/lista-seguidores-usuarios/{id}')
  @response(200, {
    description: 'ListaSeguidoresUsuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ListaSeguidoresUsuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ListaSeguidoresUsuario, {exclude: 'where'}) filter?: FilterExcludingWhere<ListaSeguidoresUsuario>
  ): Promise<ListaSeguidoresUsuario> {
    return this.listaSeguidoresUsuarioRepository.findById(id, filter);
  }

  @patch('/lista-seguidores-usuarios/{id}')
  @response(204, {
    description: 'ListaSeguidoresUsuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaSeguidoresUsuario, {partial: true}),
        },
      },
    })
    listaSeguidoresUsuario: ListaSeguidoresUsuario,
  ): Promise<void> {
    await this.listaSeguidoresUsuarioRepository.updateById(id, listaSeguidoresUsuario);
  }

  @put('/lista-seguidores-usuarios/{id}')
  @response(204, {
    description: 'ListaSeguidoresUsuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() listaSeguidoresUsuario: ListaSeguidoresUsuario,
  ): Promise<void> {
    await this.listaSeguidoresUsuarioRepository.replaceById(id, listaSeguidoresUsuario);
  }

  @del('/lista-seguidores-usuarios/{id}')
  @response(204, {
    description: 'ListaSeguidoresUsuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.listaSeguidoresUsuarioRepository.deleteById(id);
  }
}
