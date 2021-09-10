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
import {UsuarioHasChat} from '../models';
import {UsuarioHasChatRepository} from '../repositories';

export class UsuarioHasChatController {
  constructor(
    @repository(UsuarioHasChatRepository)
    public usuarioHasChatRepository : UsuarioHasChatRepository,
  ) {}

  @post('/usuario-has-chats')
  @response(200, {
    description: 'UsuarioHasChat model instance',
    content: {'application/json': {schema: getModelSchemaRef(UsuarioHasChat)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioHasChat, {
            title: 'NewUsuarioHasChat',
            
          }),
        },
      },
    })
    usuarioHasChat: UsuarioHasChat,
  ): Promise<UsuarioHasChat> {
    return this.usuarioHasChatRepository.create(usuarioHasChat);
  }

  @get('/usuario-has-chats/count')
  @response(200, {
    description: 'UsuarioHasChat model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UsuarioHasChat) where?: Where<UsuarioHasChat>,
  ): Promise<Count> {
    return this.usuarioHasChatRepository.count(where);
  }

  @get('/usuario-has-chats')
  @response(200, {
    description: 'Array of UsuarioHasChat model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UsuarioHasChat, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UsuarioHasChat) filter?: Filter<UsuarioHasChat>,
  ): Promise<UsuarioHasChat[]> {
    return this.usuarioHasChatRepository.find(filter);
  }

  @patch('/usuario-has-chats')
  @response(200, {
    description: 'UsuarioHasChat PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioHasChat, {partial: true}),
        },
      },
    })
    usuarioHasChat: UsuarioHasChat,
    @param.where(UsuarioHasChat) where?: Where<UsuarioHasChat>,
  ): Promise<Count> {
    return this.usuarioHasChatRepository.updateAll(usuarioHasChat, where);
  }

  @get('/usuario-has-chats/{id}')
  @response(200, {
    description: 'UsuarioHasChat model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UsuarioHasChat, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UsuarioHasChat, {exclude: 'where'}) filter?: FilterExcludingWhere<UsuarioHasChat>
  ): Promise<UsuarioHasChat> {
    return this.usuarioHasChatRepository.findById(id, filter);
  }

  @patch('/usuario-has-chats/{id}')
  @response(204, {
    description: 'UsuarioHasChat PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioHasChat, {partial: true}),
        },
      },
    })
    usuarioHasChat: UsuarioHasChat,
  ): Promise<void> {
    await this.usuarioHasChatRepository.updateById(id, usuarioHasChat);
  }

  @put('/usuario-has-chats/{id}')
  @response(204, {
    description: 'UsuarioHasChat PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuarioHasChat: UsuarioHasChat,
  ): Promise<void> {
    await this.usuarioHasChatRepository.replaceById(id, usuarioHasChat);
  }

  @del('/usuario-has-chats/{id}')
  @response(204, {
    description: 'UsuarioHasChat DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioHasChatRepository.deleteById(id);
  }
}
