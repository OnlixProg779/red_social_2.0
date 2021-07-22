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
import {Chat, Usuario} from '../../models';
import {UsuarioRepository} from '../../repositories';

export class UsuarioChatController {
  constructor(
    @repository(UsuarioRepository)
    protected usuarioRepository: UsuarioRepository,
  ) {}

  @get('/usuarios/{id}/chats', {
    responses: {
      '200': {
        description: 'Array of Usuario has many Chat through UsuarioHasChat',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Chat)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Chat>,
  ): Promise<Chat[]> {
    return this.usuarioRepository.chats(id).find(filter);
  }

  @post('/usuarios/{id}/chats', {
    responses: {
      '200': {
        description: 'create a Chat model instance',
        content: {'application/json': {schema: getModelSchemaRef(Chat)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.usuarioId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Chat, {
            title: 'NewChatInUsuario',
            exclude: ['chatId'],
          }),
        },
      },
    })
    chat: Omit<Chat, 'chatId'>,
  ): Promise<Chat> {
    return this.usuarioRepository.chats(id).create(chat);
  }

  @patch('/usuarios/{id}/chats', {
    responses: {
      '200': {
        description: 'Usuario.Chat PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Chat, {partial: true}),
        },
      },
    })
    chat: Partial<Chat>,
    @param.query.object('where', getWhereSchemaFor(Chat)) where?: Where<Chat>,
  ): Promise<Count> {
    return this.usuarioRepository.chats(id).patch(chat, where);
  }

  @del('/usuarios/{id}/chats', {
    responses: {
      '200': {
        description: 'Usuario.Chat DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Chat)) where?: Where<Chat>,
  ): Promise<Count> {
    return this.usuarioRepository.chats(id).delete(where);
  }
}
