import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {RedSocialContextDataSource} from '../datasources';
import {Chat, ChatRelations, ReaccionChat} from '../models';
import {ReaccionChatRepository} from './reaccion-chat.repository';

export class ChatRepository extends DefaultCrudRepository<
  Chat,
  typeof Chat.prototype.chatId,
  ChatRelations
> {

  public readonly reaccionChats: HasManyRepositoryFactory<ReaccionChat, typeof Chat.prototype.chatId>;

  constructor(
    @inject('datasources.RedSocialContext') dataSource: RedSocialContextDataSource, @repository.getter('ReaccionChatRepository') protected reaccionChatRepositoryGetter: Getter<ReaccionChatRepository>,
  ) {
    super(Chat, dataSource);
    this.reaccionChats = this.createHasManyRepositoryFactoryFor('reaccionChats', reaccionChatRepositoryGetter,);
    this.registerInclusionResolver('reaccionChats', this.reaccionChats.inclusionResolver);
  }
}
