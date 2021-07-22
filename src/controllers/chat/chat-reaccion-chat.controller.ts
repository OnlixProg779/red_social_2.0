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
import {Chat, ReaccionChat} from '../../models';
import {ChatRepository} from '../../repositories';

export class ChatReaccionChatController {
  constructor(
    @repository(ChatRepository) protected chatRepository: ChatRepository,
  ) {}

  @get('/chats/{id}/reaccion-chats', {
    responses: {
      '200': {
        description: 'Array of Chat has many ReaccionChat',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ReaccionChat)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ReaccionChat>,
  ): Promise<ReaccionChat[]> {
    return this.chatRepository.reaccionChats(id).find(filter);
  }

  @post('/chats/{id}/reaccion-chats', {
    responses: {
      '200': {
        description: 'Chat model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(ReaccionChat)},
        },
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Chat.prototype.chatId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReaccionChat, {
            title: 'NewReaccionChatInChat',
            exclude: ['reaccionChatId'],
            optional: ['chatId'],
          }),
        },
      },
    })
    reaccionChat: Omit<ReaccionChat, 'reaccionChatId'>,
  ): Promise<ReaccionChat> {
    return this.chatRepository.reaccionChats(id).create(reaccionChat);
  }

  @patch('/chats/{id}/reaccion-chats', {
    responses: {
      '200': {
        description: 'Chat.ReaccionChat PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReaccionChat, {partial: true}),
        },
      },
    })
    reaccionChat: Partial<ReaccionChat>,
    @param.query.object('where', getWhereSchemaFor(ReaccionChat))
    where?: Where<ReaccionChat>,
  ): Promise<Count> {
    return this.chatRepository.reaccionChats(id).patch(reaccionChat, where);
  }

  @del('/chats/{id}/reaccion-chats', {
    responses: {
      '200': {
        description: 'Chat.ReaccionChat DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ReaccionChat))
    where?: Where<ReaccionChat>,
  ): Promise<Count> {
    return this.chatRepository.reaccionChats(id).delete(where);
  }
}
