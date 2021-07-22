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
import {ChatRepository} from '../../repositories';

export class ChatUsuarioController {
  constructor(
    @repository(ChatRepository) protected chatRepository: ChatRepository,
  ) {}

  @get('/chats/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Array of Chat has many Usuario through UsuarioHasChat',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.chatRepository.usuarios(id).find(filter);
  }

  @post('/chats/{id}/usuarios', {
    responses: {
      '200': {
        description: 'create a Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Chat.prototype.chatId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuarioInChat',
            exclude: ['usuarioId'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'usuarioId'>,
  ): Promise<Usuario> {
    return this.chatRepository.usuarios(id).create(usuario);
  }

  @patch('/chats/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Chat.Usuario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Partial<Usuario>,
    @param.query.object('where', getWhereSchemaFor(Usuario))
    where?: Where<Usuario>,
  ): Promise<Count> {
    return this.chatRepository.usuarios(id).patch(usuario, where);
  }

  @del('/chats/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Chat.Usuario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Usuario))
    where?: Where<Usuario>,
  ): Promise<Count> {
    return this.chatRepository.usuarios(id).delete(where);
  }
}
