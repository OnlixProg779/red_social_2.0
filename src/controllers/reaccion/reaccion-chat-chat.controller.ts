import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Chat, ReaccionChat} from '../../models';
import {ReaccionChatRepository} from '../../repositories';

export class ReaccionChatChatController {
  constructor(
    @repository(ReaccionChatRepository)
    public reaccionChatRepository: ReaccionChatRepository,
  ) {}

  @get('/reaccion-chats/{id}/chat', {
    responses: {
      '200': {
        description: 'Chat belonging to ReaccionChat',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Chat)},
          },
        },
      },
    },
  })
  async getChat(
    @param.path.string('id') id: typeof ReaccionChat.prototype.reaccionChatId,
  ): Promise<Chat> {
    return this.reaccionChatRepository.chat(id);
  }
}
